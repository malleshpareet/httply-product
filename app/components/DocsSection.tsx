const docs = [
  { title: "Installation Guide", desc: "Step-by-step instructions for installing Httply on any platform.", icon: "📋", id: "installation-guide", href: "/docs/installation" },
  { title: "Quick Start Guide", desc: "Get up and running in under 5 minutes with our quick start guide.", icon: "⚡", id: "quickstart-guide", href: "/docs/quickstart" },
  { title: "API Documentation", desc: "Full reference for the Httply API and all available endpoints.", icon: "📖", id: "api-docs", href: "/docs/api-reference", isBeta: true },
  { title: "Team Setup Guide", desc: "Invite teammates, create shared workspaces, and manage permissions.", icon: "👥", id: "team-setup", href: "/docs/teams" },
  { title: "Import & Export", desc: "Easily migrate your collections from Postman, Insomnia, or OpenAPI.", icon: "🔄", id: "import-export", href: "/docs/import-export" },
  { title: "Troubleshooting", desc: "Common issues and solutions to get you unblocked quickly.", icon: "🔧", id: "troubleshooting", href: "/docs/troubleshooting" },
];

export default function DocsSection() {
  return (
    <section id="docs" className="py-24 relative">
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 rounded-full text-xs text-indigo-400 glass mb-4">Documentation</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Documentation & <span className="gradient-text">Guides</span>
          </h2>
          <p className="text-zinc-400 text-lg max-w-xl mx-auto">
            Everything you need to get started and get more out of Httply.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {docs.map((doc) => (
            <a
              key={doc.id}
              href={doc.href}
              id={doc.id}
              target="_blank"
              rel="noopener noreferrer"
              className="glass glass-hover rounded-xl p-6 flex items-start gap-4 group"
            >
              <span className="text-2xl">{doc.icon}</span>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <h4 className="font-semibold text-white text-sm group-hover:text-indigo-300 transition-colors">{doc.title}</h4>
                  {doc.isBeta && (
                    <span className="px-1.5 py-0.5 rounded text-[8px] font-bold uppercase bg-indigo-500/20 text-indigo-400">Beta</span>
                  )}
                </div>
                <p className="text-xs text-zinc-500 leading-relaxed">{doc.desc}</p>
              </div>
              <svg className="w-4 h-4 text-zinc-600 group-hover:text-indigo-400 transition-colors flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
