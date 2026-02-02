import fs from "fs";
import path from "path";
import { Resend } from "resend";

// Minimal file-like shape from FormData's File/Blob in Node
type FileLike = {
  name?: string;
  type?: string;
  arrayBuffer: () => Promise<ArrayBuffer>;
};

// Helper: convert a FileLike to an attachment object for Resend
async function fileToAttachment(file: FileLike) {
  const arrayBuffer = await file.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);
  const base64 = buffer.toString("base64");
  return {
    filename: file.name || "attachment",
    data: base64,
    type: file.type || "application/octet-stream",
    size: buffer.length,
  } as { filename: string; data: string; type: string; size: number };
}

export async function POST(request: Request) {
  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    if (!process.env.RESEND_API_KEY) {
      return Response.json(
        { error: "RESEND_API_KEY not configured" },
        { status: 500 },
      );
    }

    const MAX_ATTACHMENT_BYTES =
      Number(process.env.MAX_ATTACHMENT_BYTES) || 8 * 1024 * 1024; // 8MB default

    const contentType = request.headers.get("content-type") || "";

    let fields: Record<string, string> = {};
    const attachments: Array<{ filename: string; data: string; type: string }> =
      [];
    const savedFiles: Array<{ diskName: string; originalName: string }> = [];

    if (contentType.includes("multipart/form-data")) {
      // Parse FormData from the request (works in Next route handlers)
      const formData = await request.formData();
      for (const [key, value] of formData.entries()) {
        if (key === "attachments") {
          // value should be a File-like object with arrayBuffer()
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          if (value && typeof (value as any).arrayBuffer === "function") {
            const fileLike = value as unknown as FileLike;
            const att = await fileToAttachment(fileLike);

            // Enforce size limit to avoid huge payloads causing network errors
            if (att.size > MAX_ATTACHMENT_BYTES) {
              return Response.json(
                {
                  error: `Attachment ${att.filename} is too large (${Math.round(att.size / 1024)} KB). Max ${Math.round(MAX_ATTACHMENT_BYTES / 1024)} KB.`,
                },
                { status: 413 },
              );
            }

            attachments.push(att);

            // Save a copy under public/uploads so we can include a public download link
            try {
              const uploadDir = path.join(process.cwd(), "public", "uploads");
              fs.mkdirSync(uploadDir, { recursive: true });
              const safeName = att.filename.replace(/[^a-zA-Z0-9._-]/g, "_");
              const diskName = `${Date.now()}-${safeName}`;
              const outPath = path.join(uploadDir, diskName);
              fs.writeFileSync(outPath, Buffer.from(att.data, "base64"));
              savedFiles.push({ diskName, originalName: att.filename });
            } catch (e) {
              // ignore save errors; attachments will still be included in the email
              console.warn("Failed to save uploaded file:", e);
            }
          }
        } else {
          fields[key] = String(value);
        }
      }
    } else {
      // JSON body
      const body = await request.json().catch(() => ({}));
      fields = Object.keys(body).reduce(
        (acc, k) => {
          const v = body[k];
          if (typeof v === "string") acc[k] = v;
          else if (Array.isArray(v)) acc[k] = v.join(", ");
          else acc[k] = String(v ?? "");
          return acc;
        },
        {} as Record<string, string>,
      );
    }

    const fullName = fields.fullName || "";
    const email = fields.email || "";
    const jobrole = fields.jobrole || "";
    const company = fields.company || "";
    const jobDescription = fields.jobDescription || "";
    const goals = fields.goals || "";

    // Build a helpful HTML that also lists attachments and indicates they are attached to the email
    // Build attachments HTML with both note about attached file and a download link (if saved)
    const attachmentsListHtml = attachments.length
      ? `<ul>${attachments
          .map((a) => {
            const saved = savedFiles.find((s) => s.originalName === a.filename);
            const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "";
            const link = saved ? `${baseUrl}/uploads/${saved.diskName}` : "";
            const linkHtml = link
              ? ` — <a href="${link}" target="_blank" rel="noopener">Download</a>`
              : "";
            return `<li><strong>${a.filename}</strong> — attached to this email${linkHtml}</li>`;
          })
          .join("")}</ul>`
      : "<p>No attachments</p>";

    const html = `
      <h1>New booking request</h1>
      <p><strong>Name:</strong> ${String(fullName)}</p>
      <p><strong>Email:</strong> ${String(email)}</p>
      <p><strong>Role:</strong> ${String(jobrole)}</p>
      <p><strong>Company:</strong> ${String(company)}</p>
      <p><strong>Job description:</strong> ${String(jobDescription)}</p>
      <p><strong>Goals:</strong> ${String(goals)}</p>
      <h3>Attachments</h3>
      ${attachmentsListHtml}
      <p>If you have trouble downloading attachments from this email, reply to this message to request a direct link.</p>
    `;

    // Build a plaintext alternative
    const text = `New booking request\nName: ${fullName}\nEmail: ${email}\nRole: ${jobrole}\nCompany: ${company}\nJob description: ${jobDescription}\nGoals: ${goals}\nAttachments: ${attachments.map((a) => a.filename).join(", ")}`;

    const sendPayload = {
      from: "OfferPrep <onboarding@resend.dev>",
      to: ["offerprepjobs@gmail.com"],
      subject: `New booking: ${fullName || email}`,
      html,
      text,
    } as Record<string, unknown>;

    if (attachments.length > 0) {
      // Resend expects each attachment to include either `content` (base64) or `path`.
      // Map our internal `data` field to `content` to satisfy the API.
      sendPayload.attachments = attachments.map((a) => ({
        filename: a.filename,
        content: a.data,
        type: a.type,
      }));
    }

    try {
      // Cast to any to avoid strict CreateEmailOptions type mismatch — we'll rely on runtime shape.
      const result = await resend.emails.send(sendPayload as never);
      return Response.json(result);
    } catch (err) {
      console.error("Resend SDK threw an error:", err);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const e: any = err;
      const details: Record<string, unknown> = {
        message: String(e?.message ?? e),
      };
      if (e?.response) {
        details.responseStatus = e.response.status;
        try {
          details.responseBody = await e.response.text?.();
        } catch (_) {
          details.responseBody = "(unable to read response body)";
        }
      }
      return Response.json(
        { error: "Resend request failed", details },
        { status: 500 },
      );
    }
  } catch (error) {
    return Response.json({ error: String(error) }, { status: 500 });
  }
}
