export default function CTA() {
  return (
    <section className="py-24">
      <div className="max-w-4xl mx-auto px-6">
        <div className="relative rounded-3xl overflow-hidden glass border border-indigo-500/20 p-12 text-center">
          {/* Glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/10 to-purple-600/10 pointer-events-none" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-px bg-gradient-to-r from-transparent via-indigo-400/50 to-transparent" />

          <div className="relative">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
              Ready to start testing APIs faster?
            </h2>
            <p className="text-zinc-400 text-lg mb-10">
              Download Httply for free and join thousands of developers already using it.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/#download"
                id="cta-download-btn"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold transition-all shadow-xl shadow-indigo-500/30 hover:shadow-indigo-500/50 hover:-translate-y-0.5"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" /></svg>
                Download Free
              </a>
              <a
                href="https://httply.qzz.io"
                target="_blank"
                rel="noopener noreferrer"
                id="cta-webapp-btn"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl glass glass-hover text-white font-semibold"
              >
                Open Web App →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
