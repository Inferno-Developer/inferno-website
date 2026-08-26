import React, { useState } from "react";
import { ArrowRight, CheckCircle } from "lucide-react";

const inputStyle =
  "w-full px-4 py-3 bg-background border border-gray-700 rounded-lg text-sm text-text-primary placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-accent-purple";

const PlaybookForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    instagram: "",
    telegram: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

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
      setSubmitted(true);
    } catch (err) {
      console.error("Playbook form error:", err);
      alert("Something went wrong. Please try again.");
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="text-center py-6">
        <div className="w-16 h-16 rounded-full gradient-bg flex items-center justify-center mx-auto mb-5">
          <CheckCircle size={32} className="text-white" />
        </div>
        <h3 className="text-2xl font-bold mb-3">You're in.</h3>
        <p className="text-text-secondary">
          Check your inbox, your playbook is on its way. If you don't see it in
          a couple of minutes, check your spam folder.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
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
