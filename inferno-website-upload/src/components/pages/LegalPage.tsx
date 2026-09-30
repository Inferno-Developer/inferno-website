import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { useSeo } from "../../utils/useSeo";

interface LegalPageProps {
  title: string;
  seoTitle: string;
  seoDescription?: string;
  effectiveDate: string;
  children: React.ReactNode;
}

/** Shared layout for legal pages (Privacy, Terms). Readable prose on the dark theme. */
const LegalPage: React.FC<LegalPageProps> = ({
  title,
  seoTitle,
  seoDescription,
  effectiveDate,
  children,
}) => {
  useSeo(seoTitle, seoDescription);
  return (
    <div className="min-h-screen bg-background-dark text-text-primary flex flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="section pt-32 md:pt-40">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto">
              <h1 className="mb-2">{title}</h1>
              <p className="text-text-muted text-sm mb-10">
                Effective date: {effectiveDate}
              </p>
              {children}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export const H2: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h2 className="text-xl font-bold text-text-primary mt-8 mb-3">{children}</h2>
);

export const P: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <p className="text-text-secondary leading-relaxed mb-4">{children}</p>
);

export const B: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <strong className="text-text-primary">{children}</strong>
);

export default LegalPage;
