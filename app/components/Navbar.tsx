"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "https://httply.qzz.io", label: "Web App", external: true },
    { href: "/#features", label: "Features" },
    { href: "/#download", label: "Download" },
    { href: "/#docs", label: "Docs" },
    { href: "/#faq", label: "FAQ" },
  ];

  return (
    <nav
      id="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass border-b border-white/[0.06]" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="/" onClick={(e) => { e.preventDefault(); window.location.reload(); }} className="flex items-center gap-2 group cursor-pointer">
          <Image
            src="/logo.png"
            alt="Httply Logo"
            width={32}
            height={32}
            className="rounded-lg group-hover:scale-105 transition-transform"
          />
          <span className="font-bold text-lg tracking-tight text-white">Httply</span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-1">
          {links.map((l) =>
            l.external ? (
              <a
                key={l.label}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 text-sm text-zinc-400 hover:text-white transition-colors rounded-lg hover:bg-white/5"
              >
                {l.label}
              </a>
            ) : (
              <a
                key={l.label}
                href={l.href}
                className="px-4 py-2 text-sm text-zinc-400 hover:text-white transition-colors rounded-lg hover:bg-white/5"
              >
                {l.label}
              </a>
            )
          )}
        </div>

        {/* CTAs */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="https://httply.qzz.io/login"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-zinc-300 hover:text-white transition-colors"
          >
            Sign in
          </a>
          <a
            href="/#download"
            id="nav-download-btn"
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium transition-all shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/30"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" /></svg>
            Download
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          id="mobile-menu-btn"
          className="md:hidden w-9 h-9 flex flex-col justify-center items-center gap-1.5"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span className={`w-5 h-0.5 bg-zinc-400 transition-all ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`w-5 h-0.5 bg-zinc-400 transition-all ${mobileOpen ? "opacity-0" : ""}`} />
          <span className={`w-5 h-0.5 bg-zinc-400 transition-all ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <div className="md:hidden glass border-t border-white/[0.06] px-6 py-4 flex flex-col gap-2">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target={l.external ? "_blank" : undefined}
              rel={l.external ? "noopener noreferrer" : undefined}
              onClick={() => setMobileOpen(false)}
              className="py-2 text-sm text-zinc-300 hover:text-white transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="/#download"
            onClick={() => setMobileOpen(false)}
            className="mt-2 py-2.5 text-center rounded-lg bg-indigo-600 text-white text-sm font-medium"
          >
            Download Now
          </a>
        </div>
      )}
    </nav>
  );
}
