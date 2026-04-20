import { useState } from "react";
import SectionReveal from "@/components/SectionReveal";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink } from "lucide-react";

const categories = ["All", "Photography / Portfolio", "Travel & Booking", "E-Commerce", "Real Estate"];

const projects = [
  {
    title: "Petal & Pup",
    category: "E-Commerce",
    url: "https://petalandpup.com.au/pages/app",
    desc: "Petal & Pup is a fast-growing women’s fashion brand known for its trendy, feminine styles and affordable pricing. ",
    stack: ["WordPress", "Woo-Commerce", "CI/CD", "JIRA", "Agile"],
    outcome: "Reduced processing time by 60%",
    pimage: "/projectimg/The-Petal-Pup-App-Let-s-Shop.png",
  },
  {
    title: "Sodashi",
    category: "E-Commerce",
    url: "https://sodashi.com.au/",
    desc: "Since 1999, our vegan and cruelty-free skincare has been hand-crafted in Western Australia, from plant powered ingredients.",
    stack: ["WordPress", "Woo-Commerce", "CI/CD", "JIRA", "Agile"],
    outcome: "99.99% uptime achieved",
    pimage: "/projectimg/Sodashi-Skincare-Natural-Vegan-Australian-Skincare.png",

  },
  {
    title: "Houseo Findya",
    category: "E-Commerce",
    url: "https://www.houseofindya.com/",
    desc: "House of Indya is a popular Indian fashion brand that blends traditional ethnic styles with modern, contemporary design.",
    stack: ["WordPress", "Woo-Commerce", "CI/CD", "JIRA", "Agile"],
    outcome: "40% increase in digital revenue",
    pimage: "/projectimg/Indian-Designer-Wear-Online-Fashion-Shopping-Site-for-Women.png",

  },
  {
    title: "Studiobgz",
    category: "Photography / Portfolio",
    url: "https://www.studiobgz.com/",  
    desc: "As visual storytellers we transform any concept into a unique visual language with a little bit of magic & fairy dust.",
    stack: ["WordPress", 'Elementar', 'Plugins',"CI/CD", "Agile","JIRA"],
    outcome: "Launched on time, under budget",
        pimage: "/projectimg/Graphic-Design-Studiobgz-com-סטודיו-בגאז׳.png",

  },
  {
    title: "Alingwen Photography",
    category: "Photography / Portfolio",
    url: "https://www.alingwenphotography.com/",
    desc: "Since 1999, our vegan and cruelty-free skincare has been hand-crafted in Western Australia, from plant powered ingredients.",
    stack: ["WordPress", "Woo-Commerce", "CI/CD", "JIRA", "Agile"],
    outcome: "99.99% uptime achieved",
    pimage: "/projectimg/Brisbane-Professional-Photographer-Alingwenphotography-Brisbane.png",

  },
  {
    title: "Houseo Findya",
    category: "Photography / Portfolio",
    url: "https://www.houseofindya.com/",
    desc: "House of Indya is a popular Indian fashion brand that blends traditional ethnic styles with modern, contemporary design.",
    stack: ["WordPress", "Woo-Commerce", "CI/CD", "JIRA", "Agile"],
    outcome: "40% increase in digital revenue",
    pimage: "/projectimg/Indian-Designer-Wear-Online-Fashion-Shopping-Site-for-Women.png",

  },
  {
    title: "Sobha Realty",
    category: "Real Estate",
    url: "https://sobharealty.com/",  
    desc: "At Sobha Realty, we understand that true excellence lies in the meticulous attention to detail and the artistry of craftsmanship. ",
    stack: ["WordPress", 'Elementar', 'Plugins',"CI/CD", "Agile","JIRA"],
    outcome: "Zero security breaches post-implementation",
    pimage: "/projectimg/Dubai’s-Leading-Luxury-Real-Estate-Developer-Sobha-Realty.png",

  },
  {
    title: "Right Condos",
    category: "Real Estate",
    url: "http://rightcondos.com",  
    desc: "We believe the right property exists for those who seek it. So we create a comprehensive online resource for the latest pre-construction condo developments in the Greater Toronto Area and beyond. ",
    stack: ["WordPress", 'Elementar', 'Plugins',"CI/CD", "Agile","JIRA"],
    outcome: "25% reduction in transaction failures",
    pimage: "/projectimg/Pre-Construction-Condos-Townhomes-Find-Your-Investment-Property-Right-Condos.png",

  },
  {
    title: "Rich land dubai",
    category: "Real Estate",
    url: "http://richlanddubai.com/",  
    desc: "At Rich Land Dubai, we understand that true excellence lies in the meticulous attention to detail and the artistry of craftsmanship. ",
    stack: ["WordPress", 'Elementar', 'Plugins',"CI/CD", "Agile","JIRA"],
    outcome: "Zero security breaches post-implementation",
    pimage: "/projectimg/Richland-Real-Estate.png",

  },
  {
    title: "Travel Zoo",
    category: "Travel & Booking",
    url: "https://www.travelzoo.com/",  
    desc: "At Rich Land Dubai, we understand that true excellence lies in the meticulous attention to detail and the artistry of craftsmanship. ",
    stack: ["WordPress", 'Elementar', 'Plugins',"CI/CD", "Agile","JIRA"],
    outcome: "Zero security breaches post-implementation",
    pimage: "/projectimg/Travelzoo-Deals-on-Hotels-Flights-Vacations-Cruises-More.png",

  },
  {
    title: "Travel Lojo",
    category: "Travel & Booking",
    url: "https://travelojo.in/",  
    desc: "At Rich Land Dubai, we understand that true excellence lies in the meticulous attention to detail and the artistry of craftsmanship. ",
    stack: ["WordPress", 'Elementar', 'Plugins',"CI/CD", "Agile","JIRA"],
    outcome: "Zero security breaches post-implementation",
    pimage: "/projectimg/Best-b2b-Travel-Agency-Travel-Ojo-Pvt-Ltd.png",

  },
  {
    title: "Amadi Journeys",
    category: "Travel & Booking",
    url: "https://amadijourneys.com/",  
    desc: "At Rich Land Dubai, we understand that true excellence lies in the meticulous attention to detail and the artistry of craftsmanship. ",
    stack: ["WordPress", 'Elementar', 'Plugins',"CI/CD", "Agile","JIRA"],
    outcome: "Zero security breaches post-implementation",
    pimage: "/projectimg/AMADI-Conscious-Luxury-Travel-Africa-Handcrafted-Journeys-Safaris.png",

  },
];

const Projects = () => {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="projects" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <SectionReveal>
          <div className="text-center mb-12">
            <p className="text-primary font-medium uppercase tracking-wide text-sm mb-3">Portfolio</p>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <div className="w-20 h-1 gradient-bg mx-auto rounded-full mb-10" />
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActive(cat)}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                    active === cat
                      ? "gradient-bg text-primary-foreground shadow-md"
                      : "bg-secondary text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </SectionReveal>

        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((p) => (
              <motion.div
                key={p.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  whileHover={{ y: -6 }}
                  className="glass-card p-6 h-full flex flex-col group"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                      {p.category}
                    </span>
                    <a target="_blenk" href= { p.url }><ExternalLink  className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" /></a>
                  </div>
                  <h3 className="font-heading text-lg font-bold text-foreground mb-2">{p.title}</h3>
                  <img
                    src={p.pimage}
                    alt="sparkbright"
                    className="w-full h-full object-cover object-center"
                  />
                  <p className="text-sm text-muted-foreground mb-4 flex-1">{p.desc}</p>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {p.stack.map((t) => (
                      <span key={t} className="text-xs px-2 py-1 rounded-md bg-secondary text-muted-foreground">
                        {t}
                      </span>
                    ))}
                  </div>
                  <p className="text-sm font-medium text-primary">📈 {p.outcome}</p>
                </motion.div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
