"use client";
import { useState, useEffect } from "react";

export default function Hero() {
  const [os, setOs] = useState<"windows" | "mac" | "linux" | "unknown">("windows");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const userAgent = window.navigator.userAgent.toLowerCase();
    if (userAgent.indexOf("mac") !== -1) {
      setOs("mac");
    } else if (userAgent.indexOf("linux") !== -1 || userAgent.indexOf("x11") !== -1) {
      setOs("linux");
    } else {
      setOs("windows");
    }
  }, []);

  const osData = {
    windows: {
      name: "Windows",
      icon: (
        <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
          <path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.951-1.801"/>
        </svg>
      )
    },
    mac: {
      name: "macOS",
      icon: (
        <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
        </svg>
      )
    },
    linux: {
      name: "Linux",
      icon: (
        <svg className="w-5 h-5 mr-2 text-current" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm0 1.905c1.455 0 2.82.358 4.02.973A4.542 4.542 0 0 0 14.654 6.5c-1.353-.298-2.617-.45-3.856-.45-4.475 0-8.24 3.033-9.52 7.234a4.576 4.576 0 0 0-1.272.18C.043 12.98.026 12.494.026 12c0-5.561 4.534-10.095 10.095-10.095h1.879zM19.467 2.658c1.782 1.954 2.87 4.55 2.87 7.411a10.063 10.063 0 0 1-1.01 4.394 4.558 4.558 0 0 0-3.144-1.928 8.01 8.01 0 0 0 .108-1.303 8.1 8.1 0 0 0-3.328-6.529 4.54 4.54 0 0 0 3.328-1.576c.414-.492.748-1.042.988-1.637l.188-.832zM3.486 19.34A10.062 10.062 0 0 1 1.906 12c0-.528.043-1.046.126-1.55a4.545 4.545 0 0 0 3.323 1.91 8.1 8.1 0 0 0 3.327 6.528 4.555 4.555 0 0 0-3.14 1.928c-.732-.387-1.417-.86-2.056-1.476zm16.51 2.378A10.061 10.061 0 0 1 12 23.974c-1.895 0-3.666-.522-5.183-1.413A4.544 4.544 0 0 0 9.878 18.6a8.04 8.04 0 0 0 2.122.28c4.475 0 8.24-3.033 9.52-7.234a4.58 4.58 0 0 0 1.27-.18c.033.485.05.972.05 1.464a10.057 10.057 0 0 1-2.844 6.788z" />
        </svg>
      )
    },
    unknown: {
      name: "Desktop",
      icon: (
        <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line>
        </svg>
      )
    }
  };

  const currentOs = mounted ? osData[os] : osData.windows;

  return (
    <section
      id="hero"
      className="relative flex flex-col items-center justify-center pt-32 pb-0 overflow-hidden"
    >
      {/* Postman-style deep gradient background */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 100% 100% at 50% 0%, #2e1a5a 0%, #150d30 40%, #0d0a1f 70%, #080a0f 100%)",
        }}
      />

      {/* Content Container */}
      <div className="relative max-w-4xl mx-auto px-6 text-center pb-12">

        {/* Eyebrow Label */}
        <div className="flex items-center justify-center gap-2 mb-6">
          <svg width="14" height="14" viewBox="0 0 20 20" fill="none" className="text-orange-400">
            <path d="M10 0L11.5 8.5L20 10L11.5 11.5L10 20L8.5 11.5L0 10L8.5 8.5L10 0Z" fill="currentColor"/>
          </svg>
          <span className="text-[12px] font-semibold tracking-[0.15em] uppercase text-zinc-300">
            A NEW HTTPLY IS HERE
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-[36px] md:text-[48px] lg:text-[54px] font-bold tracking-tight text-white leading-tight mb-5 md:whitespace-nowrap">
          The ultimate API & WebSocket client
        </h1>

        {/* Subheading */}
        <p className="text-[18px] md:text-[20px] text-zinc-300 leading-relaxed max-w-2xl mx-auto mb-10">
          Develop, test, and debug REST APIs and WebSocket connections. Built for speed. Designed for modern developer workflows.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#download"
            className="inline-flex items-center justify-center px-8 py-3.5 rounded-md text-[15px] font-semibold text-white bg-indigo-600 hover:bg-indigo-500 transition-colors shadow-lg shadow-indigo-500/20"
          >
            {currentOs.icon}
            Download for {currentOs.name} — Free
          </a>
          <a
            href={process.env.NEXT_PUBLIC_WEB_APP_URL || "https://httply.qzz.io"}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-3.5 rounded-md text-[15px] font-semibold text-white bg-indigo-600 hover:bg-indigo-500 transition-colors shadow-lg shadow-indigo-500/20"
          >
            Try in browser
          </a>
        </div>


        {/* Minimal stats */}
        <div className="flex items-center justify-center gap-10 mt-14 opacity-80">
          <div className="flex flex-col items-center">
            <span className="text-[15px] font-semibold text-white">v1.0.0</span>
            <span className="text-[12px] text-zinc-400">Latest Version</span>
          </div>
          <div className="w-px h-8 bg-white/10"></div>
          <div className="flex flex-col items-center">
            <span className="text-[15px] font-semibold text-white">2.7 MB</span>
            <span className="text-[12px] text-zinc-400">Installer Size</span>
          </div>
          <div className="w-px h-8 bg-white/10"></div>
          <div className="flex flex-col items-center">
            <span className="text-[15px] font-semibold text-white">Free</span>
            <span className="text-[12px] text-zinc-400">Forever</span>
          </div>
        </div>

      </div>
    </section>
  );
}
