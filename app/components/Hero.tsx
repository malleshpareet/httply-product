"use client";

export default function Hero() {
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
            <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
              <path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.951-1.801"/>
            </svg>
            Download for Windows — Free
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
