import React from "react";
import { Reply, Handshake, Flame } from "lucide-react";
import { PageShell, ApplyCTA } from "./PageShell";
import { useSeo } from "../../utils/useSeo";

const pillars = [
  {
    icon: <Reply size={28} />,
    title: "We actually answer.",
    body: "You should never have to chase your own team for a reply. At Inferno you get a dedicated manager, real communication, and a real plan for your page. Ask a question, get an answer. It sounds basic. Ask anyone who's been the smallest client at a big agency how rare it is.",
  },
  {
    icon: <Handshake size={28} />,
    title: "We only earn when you do.",
    body: "No upfront fees. No monthly charges. Nothing out of pocket, ever. We make money only when you do, which means we push your page like it's our own business. Because it is.",
  },
  {
    icon: <Flame size={28} />,
    title: "A small roster, on purpose.",
    body: "We keep our roster limited so nobody becomes the small fish. Every creator we sign gets the full team and the full effort. That means we can't sign everyone. And we don't.",
  },
];

const WhyInferno: React.FC = () => {
  useSeo(
    "Why Inferno | Creator Management That Answers",
    "A dedicated manager who replies, no upfront fees, and a limited roster so you're never the small fish. See why creators pick InfernoAgency."
  );

  return (
    <PageShell
      eyebrow="Why Creators Pick Us"
      title="Why Inferno"
      subline="Every agency promises growth. Here's what actually makes us different."
    >
      <div className="max-w-3xl mx-auto space-y-6">
        {pillars.map((p) => (
          <div key={p.title} className="card flex gap-5 items-start">
            <div className="flex-shrink-0 w-14 h-14 rounded-full gradient-bg flex items-center justify-center text-white">
              {p.icon}
            </div>
            <div>
              <h3 className="text-xl md:text-2xl font-bold mb-2">{p.title}</h3>
              <p className="text-text-secondary">{p.body}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center max-w-2xl mx-auto mt-16">
        <p className="text-2xl md:text-3xl font-bold">
          If you're already earning and ready to grow, we should talk.
        </p>
      </div>

      <ApplyCTA note="Applying takes two minutes and commits you to nothing." />
    </PageShell>
  );
};

export default WhyInferno;
