import React from 'react';
import { 
  BarChart3, 
  CreditCard, 
  TrendingUp, 
  MessageCircle, 
  Camera, 
  Shield, 
  Calendar, 
  Settings 
} from 'lucide-react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => {
  return (
    <div className="card group">
      <div className="mb-4 text-accent-purple group-hover:text-white transition-colors">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3 group-hover:text-accent-purple transition-colors">{title}</h3>
      <p className="text-text-secondary">{description}</p>
    </div>
  );
};

const services = [
  {
    icon: <BarChart3 size={32} />,
    title: "Growth Strategy",
    description: "Custom growth strategies tailored to your niche, content style, and audience demographics."
  },
  {
    icon: <CreditCard size={32} />,
    title: "Revenue Optimization",
    description: "Strategic pricing, tiered subscriptions, and premium content planning to maximize earnings."
  },
  {
    icon: <TrendingUp size={32} />,
    title: "Marketing & Promotion",
    description: "Cross-platform promotion, collaborations, and targeted campaigns to expand your audience."
  },
  {
    icon: <MessageCircle size={32} />,
    title: "Engagement Management",
    description: "Professional handling of DMs, comments, and fan interactions to boost retention rates."
  },
  {
    icon: <Camera size={32} />,
    title: "Content Strategy",
    description: "Expert guidance on content planning, themes, and production to captivate your audience."
  },
  {
    icon: <Shield size={32} />,
    title: "Brand Protection",
    description: "Copyright monitoring, content protection, and security measures to safeguard your business."
  },
  {
    icon: <Calendar size={32} />,
    title: "Scheduling & Planning",
    description: "Content calendars, posting schedules, and promotional event planning for consistent growth."
  },
  {
    icon: <Settings size={32} />,
    title: "Technical Support",
    description: "Platform optimization, profile enhancement, and technical troubleshooting for seamless operation."
  }
];

const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="section bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-accent-purple/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-accent-magenta/5 rounded-full blur-3xl"></div>
      
      <div className="container-custom relative z-10">
        <div className="section-title">
          <h2 className="gradient-text inline-block">Our Services</h2>
          <p className="section-subtitle">
            We provide comprehensive management services to help creators thrive and maximize their potential
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;