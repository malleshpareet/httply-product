export default function InstallationDocs() {
  return (
    <div className="prose prose-invert prose-indigo max-w-none">
      <h1 className="text-4xl font-extrabold tracking-tight mb-2">Installation Guide</h1>
      <p className="text-xl text-zinc-400 mb-8">
        Get Httply up and running on your system in minutes.
      </p>

      <div className="space-y-12">
        {/* Windows Section */}
        <section>
          <h2 className="text-2xl font-bold border-b border-white/10 pb-2 mb-4">Windows</h2>
          <p className="text-zinc-300 mb-4">
            The easiest way to install Httply on Windows is using the official installer or MSI package.
          </p>
          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-2">Direct Download</h3>
            <p className="text-zinc-400 text-sm mb-4">Download the latest executable directly from our servers.</p>
            <a href="/" className="inline-flex items-center justify-center px-4 py-2 bg-indigo-600 hover:bg-indigo-500 rounded-lg text-sm font-medium transition-colors">
              Download .exe (2.7 MB)
            </a>
          </div>
        </section>

        {/* macOS Section */}
        <section>
          <div className="flex items-center gap-3 border-b border-white/10 pb-2 mb-4">
            <h2 className="text-2xl font-bold">macOS</h2>
            <span className="px-2 py-0.5 rounded text-[10px] font-bold tracking-wider uppercase bg-orange-500/20 text-orange-400">Coming Soon</span>
          </div>
          <p className="text-zinc-400 mb-4">
            Httply for macOS is currently in active development. We are working hard to bring a native, optimized experience to Apple Silicon and Intel Macs.
          </p>
        </section>

        {/* Linux Section */}
        <section>
          <div className="flex items-center gap-3 border-b border-white/10 pb-2 mb-4">
            <h2 className="text-2xl font-bold">Linux</h2>
            <span className="px-2 py-0.5 rounded text-[10px] font-bold tracking-wider uppercase bg-orange-500/20 text-orange-400">Coming Soon</span>
          </div>
          <p className="text-zinc-400 mb-4">
            Support for Linux distributions (AppImage and .deb) is on our roadmap. Stay tuned for updates!
          </p>
        </section>
      </div>
    </div>
  );
}
