import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

// Short, high-converting application: Name, Email, Instagram. The Instagram
// link is the key field so the team can review the applicant and reach out
// directly to talk through next steps. Posts to /.netlify/functions/submit
// (type "vegas"), which maps these to the Leads table and stamps
// Source = "Vegas October Shoot". Styling matches the playbook and creator
// forms exactly.
const inputStyle =
  "w-full px-4 py-3 bg-background border border-gray-700 rounded-lg text-sm text-text-primary placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-accent-purple";

const VegasForm: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    instagram: "",
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
        body: JSON.stringify({
          type: "vegas",
          // Send the Instagram value to both the handle (which names the Leads
          // record) and the clickable IG Link field.
          fields: {
            name: formData.name,
            email: formData.email,
            instagram: formData.instagram,
            igLink: formData.instagram,
          },
        }),
      });
      if (!res.ok) {
        console.error(await res.text());
        throw new Error("Failed to submit");
      }
      // Route to the confirmation page. The `submitted` flag gates the
      // conversion event there, so it fires only on a real completed submit.
      navigate("/vegas-thank-you", { state: { submitted: true } });
    } catch (err) {
      console.error("Vegas form error:", err);
      alert("Something went wrong. Please try again.");
      setSubmitting(false);
    }
  };

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
        placeholder="Email"
        className={inputStyle}
      />
      <input
        name="instagram"
        value={formData.instagram}
        onChange={handleChange}
        required
        placeholder="Instagram profile link"
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
            Apply for a slot <ArrowRight size={18} className="ml-2" />
          </>
        )}
      </button>

      <p className="text-text-muted text-xs text-center">
        This is an application to qualify for one of the free shoot slots.
        Submitting does not reserve a slot or guarantee a shoot. We review every
        application and reach out if it is a fit.
      </p>
    </form>
  );
};

export default VegasForm;
