import React from "react";
import { Check, X } from "lucide-react";
import { PageShell, ApplyCTA } from "./PageShell";
import { useSeo } from "../../utils/useSeo";

const forYou = [
  "You're already earning on your platform every month and you want that number to grow.",
  "You're doing everything yourself, or you're signed with an agency that stopped answering.",
  "You're ready to treat your page like a real business, with a team behind it.",
];

const notForYou = [
  "You're just getting started or not earning yet. Build first, then come find us.",
  "You're looking for a job or a quick way to make money online. This isn't that.",
  "You want to keep running every part of your page yourself. Respect, but you don't need us.",
];

const SeeIfYouFit: React.FC = () => {
  useSeo(
    "See If You Fit | InfernoAgency",
    "InfernoAgency works with creators who are already earning and ready to scale. Two minutes to find out if we're the right team for you."
  );

  return (
    <PageShell
      title="See If You Fit"
      subline="We're a great fit for some creators and the wrong choice for others. Here's the honest version."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        <div className="card">
          <h3 className="text-xl font-bold mb-5 text-accent-purple">
            Inferno is for you if...
          </h3>
          <ul className="space-y-4">
            {forYou.map((line) => (
              <li key={line} className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full gradient-bg flex items-center justify-center mt-0.5">
                  <Check size={14} className="text-white" />
                </span>
                <span className="text-text-secondary">{line}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="card">
          <h3 className="text-xl font-bold mb-5 text-text-muted">
            We're probably not for you if...
          </h3>
          <ul className="space-y-4">
            {notForYou.map((line) => (
              <li key={line} className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-background flex items-center justify-center mt-0.5 border border-gray-700">
                  <X size={14} className="text-text-muted" />
                </span>
                <span className="text-text-secondary">{line}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="text-center max-w-2xl mx-auto mt-14">
        <p className="text-xl md:text-2xl font-bold">
          Sound like you? Then the application is the next step.
        </p>
      </div>

      <ApplyCTA note="Two minutes, a few honest questions, and we'll take it from there." />
    </PageShell>
  );
};

export default SeeIfYouFit;
