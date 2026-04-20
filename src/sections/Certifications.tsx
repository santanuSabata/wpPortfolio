import SectionReveal from "@/components/SectionReveal";
import { motion } from "framer-motion";
import { Award, CheckCircle } from "lucide-react";

const certs = [
  { name: "WDC – WordPress Developer Certification", issuer: "Udemy", highlight: true },
  { name: "WATD – Advanced WordPress Theme Developmen", issuer: "Udemy", highlight: true },
  { name: "WDC WooCommerce Development Certification", issuer: "Udemy", highlight: false },
  { name: "WSPO WordPress Security & Performance Optimization", issuer: "Udemy", highlight: true },
  { name: "Advanced WordPress Debugging Certificat", issuer: "W VIP Learn ", highlight: true },
  { name: "Enterprise WordPress Security Certificate", issuer: "W VIP Learn ", highlight: true },
];

const achievements = [
  "Delivered 500+ WordPress and WooCommerce projects for global clients, maintaining a 95%+ on-time delivery rate.",
  "Improved website performance by 40–60%, reducing average page load time to under 2 seconds",
  "Increased eCommerce conversion rates by 20–30% through UX optimization and performance enhancements",
  "Led and mentored a team of 5–10 developers, improving overall productivity and code quality by 30%",
  "Successfully handled multiple concurrent projects (5–8 at a time) without compromising delivery timelines or quality.",
  "Reduced website security vulnerabilities by implementing best practices, resulting in zero major security incidents.",

];

const Certifications = () => {
  return (
    <section id="certifications" className="section-padding bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <SectionReveal>
          <div className="text-center mb-16">
            <p className="text-primary font-medium uppercase tracking-wide text-sm mb-3">Credentials</p>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Certifications & <span className="gradient-text">Achievements</span>
            </h2>
            <div className="w-20 h-1 gradient-bg mx-auto rounded-full" />
          </div>
        </SectionReveal>

        <div className="grid lg:grid-cols-2 gap-12">
          <SectionReveal>
            <h3 className="font-heading text-xl font-bold text-foreground mb-6 flex items-center gap-2">
              <Award className="w-5 h-5 text-primary" /> Certifications
            </h3>
            <div className="space-y-4">
              {certs.map((c, i) => (
                <motion.div
                  key={c.name}
                  whileHover={{ x: 4 }}
                  className={`glass-card p-5 flex items-start gap-4 ${c.highlight ? "ring-1 ring-primary/30" : ""}`}
                >
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${c.highlight ? "gradient-bg" : "bg-secondary"}`}>
                    <Award className={`w-5 h-5 ${c.highlight ? "text-primary-foreground" : "text-muted-foreground"}`} />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{c.name}</p>
                    <p className="text-sm text-muted-foreground">{c.issuer}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </SectionReveal>

          <SectionReveal delay={0.2}>
            <h3 className="font-heading text-xl font-bold text-foreground mb-6 flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-primary" /> Key Achievements
            </h3>
            <div className="space-y-4">
              {achievements.map((a) => (
                <motion.div
                  key={a}
                  whileHover={{ x: 4 }}
                  className="glass-card p-5 flex items-center gap-4"
                >
                  <div className="w-2 h-2 rounded-full gradient-bg flex-shrink-0" />
                  <p className="text-foreground font-medium">{a}</p>
                </motion.div>
              ))}
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
