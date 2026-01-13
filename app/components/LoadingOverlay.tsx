"use client";

import { useEffect, useState, Suspense } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import "./loading-overlay.css";

function LoadingOverlayContent() {
  const [visible, setVisible] = useState(true);
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Hide after initial hydration
  useEffect(() => {
    const t = setTimeout(() => setVisible(false), 300);
    return () => clearTimeout(t);
  }, []);

  // Show loader when route changes (pathname or search params change)
  useEffect(() => {
    const showTimeout = setTimeout(() => setVisible(true), 0);
    const hideTimeout = setTimeout(() => setVisible(false), 300);
    return () => {
      clearTimeout(showTimeout);
      clearTimeout(hideTimeout);
    };
  }, [pathname, searchParams]);

  // Show loader when the user refreshes or closes the page
  useEffect(() => {
    const onBefore = () => setVisible(true);
    window.addEventListener("beforeunload", onBefore);
    return () => window.removeEventListener("beforeunload", onBefore);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 dark:bg-black/60 backdrop-blur-sm">
      <div className="flex flex-col items-center gap-3">
        <span className="loader"></span>
        <span className="text-sm text-white">Loading…</span>
      </div>
    </div>
  );
}

export default function LoadingOverlay() {
  return (
    <Suspense fallback={
      <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 dark:bg-black/60 backdrop-blur-sm">
        <div className="flex flex-col items-center gap-3">
          <span className="loader"></span>
          <span className="text-sm text-white">Loading…</span>
        </div>
      </div>
    }>
      <LoadingOverlayContent />
    </Suspense>
  );
}