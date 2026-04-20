import SectionReveal from "@/components/SectionReveal";
import { motion } from "framer-motion";
import { Target, Cloud, Shield, Users } from "lucide-react";

const strengths = [
  { icon: Target, label: "Agile & Hybrid PM", desc: "Expert in Agile, Waterfall, and Hybrid methodologies" },
  { icon: Cloud, label: "Cloud Expertise", desc: "AWS & Azure migration and infrastructure" },
  { icon: Shield, label: "Security & Compliance", desc: "ISO 27001, CISM certified professional" },
  { icon: Users, label: "Stakeholder Mgmt", desc: "C-suite engagement and cross-functional leadership" },
];

const About = () => {
  return (
    <section id="about" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <SectionReveal>
          <div className="text-center mb-16">
            <p className="text-primary font-medium uppercase tracking-wide text-sm mb-3">About Me</p>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Driving <span className="gradient-text">Digital Excellence</span>
            </h2>
            <div className="w-20 h-1 gradient-bg mx-auto rounded-full" />
          </div>
        </SectionReveal>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <SectionReveal>
            <div className="space-y-6">
              <p className="text-muted-foreground text-lg leading-relaxed">
                Results-driven WordPress Developer and Team Leader with <span className="text-foreground font-semibold">9+ years of experience</span> 
                delivering <span className="text-foreground font-semibold">50+</span> scalable websites and eCommerce solutions across multiple industries. 
                Expertise in custom WordPress theme and plugin development, WooCommerce implementation, and headless CMS architecture.
              </p>

              <p className="text-muted-foreground text-lg leading-relaxed">
                Proven track record of improving website performance by up to <span className="text-foreground font-semibold">40–60%,</span> reducing page load time to under 2 seconds, and increasing user engagement and conversion rates by <span className="text-foreground font-semibold">20–30%</span> through optimized UX and performance strategies.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Experienced in leading cross-functional teams of <span className="text-foreground font-semibold">5–10 developers,</span> managing end-to-end project delivery, and consistently achieving <span className="text-foreground font-semibold">95%+ on-time delivery rate </span> in Agile environments. Strong focus on website security, code quality, and scalable architecture.
              </p>
               
            </div>
          </SectionReveal>

          <SectionReveal delay={0.2}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {strengths.map((s, i) => (
                <motion.div
                  key={s.label}
                  whileHover={{ y: -4, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="glass-card p-6 group"
                >
                  <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center mb-4 group-hover:shadow-lg transition-shadow">
                    <s.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="font-heading font-semibold text-foreground mb-2">{s.label}</h3>
                  <p className="text-sm text-muted-foreground">{s.desc}</p>
                </motion.div>
              ))}
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
};

export default About;
