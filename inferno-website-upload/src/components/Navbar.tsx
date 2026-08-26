import React, { useState, useEffect } from "react";
import { Menu, X, Flame } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

interface NavItem {
  label: string;
  href: string;
}

// In-page section links (anchors on the home page)
const sectionItems: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "For Creators", href: "#for-creators" },
  { label: "Results", href: "#results" },
  { label: "About", href: "#about" },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // On the home page, anchors stay as "#services" (smooth scroll). On other
  // pages (like /blog), prefix with "/" so they navigate home, then scroll.
  const isHome = location.pathname === "/";
  const prefix = isHome ? "" : "/";

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled && !isOpen
          ? "bg-background-dark/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <nav className="container-custom flex justify-between items-center py-4">
        <Link
          to="/"
          className="flex items-center space-x-2 text-2xl font-bold z-10"
        >
          <Flame className="text-accent-purple" size={32} />
          <span className="text-gradient-animate">
            Inferno<span className="text-gradient-animate">Agency</span>
          </span>
        </Link>

        <div className="hidden md:flex items-center space-x-8">
          {sectionItems.map((item) => (
            <a
              key={item.href}
              href={`${prefix}${item.href}`}
              className="nav-link"
            >
              {item.label}
            </a>
          ))}
          <Link to="/blog" className="nav-link">
            Blog
          </Link>
          <Link to="/playbook" className="nav-link">
            Playbook
          </Link>
          <a href={`${prefix}#apply`} className="btn-primary">
            Apply Now
          </a>
        </div>

        {!scrolled && (
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white focus:outline-none z-10"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        )}

        <div
          className={`fixed inset-0 bg-background-dark/95 backdrop-blur-md flex flex-col items-center justify-center space-y-8 transition-all duration-300 md:hidden ${
            isOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        >
          {sectionItems.map((item) => (
            <a
              key={item.href}
              href={`${prefix}${item.href}`}
              className="text-xl nav-link"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <Link
            to="/blog"
            className="text-xl nav-link"
            onClick={() => setIsOpen(false)}
          >
            Blog
          </Link>
          <Link
            to="/playbook"
            className="text-xl nav-link"
            onClick={() => setIsOpen(false)}
          >
            Playbook
          </Link>
          <a
            href={`${prefix}#apply`}
            className="btn-primary mt-4"
            onClick={() => setIsOpen(false)}
          >
            Apply Now
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
