"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import type { HTMLMotionProps } from "framer-motion";
import type { ReactNode } from "react";

export type SpotlightCardElement = "article" | "div" | "a";

export interface SpotlightCardProps extends Omit<HTMLMotionProps<"div">, "as"> {
  children: ReactNode;
  className?: string;
  spotlightColor?: string;
  spotlightSize?: number;
  as?: SpotlightCardElement;
  href?: string;
  target?: string;
  rel?: string;
  download?: string | boolean;
}

export function SpotlightCard({
  children,
  className = "",
  spotlightColor = "rgba(139, 92, 246, 0.16)",
  spotlightSize = 380,
  as = "article",
  whileHover = { y: -6 },
  transition = { type: "spring", stiffness: 350, damping: 25 },
  href,
  target,
  rel,
  download,
  ...props
}: SpotlightCardProps) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const background = useMotionTemplate`
    radial-gradient(
      ${spotlightSize}px circle at ${mouseX}px ${mouseY}px,
      ${spotlightColor},
      transparent 80%
    )
  `;

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  const sharedClassName = `group relative overflow-hidden rounded-3xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-md transition-all duration-500 ${className}`;

  const glowElement = (
    <motion.div
      className="pointer-events-none absolute -inset-px rounded-[inherit] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      style={{ background }}
      aria-hidden="true"
    />
  );

  if (as === "a") {
    return (
      <motion.a
        href={href}
        target={target}
        rel={rel}
        download={download}
        onMouseMove={handleMouseMove}
        whileHover={whileHover}
        transition={transition}
        className={sharedClassName}
        {...(props as HTMLMotionProps<"a">)}
      >
        {glowElement}
        {children}
      </motion.a>
    );
  }

  if (as === "div") {
    return (
      <motion.div
        onMouseMove={handleMouseMove}
        whileHover={whileHover}
        transition={transition}
        className={sharedClassName}
        {...props}
      >
        {glowElement}
        {children}
      </motion.div>
    );
  }

  return (
    <motion.article
      onMouseMove={handleMouseMove}
      whileHover={whileHover}
      transition={transition}
      className={sharedClassName}
      {...(props as HTMLMotionProps<"article">)}
    >
      {glowElement}
      {children}
    </motion.article>
  );
}
