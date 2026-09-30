import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const STORAGE_KEY = "inferno_cookie_ack";

/**
 * Dismissible cookie/CPRA notice shown site-wide until acknowledged.
 * Remembers dismissal in localStorage (wrapped in try/catch so a blocked
 * storage API never breaks the page).
 */
const CookieNotice: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(STORAGE_KEY)) setVisible(true);
    } catch {
      setVisible(true);
    }
  }, []);

  const dismiss = () => {
    try {
      localStorage.setItem(STORAGE_KEY, "1");
    } catch {
      /* ignore */
    }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 inset-x-0 z-50 bg-background-light/95 backdrop-blur border-t border-gray-800 px-4 py-4">
      <div className="container-custom flex flex-col sm:flex-row items-center gap-3 sm:gap-6">
        <p className="text-text-secondary text-sm text-center sm:text-left flex-1">
          We use cookies and similar technologies for analytics and advertising,
          including the Meta Pixel and Google tag. By using this site you agree
          to our use of cookies. See our{" "}
          <Link to="/privacy" className="text-accent-purple hover:underline">
            Privacy Policy
          </Link>
          .
        </p>
        <button
          onClick={dismiss}
          className="btn-primary whitespace-nowrap px-6 py-2 text-sm"
        >
          Got it
        </button>
      </div>
    </div>
  );
};

export default CookieNotice;
