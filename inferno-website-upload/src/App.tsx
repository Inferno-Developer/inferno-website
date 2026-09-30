import { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ServicesSection from "./components/ServicesSection";
import ValueProposition from "./components/ValueProposition";
import ResultsSection from "./components/ResultsSection";
import AboutSection from "./components/AboutSection";
import ApplicationCTA from "./components/ApplicationCTA";
import Footer from "./components/Footer";
import ThankYouPage from "./components/ThankYouPage";
import PlaybookThankYouPage from "./components/PlaybookThankYouPage";
import BlogIndex from "./components/BlogIndex";
import BlogPostPage from "./components/BlogPostPage";
import WhatWeHandle from "./components/pages/WhatWeHandle";
import WhyInferno from "./components/pages/WhyInferno";
import VegasShoots from "./components/pages/VegasShoots";
import SeeIfYouFit from "./components/pages/SeeIfYouFit";
import Playbook from "./components/pages/Playbook";
import Privacy from "./components/pages/Privacy";
import Terms from "./components/pages/Terms";
import PlaybookPromo from "./components/PlaybookPromo";
import CookieNotice from "./components/CookieNotice";
import { useSeo } from "./utils/useSeo";

function HomePage() {
  useSeo(
    "InfernoAgency | Creator Management",
    "Professional creator management. We run the business side so you can focus on creating. No upfront fees, we only earn when you do."
  );
  return (
    <div className="min-h-screen bg-background-dark text-text-primary">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <ValueProposition />
      <ResultsSection />
      <AboutSection />
      <PlaybookPromo />
      <ApplicationCTA />
      <Footer />
    </div>
  );
}

// /apply is a real page: render the homepage and jump to the application form,
// so ad traffic to /apply never lands on a blank screen.
function ApplyPage() {
  useEffect(() => {
    const el = document.getElementById("apply");
    if (el) el.scrollIntoView();
  }, []);
  return <HomePage />;
}

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/apply" element={<ApplyPage />} />
        <Route path="/thank-you" element={<ThankYouPage />} />
        <Route path="/playbook-thank-you" element={<PlaybookThankYouPage />} />
        <Route path="/blog" element={<BlogIndex />} />
        <Route path="/blog/:slug" element={<BlogPostPage />} />
        <Route path="/what-we-handle" element={<WhatWeHandle />} />
        <Route path="/why-inferno" element={<WhyInferno />} />
        <Route path="/vegas-shoots" element={<VegasShoots />} />
        <Route path="/fit" element={<SeeIfYouFit />} />
        <Route path="/playbook" element={<Playbook />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        {/* Any unknown path redirects home — no blank pages for ad traffic. */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <CookieNotice />
    </>
  );
}

export default App;
