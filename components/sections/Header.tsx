"use client";

import { useEffect, useState, type MouseEvent } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { NAV_ITEMS } from "@/lib/constants";
import { handleSmoothNavClick } from "@/lib/scroll";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = NAV_ITEMS.map((item) => item.href.slice(1));
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActiveSection(`#${visible.target.id}`);
      },
      { rootMargin: "-32% 0px -52% 0px", threshold: [0.1, 0.25, 0.5] },
    );

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const handleNavClick = (event: MouseEvent<HTMLAnchorElement>) => {
    handleSmoothNavClick(event);
    setMenuOpen(false);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled || menuOpen
          ? "border-b border-white/10 bg-[#07080f]/80 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-[72px] max-w-6xl items-center justify-between px-5 md:grid md:grid-cols-[1fr_auto_1fr] md:px-8">
        <motion.a
          href="#topo"
          onClick={handleNavClick}
          className="group flex items-center gap-2 focus:outline-none"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
        >
          <motion.div className="flex items-center gap-1.5 text-base sm:text-[17px] font-bold tracking-tight">
            <span className="font-extrabold text-white tracking-tight">Thiago</span>
            <span className="font-medium text-zinc-400 transition-colors duration-300 group-hover:text-zinc-200">
              Andrade
            </span>
            <span className="h-1.5 w-1.5 rounded-full bg-violet-400 transition-all duration-300 group-hover:scale-125 group-hover:bg-violet-300 shadow-[0_0_8px_rgba(139,92,246,0.6)]" />
          </motion.div>
        </motion.a>

        <nav className="hidden items-center gap-1 md:flex">
          {NAV_ITEMS.map((item) => (
            <motion.a
              key={item.href}
              href={item.href}
              onClick={handleNavClick}
              whileHover={{ scale: 1.06, y: -1 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 450, damping: 22 }}
              className={`relative rounded-full px-4 py-2 text-sm transition-colors duration-300 ${
                activeSection === item.href
                  ? "bg-white/10 text-white shadow-[0_0_15px_rgba(255,255,255,0.06)]"
                  : "text-zinc-400 hover:text-zinc-100"
              }`}
            >
              {item.label}
            </motion.a>
          ))}
        </nav>

        <div className="hidden justify-self-end md:flex">
          <motion.a
            href="#contato"
            onClick={handleNavClick}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
            className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-violet-600 to-blue-600 px-4 py-2 text-sm font-medium text-white shadow-[0_0_24px_rgba(139,92,246,0.25)] transition duration-300 hover:brightness-110"
          >
            Vamos conversar
            <ArrowUpRight className="h-3.5 w-3.5" />
          </motion.a>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-zinc-200 transition hover:bg-white/5 md:hidden"
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
        >
          {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-white/10 bg-[#07080f]/95 px-5 py-6 backdrop-blur-xl md:hidden">
          <nav className="flex flex-col gap-1">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={handleNavClick}
                className="rounded-xl px-4 py-3 text-base text-zinc-200 transition hover:bg-white/5"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contato"
              onClick={handleNavClick}
              className="mt-3 inline-flex items-center justify-center gap-1.5 rounded-full bg-gradient-to-r from-violet-600 to-blue-600 px-4 py-3 text-sm font-medium text-white"
            >
              Vamos conversar
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
