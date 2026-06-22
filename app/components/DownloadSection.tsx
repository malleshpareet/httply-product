"use client";
import { Download as DownloadIcon, Terminal } from "lucide-react";

type Download =
  | { id: string; label: string; file: string; size: string; primary: boolean }
  | { id: string; label: string; href: string; primary: boolean };

const platforms: {
  id: string;
  name: string;
  desc: string;
  featured?: boolean;
  comingSoon?: boolean;
  downloads: Download[];
  features: string[];
  badge?: string;
}[] = [
    {
      id: "windows",
      name: "Windows",
      desc: "Windows 10 or later • 64-bit",
      featured: true,
      downloads: [
        { label: "Download .exe", file: "/Httply_0.1.0_x64-setup.exe", size: "1.8 MB", primary: true, id: "win-exe-btn" },
        { label: "Download .msi", file: "/Httply_0.1.0_x64_en-US.msi", size: "2.7 MB", primary: false, id: "win-msi-btn" },
      ],
      features: ["One-click install", "Automatic updates", "Native experience"],
      badge: "Recommended",
    },
    {
      id: "mac",
      name: "macOS",
      desc: "macOS 12 Monterey or later",
      comingSoon: true,
      downloads: [],
      features: ["Apple Silicon support", "Native performance", "Retina ready"],
    },
    {
      id: "linux",
      name: "Linux",
      desc: "Ubuntu 20.04+, Debian, Fedora",
      comingSoon: true,
      downloads: [],
      features: [".deb & .rpm packages", "AppImage support", "CLI install"],
    },
    {
      id: "web",
      name: "Web App",
      desc: "No installation required",
      downloads: [
        { label: "Open in Browser", href: process.env.NEXT_PUBLIC_WEB_APP_URL || "https://httply.qzz.io", primary: true, id: "web-app-btn" },
      ],
      features: ["Always up-to-date", "No install needed", "Works everywhere"],
    },
  ];

const platformIcons: Record<string, React.ReactNode> = {
  windows: (
    <svg className="w-10 h-10" viewBox="0 0 24 24" fill="currentColor">
      <path d="M3 12V6.75l6-1.32v6.57H3zm17 0V4.5l-9 1.8v5.7h9zM3 13.5h6v6.45L3 18.75V13.5zm17 0h-9v5.85l9 1.8V13.5z" />
    </svg>
  ),
  mac: (
    <svg className="w-10 h-10" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
    </svg>
  ),
  linux: (
    <svg className="w-10 h-10 text-current" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm0 1.905c1.455 0 2.82.358 4.02.973A4.542 4.542 0 0 0 14.654 6.5c-1.353-.298-2.617-.45-3.856-.45-4.475 0-8.24 3.033-9.52 7.234a4.576 4.576 0 0 0-1.272.18C.043 12.98.026 12.494.026 12c0-5.561 4.534-10.095 10.095-10.095h1.879zM19.467 2.658c1.782 1.954 2.87 4.55 2.87 7.411a10.063 10.063 0 0 1-1.01 4.394 4.558 4.558 0 0 0-3.144-1.928 8.01 8.01 0 0 0 .108-1.303 8.1 8.1 0 0 0-3.328-6.529 4.54 4.54 0 0 0 3.328-1.576c.414-.492.748-1.042.988-1.637l.188-.832zM3.486 19.34A10.062 10.062 0 0 1 1.906 12c0-.528.043-1.046.126-1.55a4.545 4.545 0 0 0 3.323 1.91 8.1 8.1 0 0 0 3.327 6.528 4.555 4.555 0 0 0-3.14 1.928c-.732-.387-1.417-.86-2.056-1.476zm16.51 2.378A10.061 10.061 0 0 1 12 23.974c-1.895 0-3.666-.522-5.183-1.413A4.544 4.544 0 0 0 9.878 18.6a8.04 8.04 0 0 0 2.122.28c4.475 0 8.24-3.033 9.52-7.234a4.58 4.58 0 0 0 1.27-.18c.033.485.05.972.05 1.464a10.057 10.057 0 0 1-2.844 6.788z" />
    </svg>
  ),
  web: (
    <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  ),
};

export default function DownloadSection() {
  return (
    <section id="download" className="py-28 relative">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 rounded-full text-xs text-indigo-400 glass mb-4">Download</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Get <span className="gradient-text">Httply</span>
          </h2>
          <p className="text-zinc-400 text-lg max-w-xl mx-auto">
            Choose your platform and start testing APIs in minutes.
          </p>
        </div>

        {/* Version banner */}
        <div className="flex items-center justify-center gap-3 mb-12 p-3 rounded-xl glass max-w-sm mx-auto">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span className="text-sm text-zinc-300">
            Latest: <span className="font-mono text-white font-semibold">v1.0.0</span>
          </span>
          <span className="text-zinc-600">•</span>
          <span className="text-sm text-zinc-400">Released June 2025</span>
        </div>

        {/* Platform cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {platforms.map((platform) => (
            <div
              key={platform.id}
              id={`${platform.id}-card`}
              className={`relative rounded-2xl p-6 flex flex-col gap-4 transition-all duration-200 ${platform.featured
                  ? "glass border border-indigo-500/30 shadow-xl shadow-indigo-500/10 hover:shadow-indigo-500/20"
                  : "glass border border-white/[0.06] hover:border-white/[0.12]"
                } ${platform.comingSoon ? "opacity-60" : ""}`}
            >
              {platform.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-indigo-600 text-white text-xs font-semibold shadow-lg shadow-indigo-500/30">
                  {platform.badge}
                </div>
              )}
              {platform.comingSoon && (
                <div className="absolute inset-0 rounded-2xl flex items-center justify-center">
                  <span className="px-3 py-1 rounded-full glass text-xs text-zinc-400 font-medium backdrop-blur-md">
                    Coming Soon
                  </span>
                </div>
              )}

              <div className={`p-2.5 rounded-xl w-fit ${platform.featured ? "bg-indigo-500/10 text-indigo-400" : "bg-white/5 text-zinc-400"}`}>
                {platformIcons[platform.id]}
              </div>

              <div>
                <h3 className="font-bold text-white text-lg">{platform.name}</h3>
                <p className="text-sm text-zinc-500">{platform.desc}</p>
              </div>

              <div className="flex flex-col gap-2 flex-1 justify-end">
                {platform.comingSoon ? (
                  <button
                    disabled
                    className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-white/5 text-zinc-500 text-sm cursor-not-allowed"
                  >
                    Coming Soon
                  </button>
                ) : (
                  platform.downloads.map((dl) => (
                    <a
                      key={dl.id}
                      href={"file" in dl ? dl.file : dl.href}
                      id={dl.id}
                      download={"file" in dl ? true : undefined}
                      target={"href" in dl ? "_blank" : undefined}
                      rel={"href" in dl ? "noopener noreferrer" : undefined}
                      className={`flex items-center justify-between gap-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-all ${dl.primary
                          ? "bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-500/20"
                          : "glass glass-hover text-zinc-300"
                        }`}
                    >
                      <span className="flex items-center gap-2">
                        <DownloadIcon className="w-4 h-4" />
                        {dl.label}
                      </span>
                      {"size" in dl && <span className="text-xs opacity-60">{dl.size}</span>}
                    </a>
                  ))
                )}
              </div>

              <ul className="flex flex-col gap-1 pt-2 border-t border-white/[0.05]">
                {platform.features.map((f) => (
                  <li key={f} className="text-xs text-zinc-500 flex items-center gap-1.5">
                    <span className="text-indigo-400">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
