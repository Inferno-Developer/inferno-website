import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const inputStyle =
  "w-full px-4 py-3 bg-background border border-gray-700 rounded-lg text-sm text-text-primary placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-accent-purple";

const PlaybookForm: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    instagram: "",
    telegram: "",
  });
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const res = await fetch("/.netlify/functions/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type: "playbook", fields: formData }),
      });
      if (!res.ok) {
        console.error(await res.text());
        throw new Error("Failed to submit");
      }
      // Redirect to the dedicated confirmation page (its own unique URL, so
      // it can carry its own conversion tag).
      navigate("/playbook-thank-you");
    } catch (err) {
      console.error("Playbook form error:", err);
      alert("Something went wrong. Please try again.");
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Single stacked column on every screen size — reads cleanly on mobile. */}
      <input
        name="name"
        value={formData.name}
        onChange={handleChange}
        required
        placeholder="Name"
        className={inputStyle}
      />
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
        placeholder="Email (where the playbook gets sent)"
        className={inputStyle}
      />
      <input
        name="instagram"
        value={formData.instagram}
        onChange={handleChange}
        required
        placeholder="Instagram handle"
        className={inputStyle}
      />
      <input
        name="telegram"
        value={formData.telegram}
        onChange={handleChange}
        placeholder="Telegram handle (optional)"
        className={inputStyle}
      />
      <button
        type="submit"
        className="btn-primary w-full inline-flex items-center justify-center"
        disabled={submitting}
      >
        {submitting ? (
          <>Sending...</>
        ) : (
          <>
            Get the Playbook <ArrowRight size={18} className="ml-2" />
          </>
        )}
      </button>
    </form>
  );
};

export default PlaybookForm;
