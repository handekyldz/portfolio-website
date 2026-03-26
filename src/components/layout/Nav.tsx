"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { motion, useMotionValue, useSpring } from "framer-motion";
import Logo from "@/components/icons/Logo";
import MobileMenu from "./MobileMenu";

function NavLink({
  children,
  href,
  onClick,
}: {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
}) {
  const inner = (
    <div className="flex flex-col items-start h-[23px] justify-between shrink-0 cursor-pointer group">
      <span className="font-sans font-normal text-[14px] uppercase text-body group-hover:text-black transition-colors duration-200 whitespace-nowrap leading-[22.5px]">
        {children}
      </span>
      <span className="bg-dark h-[1px] w-0 group-hover:w-full transition-all duration-300 ease-out" />
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="shrink-0">
        {inner}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className="shrink-0">
      {inner}
    </button>
  );
}

export default function Nav() {
  const pathname = usePathname();
  const router = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Magnetic logo
  const logoRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springConfig = { damping: 15, stiffness: 150 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  const handleLogoMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!logoRef.current) return;
    const rect = logoRef.current.getBoundingClientRect();
    x.set((e.clientX - (rect.left + rect.width / 2)) * 0.3);
    y.set((e.clientY - (rect.top + rect.height / 2)) * 0.3);
  };

  const handleLogoMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const handleWorkClick = () => {
    if (pathname === "/") {
      document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
    } else {
      router.push("/#projects");
    }
  };

  return (
    <>
      <header
        className={`sticky top-0 w-full z-50 bg-white transition-all duration-300 ${
          isScrolled ? "backdrop-blur-md bg-white/90 shadow-sm" : ""
        }`}
      >
        {/* Bottom border */}
        <div className="absolute inset-0 border-b border-[#e1e1e3] pointer-events-none" />

        <div className="flex h-[48px] items-center justify-between px-4 md:px-10">
          {/* Logo */}
          <Link href="/" aria-label="Home">
            <motion.div
              ref={logoRef}
              style={{ x: springX, y: springY }}
              whileHover={{ scale: 1.15 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              onMouseMove={handleLogoMouseMove}
              onMouseLeave={handleLogoMouseLeave}
              className="cursor-pointer select-none relative"
            >
              <Logo />
            </motion.div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6" aria-label="Main navigation">
            <NavLink onClick={handleWorkClick}>Work</NavLink>
            <NavLink href="/about">About</NavLink>
            <NavLink href="/marketing-design">Marketing design</NavLink>
            <a
              href="mailto:handekyldz@gmail.com"
              className="flex flex-col items-start h-[23px] justify-between shrink-0 cursor-pointer group"
            >
              <span className="font-sans font-normal text-[14px] uppercase text-body group-hover:text-black transition-colors duration-200 whitespace-nowrap leading-[22.5px]">
                Contact
              </span>
              <span className="bg-dark h-[1px] w-0 group-hover:w-full transition-all duration-300 ease-out" />
            </a>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-3 cursor-pointer"
            aria-label="Open navigation menu"
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen(true)}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M3 12H21M3 6H21M3 18H21"
                stroke="#1E1E1E"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </header>

      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
}
