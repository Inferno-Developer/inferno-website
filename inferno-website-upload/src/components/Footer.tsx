import React from "react";
import { Instagram, ChevronRight, Flame } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import XIcon from "./icons/XIcon";

// Update these two if the handles ever change.
const INSTAGRAM_URL = "https://www.instagram.com/inferno_mgmt/";
const X_URL = "https://x.com/inferno__agency";

const Footer: React.FC = () => {
  const location = useLocation();
  const prefix = location.pathname === "/" ? "" : "/";

  const quickLinks = [
    { label: "Home", href: `${prefix}#home` },
    { label: "Services", href: `${prefix}#services` },
    { label: "For Creators", href: `${prefix}#for-creators` },
    { label: "Results", href: `${prefix}#results` },
    { label: "About", href: `${prefix}#about` },
    { label: "Apply", href: `${prefix}#apply` },
  ];

  return (
    <footer className="bg-background-dark border-t border-gray-800">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <div>
            <div className="flex items-center space-x-2 text-2xl font-bold mb-4">
              <Flame className="text-accent-purple" size={32} />
              <span className="text-gradient-animate">
                Inferno<span className="text-gradient-animate">Agency</span>
              </span>
            </div>
            <p className="text-text-secondary mb-4">
              Elite management services for creators. We handle the business,
              you create the content.
            </p>
            <div className="flex space-x-4">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full bg-background-light flex items-center justify-center text-text-secondary hover:text-accent-purple transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href={X_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X"
                className="w-10 h-10 rounded-full bg-background-light flex items-center justify-center text-text-secondary hover:text-accent-purple transition-colors"
              >
                <XIcon size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-text-secondary hover:text-accent-purple transition-colors flex items-center"
                  >
                    <ChevronRight size={16} className="mr-2" /> {link.label}
                  </a>
                </li>
              ))}
              <li>
                <Link
                  to="/blog"
                  className="text-text-secondary hover:text-accent-purple transition-colors flex items-center"
                >
                  <ChevronRight size={16} className="mr-2" /> Blog
                </Link>
              </li>
              <li>
                <Link
                  to="/what-we-handle"
                  className="text-text-secondary hover:text-accent-purple transition-colors flex items-center"
                >
                  <ChevronRight size={16} className="mr-2" /> What We Handle
                </Link>
              </li>
              <li>
                <Link
                  to="/why-inferno"
                  className="text-text-secondary hover:text-accent-purple transition-colors flex items-center"
                >
                  <ChevronRight size={16} className="mr-2" /> Why Inferno
                </Link>
              </li>
              <li>
                <Link
                  to="/vegas-shoots"
                  className="text-text-secondary hover:text-accent-purple transition-colors flex items-center"
                >
                  <ChevronRight size={16} className="mr-2" /> Vegas Shoots
                </Link>
              </li>
              <li>
                <Link
                  to="/fit"
                  className="text-text-secondary hover:text-accent-purple transition-colors flex items-center"
                >
                  <ChevronRight size={16} className="mr-2" /> See If You Fit
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <p className="text-text-secondary mb-4">
              Interested in our services? Have questions? Get in touch with our
              team.
            </p>
            <a
              href="mailto:infernomanagementagency@gmail.com"
              className="text-accent-purple hover:underline"
            >
              infernomanagementagency@gmail.com
            </a>
            <p className="text-text-secondary mt-4">
              Las Vegas, NV
              <br />
              United States
            </p>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 text-center text-text-secondary text-sm">
          <p>
            © {new Date().getFullYear()} Inferno Management LLC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
