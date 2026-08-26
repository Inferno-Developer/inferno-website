import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import PlaybookCover from "./PlaybookCover";

const PlaybookPromo: React.FC = () => {
  return (
    <section
      className="section relative overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, rgba(13,13,13,1) 0%, rgba(26,26,26,1) 100%)",
      }}
    >
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-accent-purple/30 to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-3/4 h-3/4 bg-gradient-to-tl from-accent-magenta/20 to-transparent"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-accent-purple tracking-widest text-sm font-semibold mb-4 uppercase">
              The Growth Playbook
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              The playbook we hand every creator we sign. Now yours.
            </h2>
            <p className="text-text-secondary text-lg mb-8 max-w-xl">
              The complete system our creators run. Traffic, content, converting
              followers into paying fans, and keeping them month after month. 12
              pages, zero fluff.
            </p>
            <Link to="/playbook" className="btn-primary inline-flex items-center">
              Get the Playbook <ArrowRight size={18} className="ml-2" />
            </Link>
            <p className="text-text-muted text-sm mt-4">
              For creators already earning and ready to scale.
            </p>
          </div>

          <div className="hidden lg:block">
            <PlaybookCover />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlaybookPromo;
