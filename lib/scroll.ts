import type { MouseEvent } from "react";

function easeInOutCubic(t: number) {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

export function scrollToHash(hash: string) {
  const id = hash.replace("#", "");
  const el = document.getElementById(id);
  if (!el) return;

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    el.scrollIntoView();
    return;
  }

  const headerOffset = 88;
  const target = el.getBoundingClientRect().top + window.scrollY - headerOffset;
  const start = window.scrollY;
  const distance = target - start;
  const duration = Math.min(1100, Math.max(620, Math.abs(distance) * 0.5));
  const startTime = performance.now();

  const step = (now: number) => {
    const progress = Math.min((now - startTime) / duration, 1);
    window.scrollTo(0, start + distance * easeInOutCubic(progress));
    if (progress < 1) requestAnimationFrame(step);
  };

  requestAnimationFrame(step);
}

/** Smooth-scroll para âncoras internas e atualiza o hash na URL. */
export function handleSmoothNavClick(event: MouseEvent<HTMLAnchorElement>) {
  const href = event.currentTarget.getAttribute("href");
  if (!href?.startsWith("#")) return;
  event.preventDefault();
  window.history.replaceState(null, "", href);
  scrollToHash(href);
}
