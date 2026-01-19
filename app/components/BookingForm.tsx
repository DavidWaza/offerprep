import React, { useState } from "react";
import { Send } from "lucide-react";
import { toast } from "sonner";

const BookingForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    jobrole: "",
    company: "",
    jobDescription: "",
    goals: "",
    attachments: [] as File[],
  });

  const [submitting, setSubmitting] = useState(false);
  const [resultMessage, setResultMessage] = useState<string | null>(null);
  const [isDirty, setIsDirty] = useState(false);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

  const handleSubmit = async () => {
    setSubmitting(true);
    setResultMessage(null);

    // Validate required fields before sending
    const required = ["fullName", "email", "jobrole", "company"];
    const errors: Record<string, string> = {};
    for (const key of required) {
      if (
        !formData[key as keyof typeof formData] ||
        String(formData[key as keyof typeof formData]).trim() === ""
      ) {
        errors[key] = "This field is required";
      }
    }
    // simple email validation
    const emailVal = formData.email || "";
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailVal && !emailRegex.test(emailVal)) {
      errors.email = "Enter a valid email address";
    }

    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      const msg =
        `Please complete required fields` +
        (errors.email ? `: ${errors.email}` : "");
      setResultMessage(msg);
      toast.error(msg, {
        position: "top-right",
      });
      setSubmitting(false);
      return;
    }

    try {
      // If there are files, send as multipart/form-data so the server can attach them
      let res: Response;
      if (formData.attachments.length > 0) {
        const fd = new FormData();
        fd.append("fullName", formData.fullName);
        fd.append("email", formData.email);
        fd.append("jobrole", formData.jobrole);
        fd.append("company", formData.company);
        fd.append("jobDescription", formData.jobDescription);
        fd.append("goals", formData.goals);
        formData.attachments.forEach((f) => fd.append("attachments", f));

        res = await fetch("/api/send", {
          method: "POST",
          body: fd,
        });
      } else {
        // Send JSON when there are no files
        const payload = {
          fullName: formData.fullName,
          email: formData.email,
          jobrole: formData.jobrole,
          company: formData.company,
          jobDescription: formData.jobDescription,
          goals: formData.goals,
          attachments: [],
        };

        res = await fetch("/api/send", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
      }

      if (!res.ok) {
        const err = await res.json().catch(() => null);
        const msg = `Failed to submit request${err?.error ? `: ${err.error}` : ""}`;
        setResultMessage(msg);
        toast.error(msg, {
          position: "top-right",
        });
      } else {
        // Read response body — it may include a redirect/payment link (seelarLink)
        const body = await res.json().catch(() => null);
        const successMsg = "Request submitted — we'll be in touch shortly.";
        setResultMessage(successMsg);
        toast.success(successMsg, {
          position: "top-right",
        });

        // If the API returned a seelar/redirect link, open it in a new tab
        const defaultLink = "https://selar.com/m/offerprep";
        const link =
          body?.seelarLink || body?.redirectUrl || body?.url || defaultLink;
        if (link && typeof window !== "undefined") {
          const isDefault = link === defaultLink;
          try {
            if (isDefault) {
              // notify user then wait ~5s before redirecting to the default purchase link (same tab)
              toast("Redirecting to purchase page in 5 seconds...", {
                position: "top-right",
              });
              await new Promise((res) => setTimeout(res, 5000));
              window.location.href = link;
            } else {
              // open non-default (server-provided) links in a new tab
              window.open(link, "_blank");
            }
          } catch (err) {
            console.warn("Failed to open link:", err);
            // fallback: navigate in same tab
            window.location.href = link;
          }
        }

        setFormData({
          fullName: "",
          email: "",
          jobrole: "",
          company: "",
          jobDescription: "",
          goals: "",
          attachments: [],
        });
        setIsDirty(false);
        setFieldErrors({});
      }
    } catch (e) {
      const msg = `Error submitting request: ${String(e)}`;
      setResultMessage(msg);
      toast.error(msg, {
        position: "top-right",
      });
    } finally {
      setSubmitting(false);
    }
  };

  const handleFileChange = (files: FileList | null) => {
    if (!files) return;
    setIsDirty(true);
    setFormData((prev) => ({
      ...prev,
      attachments: Array.from(files),
    }));
  };

  const handleChange = (field: string, value: string) => {
    setIsDirty(true);
    setFieldErrors((prev) => ({ ...prev, [field]: "" }));
    setFormData({
      ...formData,
      [field]: value,
    });
  };

  const isFormValid = () => {
    if (!isDirty) return false;
    const required = ["fullName", "email", "jobrole", "company"];
    for (const key of required) {
      const v = formData[key as keyof typeof formData];
      if (!v || String(v).trim() === "") return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) return false;
    return true;
  };
  return (
    <div>
      <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
        <h3 className="text-2xl font-bold text-[#14325A] mb-6">
          Book Your Session
        </h3>

        <div className="space-y-5">
          {/* Full Name */}
          <div>
            <label className="block text-sm font-semibold text-[#14325A] mb-2">
              Full Name
            </label>
            <input
              type="text"
              value={formData.fullName}
              onChange={(e) => handleChange("fullName", e.target.value)}
              placeholder="John Doe"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#A78BFA] focus:border-transparent transition-all"
            />
            {fieldErrors.fullName && (
              <p className="text-sm text-red-600 mt-1">
                {fieldErrors.fullName}
              </p>
            )}
          </div>

          {/* Email Address */}
          <div>
            <label className="block text-sm font-semibold text-[#14325A] mb-2">
              Email Address
            </label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => handleChange("email", e.target.value)}
              placeholder="john@example.com"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#A78BFA] focus:border-transparent transition-all"
            />
            {fieldErrors.email && (
              <p className="text-sm text-red-600 mt-1">{fieldErrors.email}</p>
            )}
          </div>

          {/* Job Role */}
          <div>
            <label className="block text-sm font-semibold text-[#14325A] mb-2">
              Job Role
            </label>
            <input
              type="text"
              value={formData.jobrole}
              onChange={(e) => handleChange("jobrole", e.target.value)}
              placeholder="Software Developer"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#A78BFA] focus:border-transparent transition-all"
            />
            {fieldErrors.jobrole && (
              <p className="text-sm text-red-600 mt-1">{fieldErrors.jobrole}</p>
            )}
          </div>
          {/* Company */}
          <div>
            <label className="block text-sm font-semibold text-[#14325A] mb-2">
              Company
            </label>
            <input
              type="text"
              value={formData.company}
              onChange={(e) => handleChange("company", e.target.value)}
              placeholder="Anthropic"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#A78BFA] focus:border-transparent transition-all"
            />
            {fieldErrors.company && (
              <p className="text-sm text-red-600 mt-1">{fieldErrors.company}</p>
            )}
          </div>
          {/* Job Desvription */}
          <div>
            <label className="block text-sm font-semibold text-[#14325A] mb-2">
              Job Description (optional)
            </label>
            <textarea
              value={formData.jobDescription}
              onChange={(e) => handleChange("jobDescription", e.target.value)}
              placeholder="Add the company's job description you are interviewing for"
              rows={4}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#A78BFA] focus:border-transparent transition-all resize-none"
            />
          </div>
          {/* Goals */}
          <div>
            <label className="block text-sm font-semibold text-[#14325A] mb-2">
              What is your current goal? (optional)
            </label>
            <textarea
              value={formData.goals}
              onChange={(e) => handleChange("goals", e.target.value)}
              placeholder="What role are you interviewing for? Any specific areas you'd like to focus on?"
              rows={4}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#A78BFA] focus:border-transparent transition-all resize-none"
            />
          </div>

          {/* CV / Supporting Materials */}
          <div>
            <label className="block text-sm font-semibold text-[#14325A] mb-2">
              Upload CV or Supporting Documents
            </label>

            <input
              type="file"
              multiple
              accept=".pdf,.doc,.docx"
              onChange={(e) => handleFileChange(e.target.files)}
              className="w-full px-4 py-3 rounded-xl border border-dashed border-gray-300 
               bg-gray-50 text-sm text-gray-600
               focus:outline-none focus:ring-2 focus:ring-[#A78BFA] 
               focus:border-transparent transition-all cursor-pointer"
            />

            <p className="mt-2 text-xs text-gray-500">
              Accepted formats: PDF, DOC, DOCX. You may upload your CV,
              portfolio, or any other relevant material.
            </p>

            {/* Optional preview */}
            {formData.attachments.length > 0 && (
              <ul className="mt-3 space-y-1 text-sm text-gray-700">
                {formData.attachments.map((file, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#A78BFA] rounded-full" />
                    {file.name}
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Submit Button */}
          <div className="space-y-2">
            <button
              onClick={handleSubmit}
              disabled={!isFormValid() || submitting}
              className="w-full bg-[#A78BFA] text-white font-semibold py-4 px-6 rounded-xl hover:bg-[#8B5CF6] transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl disabled:opacity-60"
            >
              {submitting ? "Sending..." : "Submit Request"}
              <Send className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingForm;
