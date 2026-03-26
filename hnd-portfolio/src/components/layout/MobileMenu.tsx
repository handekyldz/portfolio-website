"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const pathname = usePathname();
  const router = useRouter();
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  // Escape key + body scroll lock
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.addEventListener("keydown", handleKey);
      document.body.style.overflow = "hidden";
      firstLinkRef.current?.focus();
    }
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  // Focus trap
  const handleTabKey = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key !== "Tab") return;
    const panel = e.currentTarget;
    const focusable = panel.querySelectorAll<HTMLElement>(
      'a, button, [tabindex]:not([tabindex="-1"])'
    );
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 z-40 bg-black/20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Slide-in panel */}
          <motion.div
            className="fixed right-0 top-0 h-full z-50 w-[300px] sm:w-[400px] bg-white shadow-2xl flex flex-col"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            onKeyDown={handleTabKey}
          >
            {/* Close button */}
            <div className="flex justify-end p-4">
              <button
                onClick={onClose}
                aria-label="Close menu"
                className="p-2 rounded-lg text-body hover:text-heading hover:bg-neutral-100 transition-colors"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M18 6L6 18M6 6L18 18"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>

            {/* Nav items */}
            <nav className="flex flex-col mt-4">
              <button
                onClick={() => {
                  onClose();
                  if (pathname === "/") {
                    setTimeout(() => {
                      document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
                    }, 300);
                  } else {
                    router.push("/#projects");
                  }
                }}
                className="flex flex-col py-4 pl-6 border-b border-gray-100 cursor-pointer hover:bg-gray-50 transition-colors text-left w-full"
              >
                <span className="font-sans text-body text-[16px] uppercase tracking-wide">
                  Work
                </span>
              </button>

              <Link
                ref={firstLinkRef}
                href="/marketing-design"
                onClick={onClose}
                className="flex flex-col py-4 pl-6 border-b border-gray-100 hover:bg-gray-50 transition-colors"
              >
                <span className="font-sans text-body text-[16px] uppercase tracking-wide">
                  Marketing design
                </span>
              </Link>

              <a
                href="mailto:handekyldz@gmail.com"
                onClick={onClose}
                className="flex flex-col py-4 pl-6 border-b border-gray-100 hover:bg-gray-50 transition-colors"
              >
                <span className="font-sans text-body text-[16px] uppercase tracking-wide">
                  Contact
                </span>
              </a>
            </nav>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
