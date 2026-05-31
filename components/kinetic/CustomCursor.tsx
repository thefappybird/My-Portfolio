"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";
import { useTranslations } from "next-intl";

// Bold circle cursor with context-aware label. Hidden on touch devices.
export default function CustomCursor() {
  const t = useTranslations("common");
  const [label, setLabel] = useState<string>("");
  const [visible, setVisible] = useState(false);
  const [isTouch, setIsTouch] = useState(false);
  // Track resolved labels so we can localize VIEW/DRAG
  const viewLabel = useRef(t("viewLabel"));
  const dragLabel = useRef(t("dragLabel"));

  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const x = useSpring(rawX, { stiffness: 280, damping: 28, mass: 0.5 });
  const y = useSpring(rawY, { stiffness: 280, damping: 28, mass: 0.5 });

  const updateLabel = useCallback(
    (e: MouseEvent) => {
      rawX.set(e.clientX);
      rawY.set(e.clientY);

      const target = e.target as Element | null;
      if (!target) return;

      if (target.closest("[data-cursor='drag']")) {
        setLabel(dragLabel.current);
      } else if (target.closest("[data-cursor='view']")) {
        setLabel(viewLabel.current);
      } else if (target.closest("a") || target.closest("button")) {
        setLabel("↗");
      } else {
        setLabel("");
      }
    },
    [rawX, rawY]
  );

  useEffect(() => {
    // Update refs whenever locale changes
    viewLabel.current = t("viewLabel");
    dragLabel.current = t("dragLabel");
  }, [t]);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) {
      setIsTouch(true);
      return;
    }

    setVisible(true);
    window.addEventListener("mousemove", updateLabel);
    return () => window.removeEventListener("mousemove", updateLabel);
  }, [updateLabel]);

  if (isTouch) return null;

  const isWord = label !== "" && label !== "↗"; // VIEW / DRAG over project cards
  const isArrow = label === "↗"; // generic links & buttons
  // Keep it small: a see-through ring over links/buttons (so small targets stay
  // visible), a compact filled circle with a label only over project cards.
  const size = isWord ? 56 : isArrow ? 24 : 12;

  return (
    <motion.div
      className="fixed top-0 left-0 z-[9999] pointer-events-none select-none"
      style={{ x, y, translateX: "-50%", translateY: "-50%" }}
      animate={{ opacity: visible ? 1 : 0 }}
    >
      <motion.div
        animate={{
          width: size,
          height: size,
          backgroundColor: isWord ? "var(--k-1)" : "transparent",
          borderColor: isWord ? "var(--k-1)" : "var(--foreground)",
        }}
        transition={{ type: "spring", stiffness: 400, damping: 30 }}
        className="flex items-center justify-center rounded-full border-2 border-solid"
      >
        {isWord && (
          <motion.span
            key={label}
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-white text-[8px] font-bold tracking-widest uppercase"
            style={{ fontFamily: "var(--font-geist-sans)" }}
          >
            {label}
          </motion.span>
        )}
        {isArrow && (
          <span className="text-foreground text-[10px] font-bold leading-none">↗</span>
        )}
      </motion.div>
    </motion.div>
  );
}
