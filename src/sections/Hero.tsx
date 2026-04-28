import { motion } from "framer-motion";
import { ArrowDown, Download, Mail } from "lucide-react";
import { useTypingAnimation } from "@/hooks/useTypingAnimation";

const Hero = () => {
  const typedText = useTypingAnimation({
    texts: [
      "WordPress Expert",
      "WordPress Team Leade",
      "FullStack Developer",
      "React Developer",
      "Node Developer",
    ],
    speed: 50,
    deleteSpeed: 50,
    pause: 2000,
  });

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse_glow" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse_glow" style={{ animationDelay: "1.5s" }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-1 text-center lg:text-left"
          >
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-primary font-medium mb-4 tracking-wide uppercase text-sm"
            >
              Welcome to my portfolio
            </motion.p>

            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6">
              <span className="text-foreground">Hi, I'm</span>
              <br />
              <span className="gradient-text">Santanu Kumar</span>
              <br />
              <span className="text-foreground">Sabata</span>
            </h1>

            <div className="h-8 md:h-10 mb-8">
              <span className="text-lg md:text-xl text-muted-foreground font-medium">
                {typedText}
                <span className="animate-pulse text-primary">|</span>
              </span>
            </div>

            <p className="text-muted-foreground text-base md:text-lg max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed">
              Results-driven WordPress Expert and Team Leader with 9+ years of experience delivering 500+ scalable websites and eCommerce solutions, specializing in custom themes, plugins, WooCommerce, and headless CMS.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl gradient-bg text-primary-foreground font-semibold shadow-lg hover:shadow-xl transition-shadow"
              >
                <Mail className="w-4 h-4" />
                Contact Me
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                href="Santanu_Sabata_WP_Resume.pdf"
                target="_blenk"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl border border-border bg-card/50 text-foreground font-semibold hover:bg-secondary transition-colors"
              >
                <Download className="w-4 h-4" />
                Download Resume
              </motion.a>
            </div>
          </motion.div>

          {/* Profile Image Placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="flex-shrink-0"
          >
            <div className="relative">
              <div className="w-64 h-64 md:w-[30rem] md:h-[40rem] rounded-none gradient-bg p-1" >
                <div className="w-full h-full rounded-full bg-card flex items-center justify-center">
                  <div
                    className="w-full h-full  overflow-hidden
                      backdrop-blur-xl
                      bg-white/80 dark:bg-white/5
                      border border-gray-200 dark:border-white/20
                      shadow-lg dark:shadow-none" >
                    <img
                      src="projectimg/founder-image.png"
                      alt="Santanu Sabata"
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 rounded-full glow-effect opacity-30 animate-pulse_glow" />
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-muted-foreground"
          >
            <ArrowDown className="w-5 h-5" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
