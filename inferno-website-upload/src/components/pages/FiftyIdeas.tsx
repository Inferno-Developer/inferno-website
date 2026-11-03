import React from "react";
import { Check } from "lucide-react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import IdeasForm from "../IdeasForm";
import { useSeo } from "../../utils/useSeo";

const whatYouGet = [
  "The hook line to open on",
  "What to put on screen",
  "Why it works, so you can write your own once you see the pattern",
];

const nextSteps = [
  {
    title: "You submit.",
    body: "The list comes to the email you give us.",
  },
  {
    title: "We look at your page.",
    body: "Every single one, personally.",
  },
  {
    title: "If there is a fit, we reach out.",
    body: "If there is not, you still have the 50 ideas.",
  },
];

const FiftyIdeas: React.FC = () => {
  useSeo(
    "50 Instagram Video Ideas for Creators | InfernoAgency",
    "50 original Instagram video ideas, the concepts we write for the creators we manage every week. Tell us about your page and we will send the whole list."
  );

  return (
    <div className="min-h-screen bg-background-dark text-text-primary flex flex-col">
      <Navbar />

      <main className="flex-1 pb-28 md:pb-0">
        {/* HERO + FORM — kept tight so the form is at the top of the page and
            easy to start filling out without scrolling on mobile. */}
        <section
          id="apply"
          className="relative overflow-hidden pt-20 md:pt-28 pb-10 scroll-mt-20"
        >
          <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-accent-purple/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-accent-magenta/5 rounded-full blur-3xl"></div>

          <div className="container-custom relative z-10">
            <div className="max-w-2xl mx-auto text-center mb-5">
              <p className="text-accent-purple tracking-widest text-xs sm:text-sm font-semibold mb-2 uppercase">
                Free for creators
              </p>
              <h1 className="text-2xl sm:text-4xl font-bold leading-tight">
                50 Instagram video ideas you have not seen before.
              </h1>
            </div>

            {/* Native application form — dark card, matches the rest of the site */}
            <div className="max-w-xl mx-auto">
              <div className="bg-background-light rounded-2xl p-6 sm:p-10 shadow-xl">
                <p className="text-text-secondary text-center mb-6">
                  Tell us about your page and we will send the whole list. Takes
                  about two minutes.
                </p>
                <IdeasForm />
              </div>
            </div>
          </div>
        </section>

        {/* WHY YOUR IDEAS FEEL RECYCLED */}
        <section className="py-10">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                Why your ideas feel recycled
              </h2>
              <p className="text-text-secondary text-lg">
                You have been pulling ideas off your own feed. The problem is
                that your feed shows you what already worked. By the time a
                format reaches you, the algorithm has served it to everyone else
                in your niche, so you are not early to it, you are late. That is
                why the videos feel tired before you even post them.
              </p>
            </div>
          </div>
        </section>

        {/* WHAT YOU ACTUALLY GET */}
        <section className="py-10">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl sm:text-3xl font-bold mb-3 text-center">
                What you actually get
              </h2>
              <p className="text-text-secondary text-center mb-8">
                50 specific concepts. Not categories, not "try a day in the
                life." Each one includes:
              </p>
              <ul className="space-y-4">
                {whatYouGet.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full gradient-bg flex items-center justify-center mt-0.5">
                      <Check size={16} className="text-white" />
                    </span>
                    <span className="text-text-secondary text-lg">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-text-secondary text-center mt-8">
                Built for creators who already post and want ideas that are not
                everywhere yet.
              </p>
            </div>
          </div>
        </section>

        {/* WHY WE GIVE THIS AWAY */}
        <section className="py-10">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                Why we give this away
              </h2>
              <p className="text-text-secondary text-lg">
                We write these plans weekly for our roster. Handing you 50 of
                them costs us nothing, and it is a more honest introduction than
                a sales pitch. If you want help running the rest of it, the form
                above is also how you apply. If you just want the ideas, take
                them.
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
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* STICKY MOBILE CTA — jumps up to the form. Hidden on desktop. Sits
          below the cookie banner (z-50) until it is dismissed. */}
      <div className="md:hidden fixed bottom-0 inset-x-0 z-40 bg-background-dark/95 backdrop-blur border-t border-gray-800 px-4 py-3">
        <a
          href="#apply"
          className="btn-primary w-full inline-flex items-center justify-center"
        >
          Get the 50 ideas
        </a>
      </div>
    </div>
  );
};

export default FiftyIdeas;
