"use client";

import Link from "next/link";
import { motion } from "framer-motion";

interface BackButtonProps {
  href?: string;
}

export default function BackButton({ href = "/" }: BackButtonProps) {
  return (
    <Link href={href} className="inline-flex">
      <motion.div
        className="relative inline-flex items-center gap-2 px-3 py-2 rounded-lg text-body cursor-pointer select-none"
        whileHover="hovered"
        whileTap={{ scale: 0.98 }}
        initial="idle"
      >
        <motion.svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          aria-hidden="true"
          variants={{
            idle: { x: 0 },
            hovered: { x: -4 },
          }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <path
            d="M14.25 9H3.75M3.75 9L8.25 13.5M3.75 9L8.25 4.5"
            stroke="#4B4B51"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </motion.svg>
        <motion.span
          className="font-sans text-[14px] uppercase tracking-wide"
          variants={{
            idle: { backgroundColor: "transparent" },
          }}
        >
          Work
        </motion.span>
        {/* Slide-in background */}
        <motion.span
          className="absolute inset-0 rounded-lg bg-neutral-100 -z-10"
          variants={{
            idle: { scaleX: 0, originX: 0 },
            hovered: { scaleX: 1, originX: 0 },
          }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          aria-hidden="true"
        />
      </motion.div>
    </Link>
  );
}
