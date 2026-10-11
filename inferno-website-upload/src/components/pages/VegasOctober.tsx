import React from "react";
import { Flame, Check } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar";
import Footer from "../Footer";
import VegasForm from "../VegasForm";
import { useSeo } from "../../utils/useSeo";

// Native on-site application form (matches the playbook and creator forms
// exactly). Submissions post to /.netlify/functions/submit (type "vegas") and
// land in the Leads table; the "Vegas Shoot Source Tag" automation stamps
// Source = Vegas October Shoot off the "In Vegas" field. On success it routes
// to /vegas-thank-you with state.submitted, which fires the Meta
// SubmitVegasApplication conversion once.

const walkAway = [
  "25 photos and 5 short-form clips, edited and delivered, ready to post",
  "Content built to stop the scroll and pull people to your profile",
  "Shot for the platforms you actually post on, in the formats they reward",
  "You keep all of it. Post it anywhere, no credit required, no strings",
];

const lookingFor = [
  "You're already earning from your content",
  "You have an established following",
  "You've been doing this for months, not weeks",
  "You're in Las Vegas, or you can get here between the 21st and 24th",
];

const nextSteps = [
  { title: "You apply.", body: "About two minutes." },
  {
    title: "We review.",
    body: "Every application, personally. We'll look at your page.",
  },
  {
    title: "We reach out.",
    body: "If it's a fit, we'll message you to lock in a day between the 21st and the 24th.",
  },
];

const VegasOctober: React.FC = () => {
  useSeo(
    "Free Las Vegas Content Shoot for Creators | InfernoAgency",
    "We're producing content for 8 Las Vegas creators this month, October 21 to 24. Apply for one of the free shoot slots."
  );

  return (
    <div className="min-h-screen bg-background-dark text-text-primary flex flex-col">
      <Navbar />

      <main className="flex-1 pb-28 md:pb-0">
        {/* HERO + FORM — kept tight so the form itself is at the top of the
            page and visible without scrolling on mobile. */}
        <section id="apply" className="relative overflow-hidden pt-20 md:pt-28 pb-10 scroll-mt-20">
          <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-accent-purple/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-accent-magenta/5 rounded-full blur-3xl"></div>

          <div className="container-custom relative z-10">
            <div className="max-w-2xl mx-auto text-center mb-5">
              <p className="text-accent-purple tracking-widest text-xs sm:text-sm font-semibold mb-2 uppercase">
                Las Vegas · October 21 to 24 · 8 slots
              </p>
              <h1 className="text-2xl sm:text-4xl font-bold leading-tight">
                Apply for a free Las Vegas content shoot.
              </h1>
            </div>

            {/* Native application form — dark card, matches the rest of the site */}
            <div className="max-w-xl mx-auto">
              <div className="bg-background-light rounded-2xl p-6 sm:p-10 shadow-xl">
                <VegasForm />
              </div>
            </div>
          </div>
        </section>

        {/* WHAT YOU WALK AWAY WITH */}
        <section className="py-10">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl sm:text-3xl font-bold mb-3 text-center">
                What you walk away with
              </h2>
              <p className="text-text-secondary text-center mb-8">
                25 photos and 5 short-form clips. Not a portfolio. Content
                designed to do a job.
              </p>
              <ul className="space-y-4">
                {walkAway.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full gradient-bg flex items-center justify-center mt-0.5">
                      <Check size={16} className="text-white" />
                    </span>
                    <span className="text-text-secondary text-lg">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-text-secondary text-center mt-8">
                A booked studio in Las Vegas, a photographer who shoots
                creators, and someone running the session so you're not standing
                there deciding what to do next. Nothing to buy on the day.
              </p>
            </div>
          </div>
        </section>

        {/* WHO WE'RE LOOKING FOR */}
        <section className="py-10">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl sm:text-3xl font-bold mb-3 text-center">
                Who we're looking for
              </h2>
              <p className="text-text-secondary text-center mb-8">
                Built for creators who are already making money online and need
                more eyes on their page.
              </p>
              <ul className="space-y-4">
                {lookingFor.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full gradient-bg flex items-center justify-center mt-0.5">
                      <Flame size={16} className="text-white" />
                    </span>
                    <span className="text-text-secondary text-lg">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-text-primary text-center mt-8 text-lg">
                If that's you, apply. We'd genuinely like to meet you.
              </p>
            </div>
          </div>
        </section>

        {/* WHO THIS ISN'T FOR → playbook */}
        <section className="py-10">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto rounded-xl border border-accent-purple/40 bg-accent-purple/5 p-8 text-center">
              <h2 className="text-2xl font-bold mb-3">Who this isn't for</h2>
              <p className="text-text-secondary mb-6">
                If you're just getting started, this isn't the right fit yet, and
                we'd rather say so than waste your time. What would actually help
                you right now is the playbook we hand every creator we sign. The
                full system, start to finish, nothing held back.
              </p>
              <Link
                to="/playbook"
                className="btn-outline inline-flex items-center justify-center"
              >
                Get the Growth Playbook
              </Link>
            </div>
          </div>
        </section>

        {/* WHY WE DO THIS */}
        <section className="py-10">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                Why we do this
              </h2>
              <p className="text-text-secondary text-lg">
                We're a Las Vegas agency with our own production setup. We'd
                rather meet creators in person than read applications, and a
                shoot day is the honest way to do that. If we end up working
                together, great. If we don't, you keep the content either way.
                No obligation in either direction and nobody will pressure you on
                the day.
              </p>
            </div>
          </div>
        </section>

        {/* WHAT HAPPENS NEXT */}
        <section className="py-10">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center">
                What happens next
              </h2>
              <ol className="space-y-6">
                {nextSteps.map((step, i) => (
                  <li key={step.title} className="flex items-start gap-4">
                    <span className="flex-shrink-0 w-9 h-9 rounded-full gradient-bg flex items-center justify-center font-bold text-white">
                      {i + 1}
                    </span>
                    <p className="text-text-secondary text-lg">
                      <span className="text-text-primary font-semibold">
                        {step.title}
                      </span>{" "}
                      {step.body}
                    </p>
                  </li>
                ))}
              </ol>
              <p className="text-text-muted text-sm mt-8 text-center max-w-xl mx-auto">
                If we can't offer you a slot this round, we'll tell you, and
                we'll send you the playbook so applying wasn't a waste of your
                time.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* STICKY MOBILE CTA — jumps back up to the form. Hidden on desktop.
          Sits below the cookie banner (z-50) until it is dismissed. */}
      <div className="md:hidden fixed bottom-0 inset-x-0 z-40 bg-background-dark/95 backdrop-blur border-t border-gray-800 px-4 py-3">
        <a
          href="#apply"
          className="btn-primary w-full inline-flex items-center justify-center"
        >
          Apply for a slot
        </a>
      </div>
    </div>
  );
};

export default VegasOctober;
