import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { fireConversion, fireMetaEvent, CONVERSIONS } from "../utils/gtag";

const FiftyIdeasThankYouPage: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Fire the conversion ONLY when the visitor got here by completing the form
  // (the submit handler passes state.submitted). Direct visits, refreshes,
  // bookmarks, shared links and crawlers do not fire. Same gate as /thank-you,
  // /playbook-thank-you and /vegas-thank-you.
  //
  // Deliberately reuses the SAME SubmitApplication event (and the same Google
  // creatorApplication conversion) as /apply, with a distinct content_name so
  // it stays separable in Events Manager. Per the handoff: do NOT invent a new
  // pixel event here.
  useEffect(() => {
    if (!(location.state as { submitted?: boolean } | null)?.submitted) return;

    fireConversion(CONVERSIONS.creatorApplication);
    fireMetaEvent("SubmitApplication", { content_name: "50 Video Ideas" });

    // Clear the flag so a refresh cannot re-fire the conversion.
    navigate(location.pathname, { replace: true, state: {} });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
              Your 50 ideas are on the way.
            </h1>
            <p className="text-text-secondary text-lg mb-4 max-w-xl mx-auto">
              Check your inbox in the next few minutes. If it is not there, take
              a quick look in your spam or promotions folder and mark it safe so
              you do not miss what we send next.
            </p>
            <p className="text-text-secondary text-lg mb-8 max-w-xl mx-auto">
              One more thing: we will look at your page personally, and if there
              is a fit, we will reach out.
            </p>
            <a href="/" className="btn-primary inline-flex items-center">
              Return to Homepage
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default FiftyIdeasThankYouPage;
