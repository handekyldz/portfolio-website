"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface SideNavItem {
  id: string;
  label: string;
}

interface SideNavProps {
  items: SideNavItem[];
}

export default function SideNav({ items }: SideNavProps) {
  const [activeId, setActiveId] = useState<string>(items[0]?.id ?? "");

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    const handleIntersect =
      (id: string) => (entries: IntersectionObserverEntry[]) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(id);
          }
        });
      };

    items.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;
      const observer = new IntersectionObserver(handleIntersect(id), {
        rootMargin: "-20% 0px -70% 0px",
        threshold: 0,
      });
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [items]);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 100;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <nav
      className="hidden lg:flex flex-col gap-0.5 sticky top-24 w-[180px] shrink-0"
      aria-label="Page sections"
    >
      {items.map(({ id, label }) => {
        const isActive = activeId === id;
        return (
          <button
            key={id}
            onClick={() => scrollTo(id)}
            className={`relative text-left font-sans text-[13px] leading-[1.4] px-3 py-1.5 rounded-md transition-colors duration-200 ${
              isActive ? "text-heading font-medium" : "text-body hover:text-heading"
            }`}
          >
            {isActive && (
              <motion.span
                layoutId="sidenav-indicator"
                className="absolute inset-0 rounded-md bg-[#f5f4ff]"
                initial={false}
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
                aria-hidden="true"
              />
            )}
            <span className="relative z-10">{label}</span>
          </button>
        );
      })}
    </nav>
  );
}
