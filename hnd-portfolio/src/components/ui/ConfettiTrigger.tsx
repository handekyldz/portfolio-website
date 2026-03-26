"use client";

import { useEffect, useRef } from "react";
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
        // Left corner
        confetti({
          particleCount,
          angle: 60,
          spread: 55,
          origin: { x: 0, y: 1 },
          colors: CONFETTI_COLORS,
        });
        // Right corner
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
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
}

// Render-nothing component for pages that just need to drop it in JSX
export default function ConfettiTrigger() {
  useConfettiOnScrollEnd();
  return null;
}
