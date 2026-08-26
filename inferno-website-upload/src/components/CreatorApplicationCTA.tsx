import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

// These option lists must match the single-select choices in the Airtable
// "Leads" table exactly, so submissions land in the right band with no
// stray options created.
const COUNTRIES = [
  "United States",
  "Canada",
  "United Kingdom",
  "Australia",
  "Other",
];

const FOLLOWER_BANDS = [
  "Under 5,000",
  "5,000 to 10,000",
  "10,000 to 50,000",
  "50,000 to 100,000",
  "Over 100,000",
];

const TIME_ON_PLATFORM = [
  "Less than 3 months",
  "3 to 6 months",
  "6 to 12 months",
  "Over a year",
];

const CreatorApplicationCTA: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    instagram: "",
    email: "",
    income: "",
    subs: "",
    invitedBy: "",
    telegram: "",
    country: "",
    monthsOnPlatform: "",
    instagramFollowers: "",
  });

  const [submitting, setSubmitting] = useState(false);

  const inputStyle =
    "w-full px-4 py-3 bg-background border border-gray-700 rounded-lg text-sm text-text-primary placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-accent-purple";

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const submitToAirtable = async () => {
    const res = await fetch("/.netlify/functions/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ type: "creator", fields: formData }),
    });

    if (!res.ok) {
      console.error(await res.text());
      throw new Error("Failed to submit application");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      await submitToAirtable();
      // Redirect to thank-you page instead of showing inline confirmation
      navigate("/thank-you");
    } catch (err) {
      console.error("Form submission error:", err);
      alert("Something went wrong. Please try again.");
      setSubmitting(false);
    }
  };

  return (
    <div className="relative overflow-hidden">
      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto bg-background-light rounded-2xl overflow-hidden shadow-2xl">
          <div className="p-8 sm:p-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-center">
              Creator Application
            </h2>
            <p className="text-text-secondary text-center mb-8 max-w-2xl mx-auto">
              For creators already earning and ready to grow. Tell us a little
              about you and we'll take it from there.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <input
                    name="instagram"
                    value={formData.instagram}
                    onChange={handleChange}
                    required
                    placeholder="Instagram Handle"
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
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <input
                    type="number"
                    name="income"
                    value={formData.income}
                    onChange={handleChange}
                    required
                    placeholder="Monthly income"
                    className={inputStyle}
                  />
                  <input
                    type="number"
                    name="subs"
                    value={formData.subs}
                    onChange={handleChange}
                    required
                    placeholder="New paid subscribers per day"
                    className={inputStyle}
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <input
                    name="invitedBy"
                    value={formData.invitedBy}
                    onChange={handleChange}
                    required
                    placeholder='Invited by (e.g. "Chat GPT", "Internet")'
                    className={inputStyle}
                  />
                  <input
                    name="telegram"
                    value={formData.telegram}
                    onChange={handleChange}
                    required
                    placeholder="Telegram Handle"
                    className={inputStyle}
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
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
                    {COUNTRIES.map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                  </select>
                  <select
                    name="instagramFollowers"
                    value={formData.instagramFollowers}
                    onChange={handleChange}
                    required
                    className={`${inputStyle} appearance-none`}
                  >
                    <option value="" disabled>
                      Instagram followers
                    </option>
                    {FOLLOWER_BANDS.map((b) => (
                      <option key={b} value={b}>
                        {b}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="grid grid-cols-1 gap-6">
                  <select
                    name="monthsOnPlatform"
                    value={formData.monthsOnPlatform}
                    onChange={handleChange}
                    required
                    className={`${inputStyle} appearance-none`}
                  >
                    <option value="" disabled>
                      Time on platform
                    </option>
                    {TIME_ON_PLATFORM.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="btn-primary inline-flex items-center"
                    disabled={submitting}
                  >
                    {submitting ? (
                      <>Processing...</>
                    ) : (
                      <>
                        Submit Application{" "}
                        <ArrowRight size={18} className="ml-2" />
                      </>
                    )}
                  </button>
                </div>
              </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatorApplicationCTA;
