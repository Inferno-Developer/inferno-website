import React from "react";
import { Flame, Check } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { useSeo } from "../../utils/useSeo";

// ---------------------------------------------------------------------------
// Applications are collected on a native Airtable form, so they land in the
// Leads table alongside the playbook and creator applications. An Airtable
// automation stamps Source = "Vegas October Shoot" on arrival (the form itself
// does not collect Source), so no prefill params are needed on this link.
// The form's "redirect after submit" is set to
//   https://infernomgmt.com/vegas-thank-you?submitted=1
// which is what fires the Meta SubmitVegasApplication conversion.
// ---------------------------------------------------------------------------
const VEGAS_FORM_URL =
  "https://airtable.com/appZ57oHkxygjxP2t/pagjL4ZmVVWoYHD88/form";

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
        {/* HERO — kept tight so the CTA is tappable without scrolling on mobile */}
        <section className="relative overflow-hidden pt-24 md:pt-36 pb-12">
          <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-accent-purple/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-accent-magenta/5 rounded-full blur-3xl"></div>

          <div className="container-custom relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-accent-purple tracking-widest text-xs sm:text-sm font-semibold mb-3 uppercase">
                Las Vegas · October 21 to 24
              </p>
              <h1 className="text-3xl sm:text-5xl font-bold leading-tight mb-5">
                We're producing content for 8 Las Vegas creators this month.
              </h1>
              <p className="text-base sm:text-xl text-text-secondary mb-7 max-w-2xl mx-auto">
                Four shoot days. Social-ready photos and clips built to pull new
                followers, fans and subscribers to your page. You keep
                everything, at no cost to you.
              </p>

              <a
                href={VEGAS_FORM_URL}
                className="btn-primary text-lg px-8 py-4 inline-flex items-center justify-center"
              >
                Apply for a slot
              </a>

              <p className="text-text-muted text-sm mt-5 max-w-xl mx-auto">
                This is an application, not a booking. We select 8 creators from
                everyone who applies.
              </p>
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

        {/* THE APPLICATION — links out to the Airtable form */}
        <section id="apply" className="py-12 scroll-mt-24">
          <div className="container-custom">
            <div className="max-w-xl mx-auto">
              <div className="bg-background-light rounded-2xl p-8 sm:p-10 shadow-xl text-center">
                <h2 className="text-2xl sm:text-3xl font-bold mb-3">
                  8 slots. Applications close Sunday, October 18.
                </h2>
                <p className="text-text-secondary mb-6">
                  We review as applications come in, so applying early gets you
                  first pick of days. It takes about two minutes.
                </p>
                <a
                  href={VEGAS_FORM_URL}
                  className="btn-primary text-lg px-8 py-4 w-full inline-flex items-center justify-center"
                >
                  Apply for a slot
                </a>
                <p className="text-text-muted text-xs mt-6">
                  This is an application to qualify for one of the free shoot
                  slots. Submitting does not reserve a slot or guarantee a shoot.
                  We select creators from everyone who applies and reach out if
                  it is a fit.
                </p>
              </div>
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

      {/* STICKY MOBILE CTA — highest-impact element. Hidden on desktop. Sits
          below the cookie banner (z-50) until it is dismissed, then persists. */}
      <div className="md:hidden fixed bottom-0 inset-x-0 z-40 bg-background-dark/95 backdrop-blur border-t border-gray-800 px-4 py-3">
        <a
          href={VEGAS_FORM_URL}
          className="btn-primary w-full inline-flex items-center justify-center"
        >
          Apply for a slot
        </a>
      </div>
    </div>
  );
};

export default VegasOctober;
