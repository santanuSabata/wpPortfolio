import SectionReveal from "@/components/SectionReveal";
import { motion } from "framer-motion";
import { Briefcase, Calendar, LocateFixed } from "lucide-react";

const experiences = [
  {
    title: "Team Leader – WordPress",
    company: "iAmaze Consultant",
    period: "2023 – Present",
    location: "Gurugram,India",
    achievements: [
      "Shipped 500+ WordPress & WooCommerce projects end-to-end, holding a 95%+ on-time delivery rate across all concurrent workloads (5–8 projects simultaneously).",
      "Drove a 40–60% improvement in page load performance across client sites through server-side caching, asset optimisation, and WP Rocket/CDN configuration — average load time reduced to under 2 seconds.",
      "Engineered 50+ custom themes and plugins; zero critical post-launch defects in the last 18 months.",
      "Executed 500+ code reviews, reducing team bug rate by 25% and establishing coding standards adopted across the entire WordPress practice.",
      "Grew team capability from 4 to 12 developers; reduced average onboarding time by 35% through structured mentoring and internal documentation."
    ],
  },
  {
    title: "Sr. WordPress Developer ",
    company: "Mpower It Services",
    period: "2020 – 2023",
    location: "Ahmedabad,India",
    achievements: [
      "Delivered 15+ major product launches on schedule, maintaining a zero-overrun record over the engagement.",
      "Optimised site performance by up to 30% through image compression pipelines, lazy-loading, and database query refactoring.",
      "Reduced bugs and post-launch issues by 25% via structured peer review and pre-deployment testing checklists.",
      "Mentored junior developers; team productivity grew 20% within two quarters of implementing knowledge-sharing sessions.",
      "Enhanced website security posture for all projects, cutting vulnerability exposure and downtime incidents by 20–30%.",
    ],
  },
  {
    title: "Web Developer - AML Compliance",
    company: "Online Infocom Pvt. Ltd",
    period: "2013 – 2020",
    location: "Ahmedabad,India",
    achievements: [
      "Develop, customize, and maintain responsive websites using WordPress, HTML, CSS, JavaScript, and PHP.",
      "Design and implement custom themes and plugins based on client and business requirements.",
      "Optimize website performance, speed, and scalability for better user experience and SEO.",
      "Ensure website security by implementing best practices, regular updates, and vulnerability fixes.",
      "Conduct code reviews and maintain clean, efficient, and well-documented code.",
      "Collaborate with designers, project managers, and backend teams to deliver seamless digital solutions."
    ],
  },
  {
    title: "Senior Software Engineer",
    company: "Compaq Software Pvt. Ltd",
    location: "Surat,India",
    period: "2008 – 2013",
    achievements: [
    "Installed, configured, and maintained enterprise desktop applications.",
    "Resolved 98% of technical issues on first contact.",
    "Implemented system optimizations improving performance by 20%",
    "Conducted user training sessions to improve system adoption.",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="section-padding bg-secondary/30">
      <div className="max-w-4xl mx-auto">
        <SectionReveal>
          <div className="text-center mb-16">
            <p className="text-primary font-medium uppercase tracking-wide text-sm mb-3">Career Journey</p>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Professional <span className="gradient-text">Experience</span>
            </h2>
            <div className="w-20 h-1 gradient-bg mx-auto rounded-full" />
          </div>
        </SectionReveal>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

          {experiences.map((exp, i) => (
            <SectionReveal key={i} delay={i * 0.15}>
              <div className={`relative flex items-start mb-12 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 rounded-full gradient-bg -translate-x-1/2 mt-6 z-10 ring-4 ring-background" />

                {/* Card */}
                <motion.div
                  whileHover={{ y: -2 }}
                  className={`ml-16 md:ml-0 md:w-[calc(50%-2rem)] glass-card p-6 ${
                    i % 2 === 0 ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"
                  }`}
                >
                  <div className="flex items-center gap-2 text-primary text-sm font-medium mb-2">
                    <Calendar className="w-4 h-4" />
                    {exp.period}
                  </div>
                  <h3 className="font-heading text-lg font-bold text-foreground mb-1">{exp.title}</h3>
                  <p className="text-muted-foreground text-sm  flex items-center gap-1">
                    <Briefcase className="w-3.5 h-3.5" />
                    {exp.company}
                  </p>
                  <p className="text-muted-foreground text-sm mb-4 flex items-center gap-1">
                    <LocateFixed className="w-3.5 h-3.5" />
                    {exp.location}
                  </p>
                  <ul className="space-y-2">
                    {exp.achievements.map((ach, j) => (
                      <li key={j} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full gradient-bg mt-1.5 flex-shrink-0" />
                        {ach}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
