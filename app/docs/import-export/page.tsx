export default function ImportExportDocs() {
  return (
    <div className="prose prose-invert prose-indigo max-w-none">
      <h1 className="text-4xl font-extrabold tracking-tight mb-2">Import & Export</h1>
      <p className="text-xl text-zinc-400 mb-8">
        Learn how to migrate your existing API collections into Httply and export your data securely.
      </p>

      <div className="space-y-10">
        <section>
          <h2 className="text-2xl font-bold border-b border-white/10 pb-2 mb-4">Importing Collections</h2>
          <p className="text-zinc-300 mb-4">
            Httply makes it incredibly easy to migrate away from legacy API clients. We support native importing of collections and environments from multiple formats.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
            <div className="bg-[#0c0c10] border border-white/10 rounded-xl p-5">
              <h3 className="text-lg font-semibold mb-2 text-white flex items-center gap-2">
                <span className="text-[#ff6c37]">Postman</span>
              </h3>
              <p className="text-sm text-zinc-400">
                Import Postman v2.0 and v2.1 collections. We automatically map Postman variables to Httply environments and retain your folder structures.
              </p>
            </div>

            <div className="bg-[#0c0c10] border border-white/10 rounded-xl p-5">
              <h3 className="text-lg font-semibold mb-2 text-white flex items-center gap-2">
                <span className="text-[#4000bf]">Insomnia</span>
              </h3>
              <p className="text-sm text-zinc-400">
                Import Insomnia export files (JSON or YAML format). Environment variables and auth configurations are migrated seamlessly.
              </p>
            </div>

            <div className="bg-[#0c0c10] border border-white/10 rounded-xl p-5">
              <h3 className="text-lg font-semibold mb-2 text-white flex items-center gap-2">
                <span className="text-[#85ea2d]">OpenAPI / Swagger</span>
              </h3>
              <p className="text-sm text-zinc-400">
                Generate complete Httply collections directly from an OpenAPI 3.0 or Swagger 2.0 definition file or URL.
              </p>
            </div>

            <div className="bg-[#0c0c10] border border-white/10 rounded-xl p-5">
              <h3 className="text-lg font-semibold mb-2 text-white flex items-center gap-2">
                <span>cURL</span>
              </h3>
              <p className="text-sm text-zinc-400">
                Paste raw cURL commands directly into the Httply playground and we will parse them into fully configured requests instantly.
              </p>
            </div>
          </div>

          <h3 className="text-xl font-bold mt-8 mb-4">How to Import</h3>
          <ol className="list-decimal list-inside text-zinc-300 space-y-2">
            <li>Click the <strong>Import</strong> button located in the top-left corner of the sidebar.</li>
            <li>Drag and drop your file, or paste your raw text/URL.</li>
            <li>Select the target Workspace and click <strong>Confirm Import</strong>.</li>
          </ol>
        </section>

        <section>
          <h2 className="text-2xl font-bold border-b border-white/10 pb-2 mb-4">Exporting Data</h2>
          <p className="text-zinc-300 mb-4">
            You own your data. Httply allows you to export your collections and environments at any time.
          </p>
          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <ol className="list-decimal list-inside text-zinc-300 space-y-2">
              <li>Hover over the Collection you wish to export in the sidebar.</li>
              <li>Click the <strong>...</strong> (three dots) menu to open Collection Settings.</li>
              <li>Select <strong>Export</strong>.</li>
              <li>Choose the format (Httply Native JSON or OpenAPI format).</li>
              <li>A <code className="bg-white/10 px-1.5 py-0.5 rounded text-indigo-300">.json</code> file will be downloaded to your machine.</li>
            </ol>
          </div>
        </section>
      </div>
    </div>
  );
}
