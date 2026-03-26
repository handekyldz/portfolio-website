"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const menuItems = [
  { type: "work" as const, label: "Work" },
  { type: "link" as const, label: "Marketing design", href: "/marketing-design" },
  { type: "mail" as const, label: "Contact", href: "mailto:handekyldz@gmail.com" },
];

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const pathname = usePathname();
  const router = useRouter();
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

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

  const handleWorkClick = () => {
    onClose();
    if (pathname === "/") {
      setTimeout(() => {
        document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
      }, 300);
    } else {
      router.push("/#projects");
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="fixed inset-0 z-40 bg-black/20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            aria-hidden="true"
          />

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
            <div className="flex justify-end p-4">
              <button
                onClick={onClose}
                aria-label="Close menu"
                className="p-2 rounded-lg text-body hover:text-heading hover:bg-neutral-100 transition-colors"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
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

            <nav className="flex flex-col mt-4">
              {menuItems.map(({ type, label, href }, i) => {
                const itemClass =
                  "flex flex-col py-4 pl-6 border-b border-gray-100 hover:bg-gray-50 transition-colors text-left w-full";
                const labelEl = (
                  <span className="font-sans text-body text-[16px] uppercase tracking-wide">
                    {label}
                  </span>
                );

                const content =
                  type === "work" ? (
                    <button key={label} onClick={handleWorkClick} className={itemClass}>
                      {labelEl}
                    </button>
                  ) : type === "link" ? (
                    <Link
                      key={label}
                      ref={i === 1 ? firstLinkRef : undefined}
                      href={href!}
                      onClick={onClose}
                      className={itemClass}
                    >
                      {labelEl}
                    </Link>
                  ) : (
                    <a
                      key={label}
                      href={href!}
                      onClick={onClose}
                      className={itemClass}
                    >
                      {labelEl}
                    </a>
                  );

                return (
                  <motion.div
                    key={label}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: 0.1 + i * 0.05,
                      duration: 0.25,
                      ease: [0.25, 0.1, 0.25, 1],
                    }}
                  >
                    {content}
                  </motion.div>
                );
              })}
            </nav>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
