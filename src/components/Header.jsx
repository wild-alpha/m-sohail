"use client";

import { useEffect, useRef, useState } from "react";

const nav = [
  "Home",
  "Why Hire Me",
  "Results",
  "Case Studies",
  "Projects",
  "Services",
  "Resume",
];

export default function Header() {
  const [showHeader, setShowHeader] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Always show header at the top
      if (currentScrollY < 20) {
        setShowHeader(true);
        lastScrollY.current = currentScrollY;
        return;
      }

      // Small threshold to avoid shaky hide/show
      if (Math.abs(currentScrollY - lastScrollY.current) < 8) return;

      // Your requested effect:
      // Scroll up = hide
      // Scroll down = show
      if (currentScrollY < lastScrollY.current) {
        setShowHeader(false);
      } else {
        setShowHeader(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* This keeps the same space/gap like sticky header */}
      <div className="h-[73px]" />

      <header
        className={`fixed left-0 top-0 z-[9999] w-full border-b border-white/10 bg-[#05070B]/75 backdrop-blur-xl transition-transform duration-500 ease-out ${
          showHeader ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <a
            href="#home"
            className="font-display text-2xl font-bold tracking-tight"
          >
            M<span className="gradient-text">S</span>
          </a>

          <nav className="hide-mobile flex items-center gap-8 text-sm text-zinc-300">
            {nav.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replaceAll(" ", "-")}`}
                className="transition hover:text-white"
              >
                {item}
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            className="rounded-xl border border-blue-400/40 px-5 py-2 text-sm text-white transition hover:bg-blue-500/10"
          >
            Let&apos;s Talk
          </a>
        </div>
      </header>
    </>
  );
}