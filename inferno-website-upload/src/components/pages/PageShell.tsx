import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";

interface PageShellProps {
  eyebrow?: string;
  title: React.ReactNode;
  subline?: React.ReactNode;
  children: React.ReactNode;
}

/** Shared shell for the standalone sitelink pages. Matches the site design. */
export const PageShell: React.FC<PageShellProps> = ({
  eyebrow,
  title,
  subline,
  children,
}) => {
  return (
    <div className="min-h-screen bg-background-dark text-text-primary flex flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="section relative overflow-hidden pt-32 md:pt-40">
          <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-accent-purple/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-accent-magenta/5 rounded-full blur-3xl"></div>

          <div className="container-custom relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-14">
              {eyebrow && (
                <p className="text-accent-purple tracking-widest text-sm font-semibold mb-4 uppercase">
                  {eyebrow}
                </p>
              )}
              <h1 className="mb-5">{title}</h1>
              {subline && (
                <p className="text-xl text-text-secondary">{subline}</p>
              )}
            </div>

            {children}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

/** Single Apply Now CTA used at the bottom of every sitelink page. */
export const ApplyCTA: React.FC<{ note?: string }> = ({ note }) => {
  return (
    <div className="text-center mt-16">
      <a href="/#apply" className="btn-primary text-lg px-8 py-4">
        Apply Now
      </a>
      {note && <p className="text-text-muted text-sm mt-4">{note}</p>}
    </div>
  );
};
