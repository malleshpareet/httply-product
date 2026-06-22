import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#080a0f] text-white">
      <Navbar />
      
      <main className="flex-1 pt-32 pb-24 max-w-4xl mx-auto px-6 w-full">
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">Terms of Service</h1>
          <p className="text-zinc-400">Last Updated: June 22, 2026</p>
        </div>

        <div className="prose prose-invert prose-indigo max-w-none text-zinc-300">
          <p className="lead text-xl text-zinc-300 mb-8">
            These Terms of Service constitute a legally binding agreement made between you and Httply, concerning your access to and use of the Httply application and website.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-4">1. Agreement to Terms</h2>
          <p>By accessing the application, you agree that you have read, understood, and agree to be bound by all of these Terms of Service. If you do not agree with all of these terms, then you are expressly prohibited from using the application and you must discontinue use immediately.</p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-4">2. Intellectual Property Rights</h2>
          <p>Unless otherwise indicated, the application is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the application and the trademarks, service marks, and logos contained therein are owned or controlled by us or licensed to us.</p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-4">3. User Representations</h2>
          <p>By using the application, you represent and warrant that:</p>
          <ul className="list-disc list-inside mt-4 space-y-2">
            <li>All registration information you submit will be true, accurate, current, and complete.</li>
            <li>You will maintain the accuracy of such information and promptly update such registration information as necessary.</li>
            <li>You have the legal capacity and you agree to comply with these Terms of Service.</li>
            <li>You will not use the application for any illegal or unauthorized purpose.</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mt-12 mb-4">4. Prohibited Activities</h2>
          <p>You may not access or use the application for any purpose other than that for which we make the application available. The application may not be used in connection with any commercial endeavors except those that are specifically endorsed or approved by us. Specifically, you may not use Httply to launch Denial of Service (DoS) attacks or scrape third-party APIs in violation of their respective terms of service.</p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-4">5. Disclaimer</h2>
          <p>THE APPLICATION IS PROVIDED ON AN AS-IS AND AS-AVAILABLE BASIS. YOU AGREE THAT YOUR USE OF THE APPLICATION WILL BE AT YOUR SOLE RISK. TO THE FULLEST EXTENT PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, IN CONNECTION WITH THE APPLICATION AND YOUR USE THEREOF.</p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-4">6. Contact Us</h2>
          <p>In order to resolve a complaint regarding the application or to receive further information regarding use of the application, please contact us at legal@httply.qzz.io.</p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
