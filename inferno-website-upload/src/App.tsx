import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ServicesSection from "./components/ServicesSection";
import ValueProposition from "./components/ValueProposition";
import ResultsSection from "./components/ResultsSection";
import AboutSection from "./components/AboutSection";
import ApplicationCTA from "./components/ApplicationCTA";
import Footer from "./components/Footer";
import ThankYouPage from "./components/ThankYouPage";
import BlogIndex from "./components/BlogIndex";
import BlogPostPage from "./components/BlogPostPage";

function HomePage() {
  return (
    <div className="min-h-screen bg-background-dark text-text-primary">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <ValueProposition />
      <ResultsSection />
      <AboutSection />
      <ApplicationCTA />
      <Footer />
    </div>
  );
}

function App() {
  const location = useLocation();

  useEffect(() => {
    // Set the page title based on route
    const isThankYouPage = location.pathname === "/thank-you";
    document.title = isThankYouPage 
      ? "Thank You | Inferno Agency" 
      : "Inferno Agency | Premium Creators Management";

    // Optional: Add meta description
    const metaDescription = document.createElement("meta");
    metaDescription.name = "description";
    metaDescription.content = isThankYouPage
      ? "Thank you for your submission to Inferno Agency. Our team will contact you shortly."
      : "Inferno Agency - Elite management for creators. Maximize your earnings and growth with our professional team.";
    document.head.appendChild(metaDescription);

    return () => {
      document.head.removeChild(metaDescription);
    };
  }, [location.pathname]);

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/thank-you" element={<ThankYouPage />} />
      <Route path="/blog" element={<BlogIndex />} />
      <Route path="/blog/:slug" element={<BlogPostPage />} />
    </Routes>
  );
}

export default App;
