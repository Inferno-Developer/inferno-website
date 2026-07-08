import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const ThankYouPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-background-dark text-text-primary flex flex-col">
      <Navbar />
      <div className="flex-grow flex items-center justify-center py-20">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto bg-background-light rounded-2xl overflow-hidden shadow-2xl p-8 sm:p-12 text-center">
            <div className="w-20 h-20 rounded-full gradient-bg mx-auto flex items-center justify-center mb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="36"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-white"
              >
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold mb-6">
              Thank You for Your Submission!
            </h1>
            <p className="text-text-secondary text-lg mb-8 max-w-xl mx-auto">
              Someone from our team will reach out to you shortly. We appreciate your interest in Inferno Agency.
            </p>
            <a
              href="/"
              className="btn-primary inline-flex items-center"
            >
              Return to Homepage
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ThankYouPage;
