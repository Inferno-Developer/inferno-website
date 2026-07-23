import React from "react";
import { MessageCircle, Camera, Clock } from "lucide-react";

interface StatCardProps {
  icon: React.ReactNode;
  value: string;
  label: string;
}

const StatCard: React.FC<StatCardProps> = ({ icon, value, label }) => {
  return (
    <div className="bg-background-light rounded-lg p-6 text-center flex flex-col items-center transition-transform hover:scale-105">
      <div className="w-16 h-16 rounded-full gradient-bg flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-3xl md:text-4xl font-bold mb-2 gradient-text">
        {value}
      </h3>
      <p className="text-text-secondary">{label}</p>
    </div>
  );
};

const ResultsSection: React.FC = () => {
  return (
    <section id="results" className="section bg-background-dark">
      <div className="container-custom">
        <div className="section-title">
          <h2 className="gradient-text inline-block">How We Work</h2>
          <p className="section-subtitle">
            Systems that give you your time back and a real plan for growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          <StatCard
            icon={<MessageCircle size={32} className="text-white" />}
            value="24/7"
            label="Fan & Message Coverage"
          />
          <StatCard
            icon={<Camera size={32} className="text-white" />}
            value="In-House"
            label="Las Vegas Production"
          />
          <StatCard
            icon={<Clock size={32} className="text-white" />}
            value="20+ hrs"
            label="Saved Weekly Per Creator"
          />
        </div>

        <div className="bg-background-light rounded-xl p-8 sm:p-12">
          <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center">
            How We Deliver Results
          </h3>

          <div className="space-y-12">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="flex-1 relative">
                <div className="w-12 h-12 rounded-full gradient-bg flex items-center justify-center text-white font-bold text-xl absolute -left-2 -top-2">
                  1
                </div>
                <div className="bg-background p-6 rounded-lg mt-4 ml-4">
                  <h4 className="text-xl font-semibold mb-3">
                    Strategic Analysis
                  </h4>
                  <p className="text-text-secondary">
                    We conduct a comprehensive audit of your current content,
                    audience demographics, engagement patterns, and your
                    content and offers to identify growth opportunities.
                  </p>
                </div>
              </div>

              <div className="flex-1 relative">
                <div className="w-12 h-12 rounded-full gradient-bg flex items-center justify-center text-white font-bold text-xl absolute -left-2 -top-2">
                  2
                </div>
                <div className="bg-background p-6 rounded-lg mt-4 ml-4">
                  <h4 className="text-xl font-semibold mb-3">
                    Custom Growth Plan
                  </h4>
                  <p className="text-text-secondary">
                    Based on our analysis, we develop a tailored strategy that
                    aligns with your brand and content style to grow both your
                    audience and your page.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-8">
              <div className="flex-1 relative">
                <div className="w-12 h-12 rounded-full gradient-bg flex items-center justify-center text-white font-bold text-xl absolute -left-2 -top-2">
                  3
                </div>
                <div className="bg-background p-6 rounded-lg mt-4 ml-4">
                  <h4 className="text-xl font-semibold mb-3">
                    Implementation & Management
                  </h4>
                  <p className="text-text-secondary">
                    Our team handles all business operations, from content
                    scheduling and fan engagement to marketing campaigns and
                    cross-platform promotion strategies.
                  </p>
                </div>
              </div>

              <div className="flex-1 relative">
                <div className="w-12 h-12 rounded-full gradient-bg flex items-center justify-center text-white font-bold text-xl absolute -left-2 -top-2">
                  4
                </div>
                <div className="bg-background p-6 rounded-lg mt-4 ml-4">
                  <h4 className="text-xl font-semibold mb-3">
                    Continuous Optimization
                  </h4>
                  <p className="text-text-secondary">
                    We constantly monitor performance metrics, gather subscriber
                    feedback, and adapt our strategies to ensure sustained
                    growth and a business that runs without you doing everything.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
