"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";

export default function AppShowcase() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const card = cardRef.current;
    if (!section || !card) return;

    const onScroll = () => {
      const rect = section.getBoundingClientRect();
      const windowH = window.innerHeight;

      // progress: 0 when section top is at bottom of viewport, 1 when section top reaches center
      const progress = Math.min(
        1,
        Math.max(0, (windowH - rect.top) / (windowH * 0.8))
      );

      // Start very bent (rotateX 28deg) → flatten to 0deg
      const rotateX = 28 * (1 - progress);
      const scale = 0.88 + 0.12 * progress;
      const opacity = 0.2 + 0.8 * progress;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) scale(${scale})`;
      card.style.opacity = String(opacity);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll(); // run once on mount
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      id="app-showcase"
      ref={sectionRef}
      className="relative -mt-32 pb-24 overflow-hidden"
    >


      <div className="max-w-[1400px] w-full mx-auto px-6">


        {/* Scroll-driven tilt card */}
        <div className="relative" style={{ transformStyle: "preserve-3d" }}>
          <div
            ref={cardRef}
            className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-indigo-500/10"
            style={{
              transform: "perspective(1000px) rotateX(28deg) scale(0.88)",
              opacity: 0.2,
              transformOrigin: "center bottom",
              willChange: "transform, opacity",
            }}
          >
            {/* Browser title bar */}
            <div className="flex items-center gap-2 px-4 py-3 bg-[#0c0c10] border-b border-white/[0.06]">
              <div className="flex gap-1.5">
                <span className="w-3 h-3 rounded-full bg-red-500/80" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <span className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <div className="flex-1 flex justify-center">
                <div className="flex items-center gap-2 px-3 py-1 rounded-md bg-white/[0.04] border border-white/[0.06]">
                  <span className="w-2 h-2 rounded-full bg-green-400/70" />
                  <span className="text-[11px] text-zinc-500 font-mono">httply.qzz.io</span>
                </div>
              </div>
              <div className="w-16" />
            </div>

            {/* Screenshot */}
            <Image
              src="/image.png"
              alt="Httply workspace interface managing API collections, environments, and testing workflows"
              width={1200}
              height={800}
              className="w-full h-auto object-cover object-top opacity-90 transition-opacity duration-500 group-hover:opacity-100"
            />

          </div>
        </div>

        {/* Caption */}
        <p className="text-center text-sm text-zinc-500 mt-8">
          REST API testing, WebSocket debugging, and team collaboration — all in one place.
        </p>
      </div>
    </section>
  );
}
