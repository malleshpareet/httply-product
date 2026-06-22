import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#080a0f] text-white">
      <Navbar />
      
      <main className="flex-1 pt-32 pb-24 max-w-4xl mx-auto px-6 w-full">
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">Privacy Policy</h1>
          <p className="text-zinc-400">Last Updated: June 22, 2026</p>
        </div>

        <div className="prose prose-invert prose-indigo max-w-none text-zinc-300">
          <p className="lead text-xl text-zinc-300 mb-8">
            At Httply, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our application.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-4">1. Information We Collect</h2>
          <p>We collect information that you voluntarily provide to us when you register on the application, express an interest in obtaining information about us or our products, or otherwise when you contact us.</p>
          <ul className="list-disc list-inside mt-4 space-y-2">
            <li><strong>Personal Information:</strong> We collect names, email addresses, usernames, passwords, and other similar information.</li>
            <li><strong>Usage Data:</strong> We automatically collect certain information when you visit, use, or navigate the application. This information does not reveal your specific identity but may include device and usage information, such as your IP address, browser and device characteristics, operating system, and language preferences.</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mt-12 mb-4">2. How We Use Your Information</h2>
          <p>We use personal information collected via our application for a variety of business purposes described below. We process your personal information for these purposes in reliance on our legitimate business interests, in order to enter into or perform a contract with you, with your consent, and/or for compliance with our legal obligations.</p>
          <ul className="list-disc list-inside mt-4 space-y-2">
            <li>To facilitate account creation and logon process.</li>
            <li>To send administrative information to you.</li>
            <li>To fulfill and manage your requests and workspaces.</li>
            <li>To request feedback and to contact you about your use of our application.</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mt-12 mb-4">3. Data Security and Workspace Privacy</h2>
          <p>Httply uses administrative, technical, and physical security measures to help protect your personal information. When you use the Desktop client, your requests are made locally from your machine. If you utilize Cloud Sync for Workspaces, your collections and environment variables are securely transmitted and encrypted at rest on our PostgreSQL database.</p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-4">4. Contact Us</h2>
          <p>If you have questions or comments about this notice, you may email us at privacy@httply.qzz.io.</p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
