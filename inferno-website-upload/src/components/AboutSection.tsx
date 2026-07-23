import React from "react";
import { Users, Briefcase, Award } from "lucide-react";

const AboutSection: React.FC = () => {
  return (
    <section
      id="about"
      className="section bg-background relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-accent-purple/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-accent-magenta/5 rounded-full blur-3xl"></div>

      <div className="container-custom relative z-10">
        <div className="section-title">
          <h2 className="gradient-text inline-block">About Inferno Agency</h2>
          <p className="section-subtitle">
            We're a team of industry experts dedicated to helping content
            creators thrive
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-6">Our Story</h3>
            <p className="text-text-secondary mb-4">
              Inferno Agency was born from one simple idea: creators deserve
              better. We’re a new agency, but we’re not here to play it safe. We
              saw too many talented models struggling with poor management,
              confusing strategies, or trying to do everything alone. So we
              built something different. Inferno is about fire, passion, energy,
              and bold moves. We're here to bring real results, clear strategy,
              and hands-on support to creators who want more. Whether you're
              just starting out or ready to scale, we treat your brand like our
              own and fight for your success every day.
            </p>
            <p className="text-text-secondary mb-6">
              This isn't just business, it’s personal. And we're just getting
              started.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex flex-col items-center p-4 bg-background-light rounded-lg">
                <Users size={28} className="text-accent-purple mb-2" />
                <p className="font-bold text-lg">20+</p>
                <p className="text-text-secondary text-sm text-center">
                  Active Creators
                </p>
              </div>

              <div className="flex flex-col items-center p-4 bg-background-light rounded-lg">
                <Briefcase size={28} className="text-accent-purple mb-2" />
                <p className="font-bold text-lg">3+ Years</p>
                <p className="text-text-secondary text-sm text-center">
                  Industry Experience
                </p>
              </div>

              <div className="flex flex-col items-center p-4 bg-background-light rounded-lg">
                <Award size={28} className="text-accent-purple mb-2" />
                <p className="font-bold text-lg">Limited</p>
                <p className="text-text-secondary text-sm text-center">
                  Roster by Design
                </p>
              </div>
            </div>
          </div>

          <div className="hidden lg:block relative">
            <div className="aspect-video rounded-xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Team meeting"
                className="w-full h-full object-cover object-center"
              />
            </div>

            <div className="absolute -bottom-6 -left-6 w-2/3 aspect-square rounded-xl overflow-hidden shadow-xl">
              <img
                src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Team collaboration"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
