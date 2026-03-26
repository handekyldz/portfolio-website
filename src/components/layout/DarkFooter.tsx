"use client";

import { useRef, useEffect } from "react";
import Link from "next/link";
function FooterLink({
  href,
  children,
  external,
}: {
  href: string;
  children: React.ReactNode;
  external?: boolean;
}) {
  const className =
    "font-sans font-normal text-[14px] uppercase tracking-[0.05em] leading-[1.5] text-[#aaa] hover:text-[#e8e8e8] transition-colors duration-200";

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}

function HeartbeatHeart() {
  const heartRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = heartRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("heart-beat");
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <span
      ref={heartRef}
      aria-hidden="true"
      style={{ color: "#555", display: "inline-block" }}
    >
      ♥
    </span>
  );
}

export default function DarkFooter() {
  return (
    <footer style={{ backgroundColor: "#1a1a1a" }} className="pt-10 pb-8 md:pt-14 md:pb-10">
      <div className="max-w-[1220px] mx-auto px-4 md:px-10">
        {/* Top row */}
        <div className="flex flex-col md:flex-row md:justify-between gap-8 md:gap-0">
          {/* Left: logotype + tagline */}
          <div className="flex flex-col gap-[6px]">
            <span
              className="font-sans font-medium leading-none"
              style={{ fontSize: "52px", color: "#e8e8e8" }}
            >
              hnd.
            </span>
            <span className="font-sans text-[13px] leading-[1.4]" style={{ color: "#888" }}>
              Multidisciplinary designer — Berlin, Germany
            </span>
          </div>

          {/* Right: two link columns */}
          <div className="flex gap-10 md:gap-14">
            {/* Pages */}
            <div className="flex flex-col gap-3">
              <span
                className="font-sans text-[10px] uppercase tracking-[0.1em] font-medium"
                style={{ color: "#666" }}
              >
                Pages
              </span>
              <div className="flex flex-col gap-[10px]">
                <FooterLink href="/#projects">Work</FooterLink>
                <FooterLink href="/about">About</FooterLink>
                <FooterLink href="/marketing-design">Marketing Design</FooterLink>
              </div>
            </div>

            {/* Connect */}
            <div className="flex flex-col gap-3">
              <span
                className="font-sans text-[10px] uppercase tracking-[0.1em] font-medium"
                style={{ color: "#666" }}
              >
                Connect
              </span>
              <div className="flex flex-col gap-[10px]">
                <FooterLink href="https://www.linkedin.com/in/handeky/" external>
                  LinkedIn
                </FooterLink>
                <FooterLink href="https://contra.com/hande_kurtulus_yildiz_6b4dzzct" external>
                  Contra
                </FooterLink>
                <FooterLink href="mailto:handekyldz@gmail.com">Email</FooterLink>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div
          className="my-8 md:my-10"
          style={{ height: "0.5px", backgroundColor: "#333" }}
        />

        {/* Bottom row */}
        <div className="flex flex-col md:flex-row md:justify-between gap-2 md:gap-0">
          <span className="font-sans text-[12px] leading-[1.5]" style={{ color: "#666" }}>
            © 2025 hnd.
          </span>
          <span className="font-sans text-[12px] leading-[1.5]" style={{ color: "#666" }}>
            <HeartbeatHeart />{" "}Designed &amp; built with care
          </span>
        </div>
      </div>
    </footer>
  );
}
