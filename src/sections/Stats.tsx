import SectionReveal from "@/components/SectionReveal";
import { motion } from "framer-motion";

const stats = [
  { value: "15+", label: "Years Experience" },
  { value: "500+", label: "Projects Delivered" },
  { value: "10+", label: "Team Members Led" },
  { value: "$5M+", label: "Budgets Managed" },
];

const Stats = () => {
  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <SectionReveal key={s.label} delay={i * 0.1}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="glass-card p-8 text-center"
              >
                <div className="font-heading text-4xl md:text-5xl font-bold gradient-text mb-2">
                  {s.value}
                </div>
                <p className="text-sm text-muted-foreground font-medium">{s.label}</p>
              </motion.div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
