import React from "react";
import {
  Compass,
  Calendar,
  TrendingUp,
  MessageCircle,
  ClipboardList,
} from "lucide-react";
import { PageShell, ApplyCTA } from "./PageShell";
import { useSeo } from "../../utils/useSeo";

const services = [
  {
    icon: <Compass size={32} />,
    title: "Content Strategy",
    body: "You stop guessing what to post and when. We build your content plan around what actually grows your page, and we adjust it every single week.",
  },
  {
    icon: <Calendar size={32} />,
    title: "Posting & Scheduling",
    body: "You stop living by the content calendar. We run your posting schedule every day, so your page never goes quiet and you never scramble.",
  },
  {
    icon: <TrendingUp size={32} />,
    title: "Promotion & Growth",
    body: "You stop chasing growth alone. We promote your page across the right channels and keep new fans finding you every day.",
  },
  {
    icon: <MessageCircle size={32} />,
    title: "Subscriber & Message Management",
    body: "You stop drowning in messages. Our team keeps your fans engaged, in your voice, around the clock.",
  },
  {
    icon: <ClipboardList size={32} />,
    title: "Admin & Operations",
    body: "You stop being your own back office. Tracking, reporting, and the day to day operations all get handled, and you see everything.",
  },
];

const WhatWeHandle: React.FC = () => {
  useSeo(
    "What We Handle | InfernoAgency Creator Management",
    "Content strategy, posting, promotion, messages, and admin. You keep creating, InfernoAgency runs the rest. Apply to see if you fit."
  );

  return (
    <PageShell
      eyebrow="Creator Management"
      title="What We Handle"
      subline="Right now you're the creator, the marketer, the scheduler, the chat team, and the admin. Keep the job you love. Hand us the other four."
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s) => (
          <div key={s.title} className="card group">
            <div className="mb-4 text-accent-purple group-hover:text-white transition-colors">
              {s.icon}
            </div>
            <h3 className="text-xl font-semibold mb-3">{s.title}</h3>
            <p className="text-text-secondary">{s.body}</p>
          </div>
        ))}
      </div>

      <div className="text-center max-w-2xl mx-auto mt-16">
        <p className="text-2xl md:text-3xl font-bold">
          You create. We run the rest.
        </p>
        <p className="text-text-secondary mt-2">That's the whole arrangement.</p>
      </div>

      <ApplyCTA note="The application takes about two minutes." />
    </PageShell>
  );
};

export default WhatWeHandle;
