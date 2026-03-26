"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  useRef,
} from "react";
import { usePathname } from "next/navigation";
import { motion, useMotionValue, useSpring } from "framer-motion";

interface CursorState {
  visible: boolean;
  isPointerDevice: boolean;
  showCursor: () => void;
  hideCursor: () => void;
}

const CursorContext = createContext<CursorState>({
  visible: false,
  isPointerDevice: false,
  showCursor: () => {},
  hideCursor: () => {},
});

export function useCursor() {
  return useContext(CursorContext);
}

/** Returns true only on devices with a fine pointer AND hover support (i.e. real mouse). */
function isMouseDevice(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(pointer: fine) and (hover: hover)").matches;
}

export function CursorProvider({ children }: { children: React.ReactNode }) {
  const [visible, setVisible] = useState(false);
  const [isPointerDevice, setIsPointerDevice] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(pointer: fine) and (hover: hover)");
    setIsPointerDevice(mq.matches);
    // Re-evaluate if the user connects/disconnects a mouse
    const handler = (e: MediaQueryListEvent) => {
      setIsPointerDevice(e.matches);
      if (!e.matches) {
        setVisible(false);
        document.body.style.cursor = "";
      }
    };
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  const pathname = usePathname();

  // Reset on route change
  useEffect(() => {
    setVisible(false);
    document.body.style.cursor = "";
  }, [pathname]);

  const showCursor = useCallback(() => {
    if (!isMouseDevice()) return;
    setVisible(true);
    document.body.style.cursor = "none";
  }, []);

  const hideCursor = useCallback(() => {
    if (!isMouseDevice()) return;
    setVisible(false);
    document.body.style.cursor = "";
  }, []);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 20, stiffness: 300 };
  const springX = useSpring(cursorX, springConfig);
  const springY = useSpring(cursorY, springConfig);

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isPointerDevice) return;
    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX - 40);
      cursorY.set(e.clientY - 40);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [cursorX, cursorY, isPointerDevice]);

  return (
    <CursorContext.Provider value={{ visible, isPointerDevice, showCursor, hideCursor }}>
      <div ref={containerRef}>
        {children}
        {/* CSS (.custom-cursor) also hides this on touch via globals.css media query */}
        {isPointerDevice && (
          <motion.div
            className="custom-cursor fixed top-0 left-0 z-[200] pointer-events-none"
            style={{ x: springX, y: springY }}
            aria-hidden="true"
          >
            <motion.div
              className="size-[80px] rounded-full bg-heading flex items-center justify-center"
              initial={{ scale: 0, opacity: 0 }}
              animate={visible ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
              <span className="font-sans text-[14px] uppercase text-white tracking-wide select-none">
                View
              </span>
            </motion.div>
          </motion.div>
        )}
      </div>
    </CursorContext.Provider>
  );
}

export default function CustomCursor() {
  return null;
}
