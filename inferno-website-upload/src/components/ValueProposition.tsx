import React from "react";
import { Check, ArrowRight } from "lucide-react";

const ValueProposition: React.FC = () => {
  const benefits = [
    "Focus on content creation while we handle business operations",
    "Access our proprietary growth and engagement strategies",
    "Get professional marketing and promotional campaigns",
    "Join our exclusive creator community for collaborations",
    "Leverage native chatters to maximize fan interaction and revenue",
    "Get a personalized niche strategy tailored to your brand",
    "Set and achieve clear performance goals with our focused support",
  ];

  return (
    <section
      id="for-creators"
      className="section relative overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, rgba(13,13,13,1) 0%, rgba(26,26,26,1) 100%)",
      }}
    >
      <div className="absolute inset-0 opacity-10">
        <div className="absolute left-0 top-0 w-full h-full bg-gradient-to-br from-accent-purple/40 to-transparent"></div>
        <div className="absolute right-0 bottom-0 w-full h-full bg-gradient-to-tl from-accent-magenta/30 to-transparent"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">
              Why Creators <span className="gradient-text">Choose Us</span>
            </h2>

            <p className="text-text-secondary text-lg mb-8">
              Our management approach is designed specifically for content
              creators who want to grow their business while maintaining
              creative freedom. We believe in transparent partnerships that
              prioritize your success.
            </p>

            <div className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full gradient-bg flex items-center justify-center mr-3 mt-1">
                    <Check size={14} className="text-white" />
                  </div>
                  <p className="text-text-primary">{benefit}</p>
                </div>
              ))}
            </div>

            <a href="#apply" className="btn-primary inline-flex items-center">
              Join Our Creator Team <ArrowRight size={18} className="ml-2" />
            </a>
          </div>

          <div className="bg-background-light rounded-2xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold mb-6 text-center">
              What Our Creators Say
            </h3>

            <div className="space-y-6">
              <div className="bg-background p-6 rounded-lg">
                <p className="italic text-text-secondary mb-4">
                  "Before teaming up with Inferno Agency, I was juggling content
                  and fan messages alone. Now I have a full support system that
                  lets me focus on being creative while my income keeps
                  growing."
                </p>
                <p className="font-semibold text-right">— Mia R.</p>
              </div>

              <div className="bg-background p-6 rounded-lg">
                <p className="italic text-text-secondary mb-4">
                  "Their team helped me define my niche and create a real brand.
                  I’ve built a loyal fanbase, and every campaign they run brings
                  results. I finally feel like a true businesswoman."
                </p>
                <p className="font-semibold text-right">— Zara L</p>
              </div>

              <div className="bg-background p-6 rounded-lg">
                <p className="italic text-text-secondary mb-4">
                  "What I love most is how personal everything feels. The native
                  chatters handle my fans with care, and I get strategy updates
                  that align with my goals. It’s a full package."
                </p>
                <p className="font-semibold text-right">— Bella S.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
