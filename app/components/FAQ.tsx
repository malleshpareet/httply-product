"use client";
import { useState } from "react";

const faqs = [
  {
    q: "How do I install Httply on Windows?",
    a: "Download the .exe or .msi installer from the download section above. Run the installer, follow the on-screen prompts, and Httply will be ready in under a minute. No technical knowledge required.",
  },
  {
    q: "Can I import my Postman collections?",
    a: "Yes! Httply supports importing collections from Postman (v2.1 format), OpenAPI / Swagger specifications, and HAR files. Just go to File → Import inside the app and select your file.",
  },
  {
    q: "Does Httply support team collaboration?",
    a: "Absolutely. Httply is built for teams. You can create shared workspaces, invite team members, manage roles and permissions, and collaborate on API collections in real-time.",
  },
  {
    q: "Is self-hosting available?",
    a: "Yes! Httply supports self-hosted deployment. This is great for enterprises that need full data control and want to run Httply behind their own firewall. Check the Self Hosting Guide in our docs.",
  },
  {
    q: "Which operating systems are supported?",
    a: "Currently Windows 10+ is supported with the native desktop app. macOS and Linux support is coming soon. The web app at httply.qzz.io works on any modern browser right now.",
  },
  {
    q: "How do I update Httply?",
    a: "The web app always stays up-to-date automatically. The desktop app will notify you when a new version is available. You can also check for updates inside the app under Help → Check for Updates.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 rounded-full text-xs text-indigo-400 glass mb-4">FAQ</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-zinc-400 text-lg">Got a question? We've got answers.</p>
        </div>

        <div className="flex flex-col gap-3">
          {faqs.map((faq, i) => (
            <div key={i} id={`faq-${i + 1}`} className="glass rounded-xl overflow-hidden">
              <button
                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
              >
                <span className="font-medium text-white text-sm">{faq.q}</span>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className={`flex-shrink-0 text-indigo-400 transition-transform duration-200 ${open === i ? "rotate-180" : ""}`}
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>
              <div
                className={`overflow-hidden transition-all duration-200 ${open === i ? "max-h-48" : "max-h-0"}`}
              >
                <p className="px-6 pb-5 text-sm text-zinc-400 leading-relaxed">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
