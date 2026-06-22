const steps = [
  {
    number: "01",
    title: "Download Httply",
    desc: "Download the installer for your platform. Windows users get the best native experience with our .exe or .msi installer.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Install and Sign In",
    desc: "Run the installer, then sign in with your Httply account using Google or GitHub. Your workspaces sync instantly.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Test Your First API",
    desc: "Create a collection, add your first request, and hit Send. Start collaborating with your team immediately.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
];

export default function Steps() {
  return (
    <section id="setup" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 rounded-full text-xs text-indigo-400 glass mb-4">Quick Setup</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Up and Running in <span className="gradient-text">3 Steps</span>
          </h2>
          <p className="text-zinc-400 text-lg">Installation is quick and straightforward.</p>
        </div>

        <div className="relative flex flex-col md:flex-row gap-0 items-stretch">
          {steps.map((step, i) => (
            <div key={i} className="flex-1 flex flex-col md:flex-row items-center">
              <div className="relative glass rounded-2xl p-8 flex-1 flex flex-col gap-4 glass-hover group w-full">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center flex-shrink-0 group-hover:bg-indigo-500/20 transition-colors">
                    {step.icon}
                  </div>
                  <div>
                    <span className="text-xs font-mono text-indigo-400/60 font-semibold">{step.number}</span>
                    <h3 className="text-lg font-bold text-white mt-0.5">{step.title}</h3>
                  </div>
                </div>
                <p className="text-zinc-400 text-sm leading-relaxed">{step.desc}</p>
              </div>

              {i < steps.length - 1 && (
                <div className="flex items-center justify-center w-12 h-12 flex-shrink-0 my-2 md:my-0">
                  {/* Arrow right for desktop */}
                  <svg className="hidden md:block" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="url(#stepArrow)" strokeWidth="1.5" strokeLinecap="round">
                    <polyline points="9 18 15 12 9 6" />
                    <defs>
                      <linearGradient id="stepArrow" x1="0" y1="12" x2="24" y2="12" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#6366f1" /><stop offset="1" stopColor="#8b5cf6" />
                      </linearGradient>
                    </defs>
                  </svg>
                  {/* Arrow down for mobile */}
                  <svg className="md:hidden" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="url(#stepArrowDown)" strokeWidth="1.5" strokeLinecap="round">
                    <polyline points="6 9 12 15 18 9" />
                    <defs>
                      <linearGradient id="stepArrowDown" x1="12" y1="0" x2="12" y2="24" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#6366f1" /><stop offset="1" stopColor="#8b5cf6" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
