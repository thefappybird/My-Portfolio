"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";

interface RevealTextProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

// Clip-path slide-up reveal triggered when element enters viewport.
export default function RevealText({
  children,
  className = "",
  delay = 0,
}: RevealTextProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <motion.div
        initial={{ y: "110%", opacity: 0 }}
        animate={inView ? { y: "0%", opacity: 1 } : {}}
        transition={{
          duration: 0.75,
          ease: [0.16, 1, 0.3, 1],
          delay,
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}
