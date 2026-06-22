export default function QuickStartDocs() {
  return (
    <div className="prose prose-invert prose-indigo max-w-none">
      <h1 className="text-4xl font-extrabold tracking-tight mb-2">Quick Start Guide</h1>
      <p className="text-xl text-zinc-400 mb-8">
        Learn how to install Httply on Windows and make your first API request in minutes.
      </p>

      <div className="space-y-10">
        <section>
          <h2 className="text-2xl font-bold border-b border-white/10 pb-2 mb-4">1. Download the Installer</h2>
          <p className="text-zinc-300 mb-4">
            Httply for Windows is distributed in two formats. Choose the one that best fits your environment:
          </p>
          <ul className="list-disc list-inside text-zinc-300 space-y-2 mb-6">
            <li>
              <strong className="text-white">.exe Installer (Recommended)</strong>: The standard setup executable. Best for personal use and standard installations.
            </li>
            <li>
              <strong className="text-white">.msi Package</strong>: The Windows Installer package. Ideal for IT administrators who need to deploy Httply across multiple machines via Group Policy.
            </li>
          </ul>
          <p className="text-sm text-zinc-400">
            You can download the latest versions directly from the <a href="/#download" className="text-indigo-400 hover:text-indigo-300 underline">Download section</a> of our homepage.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold border-b border-white/10 pb-2 mb-4">2. Installation Process</h2>
          <div className="space-y-4 text-zinc-300">
            <p><strong>For the .exe Installer:</strong></p>
            <ol className="list-decimal list-inside space-y-2 mb-6">
              <li>Double-click the downloaded <code className="bg-white/10 px-1.5 py-0.5 rounded text-indigo-300">Httply_setup.exe</code> file.</li>
              <li>If prompted by Windows Defender SmartScreen, click <strong>More info</strong> and then <strong>Run anyway</strong>.</li>
              <li>Follow the standard installation wizard prompts to choose your install directory.</li>
              <li>Once finished, check "Launch Httply" and click Finish.</li>
            </ol>

            <p><strong>For the .msi Package:</strong></p>
            <ol className="list-decimal list-inside space-y-2">
              <li>Double-click the downloaded <code className="bg-white/10 px-1.5 py-0.5 rounded text-indigo-300">Httply_x64.msi</code> file.</li>
              <li>The MSI installer will run silently or show a minimal setup screen depending on your system configuration.</li>
              <li>Once completed, you will find Httply in your Start Menu.</li>
            </ol>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold border-b border-white/10 pb-2 mb-4">3. Initial Setup & First Request</h2>
          <div className="space-y-6 text-zinc-300">
            <div>
              <h3 className="text-lg font-semibold mb-2 text-white">Log In or Sign Up</h3>
              <p>When you first launch the app, you will be prompted to log in. You can use your existing web credentials or sign up for a new free account.</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2 text-white">Create a Workspace</h3>
              <p>If you don't have one already, create a new Workspace. Workspaces are where your collections, environments, and requests are stored. You can keep this private or invite team members later.</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2 text-white">Make Your First Request</h3>
              <ol className="list-decimal list-inside space-y-2 mt-2">
                <li>Click the <strong>+ New Request</strong> button in the top left.</li>
                <li>Set the method to <code className="bg-white/10 px-1.5 py-0.5 rounded text-indigo-300">GET</code>.</li>
                <li>Enter a test URL, for example: <code className="bg-white/10 px-1.5 py-0.5 rounded text-indigo-300">https://pokeapi.co/api/v2/pokemon/ditto</code>.</li>
                <li>Click the bold <strong>Send</strong> button.</li>
                <li>View the formatted JSON response in the bottom panel!</li>
              </ol>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
