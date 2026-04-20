import SectionReveal from "@/components/SectionReveal";
import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "WordPress & WP Dev",
    skills: [
      { name: "Custom Theme", level: 95 },
      { name: "Plugins", level: 90 },
      { name: "WooCommerce", level: 92 },
      { name: "Headless CMS", level: 98 },
      { name: "Elementor", level: 91 },
      { name: "Gutenberg", level: 93 },
      { name: "WPBakery", level: 95 },
    ],
  },
  {
    title: "Performance",
    skills: [
      { name: "WP Rocket", level: 85 },
      { name: "GTmetrix", level: 80 },
      { name: "CDN", level: 82 },
      { name: "Lazy Load", level: 86 },
      { name: "DB Optimisation", level: 89 },
      { name: "Sub-2s Load Times", level: 90 },
      { name: "Lazy Load", level: 78 },
    ],
  },
  {
    title: "Security & Compliance",
    skills: [
      { name: "Wordfence", level: 90 },
      { name: "Role Hardening", level: 88 },
      { name: "Vulnerability Auditing", level: 85 },
      { name: "Zero Incidents Record", level: 82 },
      { name: "SSL", level: 89 },
      { name: "Cross-Site Request Forgery (CSRF)", level: 95 },
      { name: "SQL Injection", level: 89 },
      { name: "Git version control for safe deployments", level: 98 },

    ],
  },
  {
    title: "Front-End",
    skills: [
      { name: "JavaScript", level: 95 },
      { name: "TypeScript", level: 85 },
      { name: "React.js", level: 90 },
      { name: "Angular", level: 75 },
      { name: "HTML5", level: 91 },
      { name: "CSS3", level: 89 },
      { name: "Tailwind CSS", level: 85 },
      { name: "Bootstrap", level: 82 },
      
    ],
  },
  {
    title: "Project / Team Mgmt.",
    skills: [
      { name: "Agile / Scrum", level: 95 },
      { name: "JIRA", level: 85 },
      { name: "Sprint Planning", level: 90 },
      { name: "Cross-functional Team Leadership", level: 75 },
      
      
    ],
  },
  {
    title: "AI Tools",
    skills: [
      { name: "ChatGPT", level: 95 },
      { name: "Claude", level: 85 },
      { name: "Gemini", level: 90 },
      { name: "Copilot", level: 75 },
      
      
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <SectionReveal>
          <div className="text-center mb-16">
            <p className="text-primary font-medium uppercase tracking-wide text-sm mb-3">Expertise</p>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Skills & <span className="gradient-text">Competencies</span>
            </h2>
            <div className="w-20 h-1 gradient-bg mx-auto rounded-full" />
          </div>
        </SectionReveal>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((cat, i) => (
            <SectionReveal key={cat.title} delay={i * 0.1}>
              <div className="glass-card p-6 md:p-8">
                <h3 className="font-heading text-xl font-bold text-foreground mb-6">{cat.title}</h3>
                <div className="space-y-5">
                  {cat.skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium text-foreground">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-secondary rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.2, ease: "easeOut" }}
                          className="h-full gradient-bg rounded-full"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
