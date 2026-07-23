import React from "react";
import { PageShell, ApplyCTA } from "./PageShell";
import { useSeo } from "../../utils/useSeo";

// Safe-for-work licensed images (Pexels). Swap the URLs here to change photos.
const IMAGES = [
  {
    src: "https://images.pexels.com/photos/4662717/pexels-photo-4662717.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "Professional film camera on a tripod in a studio",
  },
  {
    src: "https://images.pexels.com/photos/15778999/pexels-photo-15778999.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "Camera and gear set up for a shoot",
  },
  {
    src: "https://images.pexels.com/photos/29121434/pexels-photo-29121434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "Las Vegas strip skyline at night",
  },
];

const VegasShoots: React.FC = () => {
  useSeo(
    "Vegas Shoots | In-Person Production for Creators",
    "InfernoAgency is based in Las Vegas. Shoot in person with our team: pro setups, real direction, content planned around your strategy."
  );

  return (
    <PageShell
      eyebrow="In-Person Production"
      title="Shoot With Us in Las Vegas"
      subline="Real production. Real direction. A real team in the room."
    >
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-14">
        {IMAGES.map((img) => (
          <div
            key={img.src}
            className="aspect-video rounded-xl overflow-hidden shadow-xl"
          >
            <img
              src={img.src}
              alt={img.alt}
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      <div className="max-w-3xl mx-auto space-y-6 text-lg text-text-secondary">
        <p>
          Inferno is based in Las Vegas, and that changes what management means.
          When you come through town, you shoot with our team in person.
          Professional setups, real direction, and a content plan built before
          the camera ever comes out.
        </p>
        <p>
          Every shoot is planned around your strategy, so you leave with weeks of
          content that has a job to do. Remote-only agencies can send you notes.
          We can be in the room.
        </p>
      </div>

      <div className="text-center max-w-2xl mx-auto mt-16">
        <p className="text-2xl md:text-3xl font-bold">
          Come shoot with a team that shows up.
        </p>
      </div>

      <ApplyCTA note="Vegas trips get planned after you join. Start with the application." />
    </PageShell>
  );
};

export default VegasShoots;
