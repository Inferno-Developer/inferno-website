import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const AgencyApplicationCTA: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    agencyName: "",
    applicantName: "",
    modelsCount: "",
    email: "",
    telegram: "",
    info: "",
  });

  const [submitting, setSubmitting] = useState(false);

  const inputStyle =
    "w-full px-4 py-3 bg-background border border-gray-700 rounded-lg text-sm text-text-primary placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-accent-purple";

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const submitToAirtable = async () => {
    const res = await fetch("/.netlify/functions/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ type: "agency", fields: formData }),
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
              Apply as an Agency
            </h2>
            <p className="text-text-secondary text-center mb-8 max-w-2xl mx-auto">
              Share your agency’s info to join Inferno Agency’s network of elite
              partners.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <input
                    name="agencyName"
                    value={formData.agencyName}
                    onChange={handleChange}
                    required
                    placeholder="Agency Name"
                    className={inputStyle}
                  />
                  <input
                    name="applicantName"
                    value={formData.applicantName}
                    onChange={handleChange}
                    required
                    placeholder="Applicant Name"
                    className={inputStyle}
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <input
                    type="number"
                    name="modelsCount"
                    value={formData.modelsCount}
                    onChange={handleChange}
                    required
                    placeholder="Number of Models"
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
                <input
                  name="telegram"
                  value={formData.telegram}
                  onChange={handleChange}
                  required
                  placeholder="Telegram Handle"
                  className={inputStyle}
                />
                <textarea
                  name="info"
                  value={formData.info}
                  onChange={handleChange}
                  required
                  placeholder="What should we know before our call?"
                  rows={5}
                  className={`${inputStyle} resize-none`}
                />
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

export default AgencyApplicationCTA;
