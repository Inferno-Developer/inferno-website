import React, { useState } from "react";
import CreatorApplicationCTA from "./CreatorApplicationCTA";
import AgencyApplicationCTA from "./AgencyApplicationCTA";
import CareersApplicationCTA from "./CareersApplicationCTA";

const ApplicationCTA: React.FC = () => {
  const [tab, setTab] = useState<"creator" | "agency" | "careers">("creator");

  return (
    <section
      id="apply"
      className="section relative overflow-hidden py-24"
      style={{
        background:
          "linear-gradient(135deg, rgba(13,13,13,1) 0%, rgba(26,26,26,1) 100%)",
      }}
    >
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-accent-purple/40 to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-gradient-to-tl from-accent-magenta/30 to-transparent"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto mb-10 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Apply to <span className="gradient-text">Inferno Agency</span>
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Select your application type below and fill out the form to get
            started.
          </p>
        </div>

        <div className="flex justify-center gap-4 mb-12">
          <button
            onClick={() => setTab("creator")}
            className={`px-4 py-2 rounded ${
              tab === "creator"
                ? "bg-accent-purple text-white"
                : "bg-gray-700 text-white/70"
            }`}
          >
            Creator
          </button>
          <button
            onClick={() => setTab("agency")}
            className={`px-4 py-2 rounded ${
              tab === "agency"
                ? "bg-accent-purple text-white"
                : "bg-gray-700 text-white/70"
            }`}
          >
            Agency
          </button>
          <button
            onClick={() => setTab("careers")}
            className={`px-4 py-2 rounded ${
              tab === "careers"
                ? "bg-accent-purple text-white"
                : "bg-gray-700 text-white/70"
            }`}
          >
            Careers
          </button>
        </div>

        {tab === "creator" ? (
          <CreatorApplicationCTA />
        ) : tab === "agency" ? (
          <AgencyApplicationCTA />
        ) : (
          <CareersApplicationCTA />
        )}
      </div>
    </section>
  );
};

export default ApplicationCTA;
