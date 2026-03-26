"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import confetti from "canvas-confetti";

const CONFETTI_COLORS = [
  "#8B5CF6",
  "#C4B5FD",
  "#A78BFA",
  "#78787D",
  "#E11D48",
  "#5EEAD4",
];

export function useConfettiOnScrollEnd() {
  const firedRef = useRef(false);
  const [showThanks, setShowThanks] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (firedRef.current) return;

      const scrolledToBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 100;

      if (!scrolledToBottom) return;

      firedRef.current = true;

      const duration = 500;
      const end = Date.now() + duration;
      const particleCount = 3;

      const frame = () => {
        confetti({
          particleCount,
          angle: 60,
          spread: 55,
          origin: { x: 0, y: 1 },
          colors: CONFETTI_COLORS,
        });
        confetti({
          particleCount,
          angle: 120,
          spread: 55,
          origin: { x: 1, y: 1 },
          colors: CONFETTI_COLORS,
        });

        if (Date.now() < end) {
          requestAnimationFrame(frame);
        }
      };

      frame();

      // Show thanks text after confetti starts
      setTimeout(() => setShowThanks(true), 300);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return showThanks;
}

export default function ConfettiTrigger() {
  const showThanks = useConfettiOnScrollEnd();

  return (
    <AnimatePresence>
      {showThanks && (
        <motion.div
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50"
          initial={{ opacity: 0, y: 12, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -8, scale: 0.95 }}
          transition={{ duration: 0.4, ease: [0.19, 1, 0.22, 1] }}
        >
          <Link
            href="/"
            className="bg-white/90 backdrop-blur-sm border border-neutral-100 shadow-lg rounded-full px-5 py-2.5 flex items-center gap-2 font-sans text-[14px] uppercase text-body hover:text-heading transition-colors whitespace-nowrap"
          >
            ← Back to Home
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
