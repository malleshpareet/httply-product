export default function ApiReferenceDocs() {
  return (
    <div className="prose prose-invert prose-indigo max-w-none">
      <div className="flex items-center gap-3 mb-2">
        <h1 className="text-4xl font-extrabold tracking-tight m-0">API Reference</h1>
        <span className="px-2 py-1 rounded text-[10px] font-bold tracking-wider uppercase bg-indigo-500/20 text-indigo-400">Public Beta</span>
      </div>
      <p className="text-xl text-zinc-400 mb-8">
        Interact programmatically with your Workspaces, Collections, and Requests.
      </p>

      <div className="bg-indigo-500/10 border border-indigo-500/20 rounded-xl p-5 mb-10">
        <h3 className="text-indigo-400 font-semibold mb-2">Beta Notice</h3>
        <p className="text-sm text-indigo-200/70">
          The Httply public API is currently in Beta. While the core functionality is stable, some endpoints, query parameters, or response structures might change before the v1.0 release. We recommend pinning your integration to the current version header.
        </p>
      </div>

      <div className="space-y-10">
        <section>
          <h2 className="text-2xl font-bold border-b border-white/10 pb-2 mb-4">Authentication</h2>
          <p className="text-zinc-300 mb-4">
            All API requests must be authenticated using a Personal Access Token (PAT). You can generate a PAT in your Httply Account Settings.
          </p>
          <div className="bg-[#0c0c10] border border-white/10 rounded-xl p-4 font-mono text-sm text-zinc-400">
            Authorization: Bearer httply_pat_abc123...
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold border-b border-white/10 pb-2 mb-4">Base URL</h2>
          <p className="text-zinc-300 mb-4">
            The base URL for all API requests is:
          </p>
          <div className="bg-[#0c0c10] border border-white/10 rounded-xl p-4 font-mono text-sm text-zinc-400">
            https://api.httply.qzz.io/v1
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold border-b border-white/10 pb-2 mb-4">Endpoints Overview</h2>
          <p className="text-zinc-300 mb-4">
            The full endpoint documentation is actively being drafted. Current available modules in Beta:
          </p>
          <ul className="list-disc list-inside text-zinc-300 space-y-2 mb-6">
            <li><strong className="text-white">Workspaces</strong>: List, create, and fetch workspace metadata.</li>
            <li><strong className="text-white">Collections</strong>: Retrieve collection schemas and folder structures.</li>
            <li><strong className="text-white">Environments</strong>: Sync environment variables programmatically.</li>
          </ul>
          <p className="text-zinc-400 italic text-sm">
            Detailed API schemas (Swagger/OpenAPI) will be published here soon.
          </p>
        </section>
      </div>
    </div>
  );
}
