"use client";

import { useEffect, useState } from "react";
import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";

export function GlobalMouseGlow() {
  const [mounted, setMounted] = useState(false);
  const mouseX = useMotionValue(-1000);
  const mouseY = useMotionValue(-1000);

  // Smooth spring physics for organic cursor-following inertia
  const smoothX = useSpring(mouseX, { stiffness: 120, damping: 25 });
  const smoothY = useSpring(mouseY, { stiffness: 120, damping: 25 });

  const background = useMotionTemplate`
    radial-gradient(
      680px circle at ${smoothX}px ${smoothY}px,
      rgba(139, 92, 246, 0.05),
      transparent 75%
    )
  `;

  useEffect(() => {
    setMounted(true);

    const handleMouseMove = (event: MouseEvent) => {
      mouseX.set(event.clientX);
      mouseY.set(event.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  if (!mounted) return null;

  return (
    <motion.div
      className="pointer-events-none fixed inset-0 -z-50 overflow-hidden"
      style={{ background }}
      aria-hidden="true"
    />
  );
}
