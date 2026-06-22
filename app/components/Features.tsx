const features = [
  { title: "API Testing", desc: "Send HTTP requests with any method, headers, body, and parameters.", icon: "⚡" },
  { title: "Collections", desc: "Organize requests into collections and share them with your team.", icon: "📁" },
  { title: "Environments", desc: "Manage dev, staging, and production environments with variables.", icon: "🌐" },
  { title: "Team Collaboration", desc: "Share workspaces, collaborate in real-time, and review changes.", icon: "👥" },
  { title: "Request History", desc: "Automatically track every request you make and replay them.", icon: "🕐" },
  { title: "Auth Support", desc: "Built-in support for API keys, Bearer tokens, OAuth 2.0, and Basic Auth.", icon: "🔐" },
  { title: "Code Generation", desc: "Generate snippets for cURL, JavaScript, Python, Go, and more.", icon: "💻" },
  { title: "API Monitoring", desc: "Monitor API performance, response times, and uptime.", icon: "📈" },
  { title: "Workspaces", desc: "Organize projects with multiple workspaces for different teams.", icon: "🗂️" },
  { title: "Import Collections", desc: "Import from Postman, OpenAPI, Swagger, and HAR files instantly.", icon: "📥" },
  { title: "WebSocket Testing", desc: "Connect to WebSocket servers and test real-time messaging.", icon: "🔌" },
  { title: "Automated Workflows", desc: "Chain requests together and automate API testing workflows.", icon: "🤖" },
];

export default function Features() {
  return (
    <section id="features" className="py-24 relative">
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-indigo-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 rounded-full text-xs text-indigo-400 glass mb-4">Features</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Everything You Need to <span className="gradient-text">Test APIs</span>
          </h2>
          <p className="text-zinc-400 text-lg max-w-xl mx-auto">
            A complete API development platform packed into one beautiful app.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {features.map((f, i) => (
            <div
              key={i}
              className="glass glass-hover rounded-xl p-5 flex flex-col gap-3 group cursor-default"
            >
              <span className="text-2xl">{f.icon}</span>
              <div>
                <h4 className="font-semibold text-white text-sm mb-1">{f.title}</h4>
                <p className="text-xs text-zinc-500 leading-relaxed">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
