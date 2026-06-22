import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AppShowcase from "./components/AppShowcase";
import DownloadSection from "./components/DownloadSection";
import Steps from "./components/Steps";
import Features from "./components/Features";
import DocsSection from "./components/DocsSection";
import FAQ from "./components/FAQ";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <AppShowcase />
        <DownloadSection />
        <Steps />
        <Features />
        <DocsSection />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
