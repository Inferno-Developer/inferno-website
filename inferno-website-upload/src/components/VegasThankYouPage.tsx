import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { fireMetaEvent } from "../utils/gtag";
// import { fireConversion, CONVERSIONS } from "../utils/gtag";

const VegasThankYouPage: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Fire the Vegas application conversion ONLY on a real completed submission.
  // There are two ways a real submission can land here:
  //   1. The Airtable form's "redirect after submit" sends the browser to
  //      /vegas-thank-you?submitted=1 (this is the live path for the native
  //      Airtable form).
  //   2. An in-site form passes router state { submitted: true } (kept for
  //      flexibility / future use).
  // Direct visits, refreshes, bookmarks, shared links and crawlers have neither
  // flag, so they do not fire. This mirrors the gating on /thank-you and
  // /playbook-thank-you.
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const fromRedirect = params.get("submitted") === "1";
    const fromState = (location.state as { submitted?: boolean } | null)
      ?.submitted;

    if (!fromRedirect && !fromState) return;

    // Meta: its own event so this campaign's optimization never mixes with the
    // Playbook "Lead" event.
    fireMetaEvent("SubmitVegasApplication", {
      content_name: "Vegas Shoot Application",
    });

    // Google: conversion action is TBC. Once it exists, add it to CONVERSIONS
    // in utils/gtag.ts, uncomment the import above, and uncomment the line
    // below.
    // fireConversion(CONVERSIONS.vegasApplication);

    // Strip the flag/state so a refresh cannot re-fire the conversion.
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
              Thank you for submitting.
            </h1>
            <p className="text-text-secondary text-lg mb-8 max-w-xl mx-auto">
              One of our team members will reach out to you shortly. If you are
              selected, we will coordinate a day between October 21 and 24.
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

export default VegasThankYouPage;
