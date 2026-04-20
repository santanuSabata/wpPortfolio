import SectionReveal from "@/components/SectionReveal";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "James Chen",
    role: "CTO, Tech Corporation",
    text: "Santanu's leadership in our cloud migration project was exceptional. He managed a complex multi-phase program with clarity and precision, delivering ahead of schedule.",
  },
  {
    name: "Priya Sharma",
    role: "Director of IT, Government Agency",
    text: "Working with Santanu on the e-Governance platform was a game-changer. His ability to navigate stakeholder dynamics while maintaining technical excellence is remarkable.",
  },
  {
    name: "Michael Brooks",
    role: "VP Engineering, FinTech Startup",
    text: "Santanu brought order to chaos. His structured approach to program management transformed our delivery capabilities and improved our team's velocity by 30%.",
  },
];

const Testimonials = () => {
  return (
    <section className="section-padding">
      <div className="max-w-7xl mx-auto">
        <SectionReveal>
          <div className="text-center mb-16">
            <p className="text-primary font-medium uppercase tracking-wide text-sm mb-3">Testimonials</p>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              What People <span className="gradient-text">Say</span>
            </h2>
            <div className="w-20 h-1 gradient-bg mx-auto rounded-full" />
          </div>
        </SectionReveal>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <SectionReveal key={t.name} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -4 }}
                className="glass-card p-8 h-full flex flex-col"
              >
                <Quote className="w-8 h-8 text-primary/30 mb-4" />
                <p className="text-muted-foreground leading-relaxed flex-1 mb-6">"{t.text}"</p>
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="font-semibold text-foreground">{t.name}</p>
                <p className="text-sm text-muted-foreground">{t.role}</p>
              </motion.div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
