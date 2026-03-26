"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { LogoLarge } from "@/components/icons/Logo";

function ArrowUpRight({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 88.4975 88.4975"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M25.8118 62.6857L62.6857 25.8118M62.6857 25.8118H25.8118M62.6857 25.8118V62.6857"
        stroke="#0A0047"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="7.37479"
      />
    </svg>
  );
}

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] },
  },
};

export default function Footer() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <footer ref={ref} className="px-4 md:px-6 pb-4 md:pb-6 mt-auto">
      <div className="bg-navy rounded-[32px] w-full overflow-hidden">
        <motion.div
          className="flex flex-col gap-8 md:gap-20 px-10 py-10 md:py-20"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Top row: Logo + Mail CTA */}
          <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-6 md:gap-0">
            <motion.div
              className="opacity-[0.72] w-[212px] md:w-[358px]"
              variants={itemVariants}
            >
              <div className="aspect-[358.398/147.496] w-full">
                <LogoLarge />
              </div>
            </motion.div>

            <motion.a
              href="mailto:handekyldz@gmail.com"
              aria-label="Send an email to Hande"
              className="size-[86px] md:size-[147px] bg-lavender-light rounded-full flex items-center justify-center shrink-0 transition-opacity"
              variants={itemVariants}
              whileHover={{ scale: 1.08, opacity: 0.85 }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: "spring", stiffness: 350, damping: 22 }}
            >
              <ArrowUpRight className="size-[52px] md:size-[88px]" />
            </motion.a>
          </div>

          {/* Bottom row: CTA text + Social links */}
          <div className="flex flex-col md:flex-row items-center md:items-end justify-between gap-6 md:gap-0 text-center md:text-left">
            <motion.p
              className="font-serif text-[32px] md:text-[36px] text-white tracking-[-1.04px] leading-[1.2] max-w-[361px]"
              variants={itemVariants}
            >
              Let&apos;s build something good together!
            </motion.p>

            <motion.div className="flex gap-6 items-center" variants={itemVariants}>
              <a
                href="https://www.linkedin.com/in/handeky/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans text-[14px] uppercase text-lavender-light hover:opacity-70 transition-opacity whitespace-nowrap"
              >
                LinkedIn
              </a>
              <a
                href="https://contra.com/hande_kurtulus_yildiz_6b4dzzct"
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans text-[14px] uppercase text-lavender-light hover:opacity-70 transition-opacity whitespace-nowrap"
              >
                Contra
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
