"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

type CursorLabel = "VIEW" | "DRAG" | "↗" | "";

// Bold circle cursor with context-aware label. Hidden on touch devices.
export default function CustomCursor() {
  const [label, setLabel] = useState<CursorLabel>("");
  const [visible, setVisible] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const x = useSpring(rawX, { stiffness: 280, damping: 28, mass: 0.5 });
  const y = useSpring(rawY, { stiffness: 280, damping: 28, mass: 0.5 });

  const updateLabel = useCallback((e: MouseEvent) => {
    rawX.set(e.clientX);
    rawY.set(e.clientY);

    const target = e.target as Element | null;
    if (!target) return;

    if (target.closest("[data-cursor='drag']")) {
      setLabel("DRAG");
    } else if (target.closest("[data-cursor='view']")) {
      setLabel("VIEW");
    } else if (target.closest("a") || target.closest("button")) {
      setLabel("↗");
    } else {
      setLabel("");
    }
  }, [rawX, rawY]);

  useEffect(() => {
    // Bail on touch-primary devices
    if (window.matchMedia("(pointer: coarse)").matches) {
      setIsTouch(true);
      return;
    }

    setVisible(true);
    window.addEventListener("mousemove", updateLabel);
    return () => window.removeEventListener("mousemove", updateLabel);
  }, [updateLabel]);

  if (isTouch) return null;

  const isExpanded = label !== "";

  return (
    <motion.div
      className="fixed top-0 left-0 z-[9999] pointer-events-none select-none"
      style={{ x, y, translateX: "-50%", translateY: "-50%" }}
      animate={{ opacity: visible ? 1 : 0 }}
    >
      <motion.div
        animate={{
          width: isExpanded ? 90 : 20,
          height: isExpanded ? 90 : 20,
          borderRadius: "9999px",
          backgroundColor: isExpanded ? "var(--k-1)" : "transparent",
          borderColor: isExpanded ? "var(--k-1)" : "var(--foreground)",
          borderWidth: 2,
        }}
        transition={{ type: "spring", stiffness: 400, damping: 30 }}
        className="flex items-center justify-center border-2 border-solid"
        style={{ borderStyle: "solid" }}
      >
        {isExpanded && (
          <motion.span
            key={label}
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-white text-[11px] font-bold tracking-widest uppercase"
            style={{ fontFamily: "var(--font-geist-sans)" }}
          >
            {label}
          </motion.span>
        )}
      </motion.div>
    </motion.div>
  );
}
