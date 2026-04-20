import SectionReveal from "@/components/SectionReveal";
import { motion } from "framer-motion";
import { Rocket, RefreshCw, Cloud, ShieldCheck } from "lucide-react";

const services = [
  {
    icon: Rocket,
    title: "Custom WordPress Theme Development",
    desc: "UI/UX Optimization for WordPress Sites , Landing Page Design & Development, Website Redesign & Revamp",
  },
  {
    icon: RefreshCw,
    title: "Custom Plugin Development",
    desc: "Leading organization-wide digital initiatives that modernize processes, enhance customer experience, and drive operational efficiency.",
  },
  {
    icon: Cloud,
    title: "WordPress Website Development (from scratch)",
    desc: "Strategic planning and execution of cloud migration programs on AWS and Azure, ensuring minimal disruption and maximum ROI.",
  },
  {
    icon: ShieldCheck,
    title: "Headless WordPress (React / API-based)",
    desc: "Establishing robust GRC frameworks including ISO 27001, CISM compliance, and enterprise risk management strategies.",
  },
];

const Services = () => {
  return (
    <section id="services" className="section-padding bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <SectionReveal>
          <div className="text-center mb-16">
            <p className="text-primary font-medium uppercase tracking-wide text-sm mb-3">What I Offer</p>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Professional <span className="gradient-text">Services</span>
            </h2>
            <div className="w-20 h-1 gradient-bg mx-auto rounded-full" />
          </div>
        </SectionReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <SectionReveal key={s.title} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="glass-card p-8 text-center group h-full"
              >
                <div className="w-16 h-16 rounded-2xl gradient-bg flex items-center justify-center mx-auto mb-6 group-hover:shadow-lg group-hover:shadow-primary/20 transition-shadow">
                  <s.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="font-heading text-lg font-bold text-foreground mb-3">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </motion.div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
