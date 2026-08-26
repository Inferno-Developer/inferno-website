import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

// Must match the "Instagram Followers" single-select choices in the Airtable
// "Leads" table exactly, so submissions land in the right band.
const FOLLOWER_BANDS = [
  "Under 5,000",
  "5,000 to 10,000",
  "10,000 to 50,000",
  "50,000 to 100,000",
  "Over 100,000",
];

const CreatorApplicationCTA: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    instagram: "",
    email: "",
    income: "",
    instagramFollowers: "",
    telegram: "",
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
                {/* Mobile and tablet: single stacked column. Desktop (lg+):
                    two columns, the fuller layout. */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <input
                    name="instagram"
                    value={formData.instagram}
                    onChange={handleChange}
                    required
                    placeholder="Instagram handle"
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
                    type="number"
                    name="income"
                    value={formData.income}
                    onChange={handleChange}
                    required
                    min="0"
                    placeholder="Monthly income from content (USD)"
                    className={inputStyle}
                  />
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
                  <input
                    name="telegram"
                    value={formData.telegram}
                    onChange={handleChange}
                    placeholder="Telegram handle (optional)"
                    className={inputStyle}
                  />
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
