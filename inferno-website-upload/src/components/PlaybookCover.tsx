import React from "react";
import { Flame } from "lucide-react";

/**
 * A CSS/HTML-rendered mock of the playbook cover (NOT a baked image with text).
 * Mitch can later swap this for a real cover image if the design wants one.
 */
const PlaybookCover: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <div
      className={`relative aspect-[3/4] w-full max-w-xs mx-auto rounded-xl overflow-hidden shadow-2xl border border-gray-800 ${className}`}
      style={{
        background:
          "linear-gradient(160deg, rgba(13,13,13,1) 0%, rgba(26,26,26,1) 55%, rgba(199,77,218,0.15) 100%)",
      }}
      aria-hidden="true"
    >
      <div className="absolute inset-0 opacity-40">
        <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-accent-purple/20 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-40 h-40 rounded-full bg-accent-magenta/10 blur-3xl"></div>
      </div>
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center p-8">
        <Flame className="text-accent-purple mb-6" size={48} />
        <p className="text-text-muted tracking-[0.3em] text-xs mb-3">
          THE INFERNO
        </p>
        <p className="text-3xl font-bold leading-tight">
          <span className="gradient-text">Growth Playbook</span>
        </p>
        <div className="mt-6 w-12 h-0.5 gradient-bg rounded-full"></div>
      </div>
    </div>
  );
};

export default PlaybookCover;
