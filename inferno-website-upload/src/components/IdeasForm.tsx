import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

// Application form for the /50-ideas lead magnet. Same qualifiers as a creator
// application, posted as type "ideas" so the Netlify function tags it with
// Source = "50 Video Ideas" (an Airtable automation delivers the list off that
// tag). On success it routes to /50-ideas-thank-you with state.submitted, which
// fires SubmitApplication (content_name "50 Video Ideas") + the Google creator
// conversion once. Select values MUST match the Airtable single-select choice
// names exactly. Field-ID mapping lives in netlify/functions/submit.js.
const TIME_CREATING = [
  "Less than 3 months",
  "3 to 6 months",
  "6 to 12 months",
  "Over a year",
];

const FOLLOWER_BANDS = [
  "Under 5,000",
  "5,000 to 10,000",
  "10,000 to 50,000",
  "50,000 to 100,000",
  "Over 100,000",
];

const COUNTRIES = [
  "United States",
  "Canada",
  "Australia",
  "United Kingdom",
  "Other",
];

const inputStyle =
  "w-full px-4 py-3 bg-background border border-gray-700 rounded-lg text-sm text-text-primary placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-accent-purple";

const IdeasForm: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    igLink: "",
    creatingFor: "",
    followers: "",
    monthlyIncome: "",
    country: "",
  });
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
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
        body: JSON.stringify({ type: "ideas", fields: formData }),
      });
      if (!res.ok) {
        console.error(await res.text());
        throw new Error("Failed to submit");
      }
      navigate("/50-ideas-thank-you", { state: { submitted: true } });
    } catch (err) {
      console.error("Ideas form error:", err);
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
        placeholder="Email (where the list gets sent)"
        className={inputStyle}
      />
      <input
        name="igLink"
        value={formData.igLink}
        onChange={handleChange}
        required
        placeholder="Instagram profile link"
        className={inputStyle}
      />

      <select
        name="creatingFor"
        value={formData.creatingFor}
        onChange={handleChange}
        required
        className={`${inputStyle} appearance-none`}
      >
        <option value="" disabled>
          How long have you been creating?
        </option>
        {TIME_CREATING.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>

      <select
        name="followers"
        value={formData.followers}
        onChange={handleChange}
        required
        className={`${inputStyle} appearance-none`}
      >
        <option value="" disabled>
          Instagram followers
        </option>
        {FOLLOWER_BANDS.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>

      <input
        type="number"
        name="monthlyIncome"
        value={formData.monthlyIncome}
        onChange={handleChange}
        required
        min="0"
        placeholder="Monthly income from your content (USD)"
        className={inputStyle}
      />

      <select
        name="country"
        value={formData.country}
        onChange={handleChange}
        required
        className={`${inputStyle} appearance-none`}
      >
        <option value="" disabled>
          Country
        </option>
        {COUNTRIES.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>

      <button
        type="submit"
        className="btn-primary w-full inline-flex items-center justify-center"
        disabled={submitting}
      >
        {submitting ? (
          <>Sending...</>
        ) : (
          <>
            Get the 50 ideas <ArrowRight size={18} className="ml-2" />
          </>
        )}
      </button>

      <p className="text-text-muted text-xs text-center">
        Free, and yours to keep whether or not we end up working together. We
        read every application and reach out if there is a fit.
      </p>
    </form>
  );
};

export default IdeasForm;
