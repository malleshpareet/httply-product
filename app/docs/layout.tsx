import Navbar from "../components/Navbar";

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#080a0f] text-white">
      <Navbar />
      <div className="max-w-7xl mx-auto px-6 pt-24 pb-16 flex">
        {/* Sidebar */}
        <aside className="w-64 flex-shrink-0 hidden md:block pr-8 border-r border-white/10">
          <h3 className="text-sm font-semibold text-zinc-400 uppercase tracking-wider mb-4">Documentation</h3>
          <ul className="space-y-2">
            <li>
              <a href="/docs/installation" className="block px-3 py-2 text-sm text-indigo-400 bg-indigo-500/10 rounded-md font-medium">
                Installation
              </a>
            </li>
            <li>
              <a href="/docs/quickstart" className="block px-3 py-2 text-sm text-zinc-400 hover:text-white hover:bg-white/5 rounded-md transition-colors">
                Quick Start
              </a>
            </li>
            <li>
              <a href="/docs/api-reference" className="block px-3 py-2 text-sm text-zinc-400 hover:text-white hover:bg-white/5 rounded-md transition-colors">
                API Reference
              </a>
            </li>
            <li>
              <a href="/docs/teams" className="block px-3 py-2 text-sm text-zinc-400 hover:text-white hover:bg-white/5 rounded-md transition-colors">
                Team Setup
              </a>
            </li>
            <li>
              <a href="/docs/api-reference" className="block px-3 py-2 text-sm text-zinc-400 hover:text-white hover:bg-white/5 rounded-md transition-colors flex items-center justify-between">
                API Reference
                <span className="px-1.5 py-0.5 rounded text-[8px] font-bold uppercase bg-indigo-500/20 text-indigo-400">Beta</span>
              </a>
            </li>
            <li>
              <a href="/docs/import-export" className="block px-3 py-2 text-sm text-zinc-400 hover:text-white hover:bg-white/5 rounded-md transition-colors">
                Import & Export
              </a>
            </li>

          </ul>
        </aside>

        {/* Main Content */}
        <main className="flex-1 md:pl-12">
          {children}
        </main>
      </div>
    </div>
  );
}
