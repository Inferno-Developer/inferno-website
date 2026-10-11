import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

// Select option values below MUST match the existing single-select choice names
// in the Airtable "Leads" table exactly (Instagram Followers, Monthly Earnings
// Band, Time on Platform), so submissions land in the right band instead of
// creating duplicate options. "In Vegas" was created for this form. Source is
// NOT set here: the "Vegas Shoot Source Tag" automation stamps
// Source = "Vegas October Shoot" off the "In Vegas" field. Field-ID mapping is
// in netlify/functions/submit.js (type: "vegas").
const IN_VEGAS = ["Yes", "No, but I can travel", "No"];

const CREATING_FOR = [
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

const INCOME_BANDS = [
  "Under $2,000",
  "$2,000 to $4,000",
  "$4,000 to $10,000",
  "$10,000 to $20,000",
  "Over $20,000",
];

// Identical to the input styling used by the playbook and creator forms, so
// this form matches the rest of the site exactly.
const inputStyle =
  "w-full px-4 py-3 bg-background border border-gray-700 rounded-lg text-sm text-text-primary placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-accent-purple";

const VegasForm: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    instagram: "",
    inVegas: "",
    creatingFor: "",
    followers: "",
    monthlyIncome: "",
    goal: "",
    telegram: "",
  });
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
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
        body: JSON.stringify({ type: "vegas", fields: formData }),
      });
      if (!res.ok) {
        console.error(await res.text());
        throw new Error("Failed to submit");
      }
      // Redirect to the confirmation page. The `submitted` flag gates the
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
        name="firstName"
        value={formData.firstName}
        onChange={handleChange}
        required
        placeholder="First name"
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
        placeholder="Instagram handle"
        className={inputStyle}
      />

      <select
        name="inVegas"
        value={formData.inVegas}
        onChange={handleChange}
        required
        className={`${inputStyle} appearance-none`}
      >
        <option value="" disabled>
          Can you be in Las Vegas Oct 21 to 24?
        </option>
        {IN_VEGAS.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>

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
        {CREATING_FOR.map((o) => (
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

      <select
        name="monthlyIncome"
        value={formData.monthlyIncome}
        onChange={handleChange}
        required
        className={`${inputStyle} appearance-none`}
      >
        <option value="" disabled>
          Monthly income from your content
        </option>
        {INCOME_BANDS.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>

      <textarea
        name="goal"
        value={formData.goal}
        onChange={handleChange}
        required
        rows={3}
        placeholder="What would you want out of the day?"
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
            Apply for a slot <ArrowRight size={18} className="ml-2" />
          </>
        )}
      </button>

      <p className="text-text-muted text-xs text-center">
        This is an application to qualify for one of the free shoot slots.
        Submitting does not reserve a slot or guarantee a shoot. We select
        creators from everyone who applies and reach out if it is a fit.
      </p>
    </form>
  );
};

export default VegasForm;
