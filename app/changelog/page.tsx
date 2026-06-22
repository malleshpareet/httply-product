import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function ChangelogPage() {
  const releases = [
    {
      version: "v1.0.0",
      date: "June 22, 2026",
      badge: "Latest",
      description: "The official v1.0 release of Httply. The fastest API and WebSocket client designed specifically for modern teams.",
      changes: [
        { type: "Feature", text: "Added native Windows installer (.exe) and MSI packages for seamless deployments." },
        { type: "Feature", text: "Introduced Team Workspaces with Role-Based Access Control (Admin, Editor, Viewer)." },
        { type: "Feature", text: "Real-time WebSocket debugging playground is now out of beta." },
        { type: "Improvement", text: "Complete UI overhaul matching the new brand identity with glassmorphism effects." },
        { type: "Fix", text: "Resolved a memory leak when keeping multiple large JSON response tabs open." },
      ]
    },
    {
      version: "v0.9.5-beta",
      date: "May 14, 2026",
      badge: "Beta",
      description: "Focus on import tools and collection management improvements.",
      changes: [
        { type: "Feature", text: "Added support for importing Postman v2.1 collections natively." },
        { type: "Feature", text: "Added cURL command importing directly into the playground." },
        { type: "Improvement", text: "Significantly reduced Tauri bundle size, improving startup times by 40%." },
        { type: "Fix", text: "Fixed an issue where environment variables wouldn't sync immediately after creation." },
      ]
    },
    {
      version: "v0.8.0-alpha",
      date: "April 02, 2026",
      badge: "Alpha",
      description: "Initial early-access alpha release of the Httply desktop client.",
      changes: [
        { type: "Feature", text: "Basic REST HTTP client capabilities (GET, POST, PUT, DELETE)." },
        { type: "Feature", text: "Personal Workspaces and Collections." },
        { type: "Feature", text: "Monaco Editor integration for JSON request bodies." },
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#080a0f] text-white">
      <Navbar />
      
      <main className="flex-1 pt-32 pb-24 max-w-4xl mx-auto px-6 w-full">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">Changelog</h1>
          <p className="text-xl text-zinc-400">
            Keep track of what's new, improved, and fixed in Httply.
          </p>
        </div>

        <div className="relative border-l border-white/10 pl-8 ml-4 md:ml-0 space-y-16">
          {releases.map((release) => (
            <div key={release.version} className="relative">
              {/* Timeline dot */}
              <div className="absolute -left-[41px] top-1.5 w-5 h-5 rounded-full bg-[#080a0f] border-2 border-indigo-500 flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
              </div>

              <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-4 mb-4">
                <h2 className="text-3xl font-bold text-white">{release.version}</h2>
                <div className="flex items-center gap-3">
                  <span className="text-zinc-400 text-sm">{release.date}</span>
                  <span className={`px-2 py-0.5 rounded text-[10px] font-bold tracking-wider uppercase ${
                    release.badge === 'Latest' ? 'bg-indigo-500/20 text-indigo-400' :
                    release.badge === 'Beta' ? 'bg-orange-500/20 text-orange-400' :
                    'bg-zinc-500/20 text-zinc-400'
                  }`}>
                    {release.badge}
                  </span>
                </div>
              </div>

              <p className="text-zinc-300 text-lg mb-6 leading-relaxed">
                {release.description}
              </p>

              <ul className="space-y-3">
                {release.changes.map((change, i) => (
                  <li key={i} className="flex items-start gap-3 text-zinc-300">
                    <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase mt-0.5 ${
                      change.type === 'Feature' ? 'bg-green-500/10 text-green-400 border border-green-500/20' :
                      change.type === 'Improvement' ? 'bg-blue-500/10 text-blue-400 border border-blue-500/20' :
                      'bg-red-500/10 text-red-400 border border-red-500/20'
                    }`}>
                      {change.type}
                    </span>
                    <span className="text-sm leading-relaxed">{change.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
