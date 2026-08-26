import React from "react";
import { Flame } from "lucide-react";
import { PageShell } from "./PageShell";
import PlaybookCover from "../PlaybookCover";
import { useSeo } from "../../utils/useSeo";

// ─────────────────────────────────────────────────────────────────────────
// PASTE THE AIRTABLE FORM EMBED HERE.
// Put Mitch's Airtable form <iframe ...></iframe> code between the backticks
// below (keep it as one string). Until it's filled in, a placeholder shows.
const AIRTABLE_FORM_EMBED = `<iframe class="airtable-embed" src="https://airtable.com/embed/appZ57oHkxygjxP2t/pagOvbdaWV4rata3n/form" frameborder="0" onmousewheel="" width="100%" height="533" style="background: transparent; border: 1px solid #ccc;"></iframe>`;
// ─────────────────────────────────────────────────────────────────────────

const insideItems = [
  "The full path from a stranger scrolling to a paying fan, mapped on one page",
  "What to post, how often, and the three-part structure every video needs",
  "The five Instagram mistakes that end big accounts",
  "How the top creators run their day to day, VIP and Free",
  "The numbers that tell you whether any of it is working",
];

const Playbook: React.FC = () => {
  useSeo(
    "The Inferno Growth Playbook | InfernoAgency",
    "The complete growth system we run for the creators we manage. What to post, where your traffic goes, and how to keep fans month after month."
  );

  return (
    <PageShell
      eyebrow="The Inferno Growth Playbook"
      title="The Playbook We Hand Every Creator We Sign"
      subline="The complete system we run for the creators we manage. Where your traffic should go, what to post, how to turn followers into paying fans, and how to keep them month after month. Yours, in full."
    >
      <div className="max-w-3xl mx-auto">
        {/* Optional cover visual */}
        <div className="mb-14">
          <PlaybookCover />
        </div>

        {/* What's inside */}
        <h2 className="text-2xl font-bold mb-6 text-center">What's inside</h2>
        <ul className="space-y-4">
          {insideItems.map((item) => (
            <li key={item} className="flex items-start gap-3">
              <span className="flex-shrink-0 w-8 h-8 rounded-full gradient-bg flex items-center justify-center mt-0.5">
                <Flame size={16} className="text-white" />
              </span>
              <span className="text-text-secondary text-lg">{item}</span>
            </li>
          ))}
        </ul>

        {/* Trust line */}
        <p className="text-text-muted text-sm mt-5 text-center">
          12 pages. Zero fluff. Built from 4 years of managing creators.
        </p>

        {/* Filter callout */}
        <div className="my-12 rounded-xl border border-accent-purple/40 bg-accent-purple/5 p-6 text-center">
          <p className="text-text-primary text-lg">
            Built for creators who are already earning and ready to scale. If
            you're just getting started, this will still be here when you are.
          </p>
        </div>

        {/* Form section */}
        <div className="bg-background-light rounded-2xl p-8 sm:p-10 shadow-xl">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center">
            Get the playbook
          </h2>

          {AIRTABLE_FORM_EMBED ? (
            <div
              className="playbook-embed"
              dangerouslySetInnerHTML={{ __html: AIRTABLE_FORM_EMBED }}
            />
          ) : (
            <div className="rounded-lg border border-dashed border-gray-600 p-10 text-center text-text-muted">
              The signup form will appear here.
              {/* Airtable form embed slot. Mitch pastes the iframe into
                  AIRTABLE_FORM_EMBED above. Do NOT point ads at this page
                  until the embed is in place. */}
            </div>
          )}

          {/* Small print */}
          <p className="text-text-muted text-sm mt-6 text-center">
            Sent straight to your inbox. Read it in one sitting.
          </p>
        </div>
      </div>
    </PageShell>
  );
};

export default Playbook;
