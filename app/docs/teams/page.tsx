export default function TeamSetupDocs() {
  return (
    <div className="prose prose-invert prose-indigo max-w-none">
      <h1 className="text-4xl font-extrabold tracking-tight mb-2">Team Collaboration</h1>
      <p className="text-xl text-zinc-400 mb-8">
        Set up shared Workspaces, invite teammates, and manage role-based access control.
      </p>

      <div className="space-y-10">
        <section>
          <h2 className="text-2xl font-bold border-b border-white/10 pb-2 mb-4">Workspaces</h2>
          <p className="text-zinc-300 mb-4">
            Everything in Httply lives inside a <strong>Workspace</strong>. By default, you start with a Personal Workspace. To collaborate with others, you can invite them to your current workspace or create a new dedicated Team Workspace.
          </p>
          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-2 text-white">Creating a Team Workspace</h3>
            <ol className="list-decimal list-inside text-zinc-300 space-y-2">
              <li>Click on the Workspace switcher in the top left corner of the app.</li>
              <li>Select <strong>Create New Workspace</strong>.</li>
              <li>Give your workspace a name (e.g., "Backend Team").</li>
              <li>You are automatically assigned the <strong>ADMIN</strong> role for this new workspace.</li>
            </ol>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold border-b border-white/10 pb-2 mb-4">Inviting Members</h2>
          <p className="text-zinc-300 mb-4">
            You can invite team members securely via email. They will receive a secure SMTP-powered link to join your workspace.
          </p>
          <ol className="list-decimal list-inside text-zinc-300 space-y-2 mb-6">
            <li>Open the <strong>Settings</strong> panel (gear icon) for your active workspace.</li>
            <li>Navigate to the <strong>Members</strong> tab.</li>
            <li>Click the <strong>Invite Member</strong> button.</li>
            <li>Enter the team member's email address and select their Role.</li>
            <li>Click Send. Once they click the link in their email, they will be added to the workspace.</li>
          </ol>
        </section>

        <section>
          <h2 className="text-2xl font-bold border-b border-white/10 pb-2 mb-4">Role-Based Access Control (RBAC)</h2>
          <p className="text-zinc-300 mb-4">
            Httply implements granular permissions to ensure your API collections and environment variables are secure.
          </p>
          
          <div className="space-y-4">
            <div className="bg-[#0c0c10] border border-white/10 rounded-xl p-5">
              <div className="flex items-center gap-2 mb-2">
                <span className="px-2 py-0.5 rounded text-[10px] font-bold tracking-wider uppercase bg-red-500/20 text-red-400">ADMIN</span>
              </div>
              <p className="text-zinc-400 text-sm">
                Full control over the workspace. Admins can invite or remove members, delete the workspace, modify billing settings, and edit all Collections and Requests.
              </p>
            </div>

            <div className="bg-[#0c0c10] border border-white/10 rounded-xl p-5">
              <div className="flex items-center gap-2 mb-2">
                <span className="px-2 py-0.5 rounded text-[10px] font-bold tracking-wider uppercase bg-blue-500/20 text-blue-400">EDITOR</span>
              </div>
              <p className="text-zinc-400 text-sm">
                The standard role for developers. Editors can create, edit, organize, and delete Collections, Folders, and Requests. They cannot manage workspace members.
              </p>
            </div>

            <div className="bg-[#0c0c10] border border-white/10 rounded-xl p-5">
              <div className="flex items-center gap-2 mb-2">
                <span className="px-2 py-0.5 rounded text-[10px] font-bold tracking-wider uppercase bg-green-500/20 text-green-400">VIEWER</span>
              </div>
              <p className="text-zinc-400 text-sm">
                Read-only access. Viewers can see Collections, inspect Environment variables, and execute requests locally, but they cannot save modifications or alter the shared workspace state.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
