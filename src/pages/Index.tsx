import Navbar from "@/components/Navbar";
import ScrollToTop from "@/components/ScrollToTop";
import LoadingScreen from "@/components/LoadingScreen";
import Hero from "@/sections/Hero";
import About from "@/sections/About";
import Stats from "@/sections/Stats";
import Experience from "@/sections/Experience";
import Skills from "@/sections/Skills";
import Services from "@/sections/Services";
import Projects from "@/sections/Projects";
import Certifications from "@/sections/Certifications";
import Testimonials from "@/sections/Testimonials";
import Contact from "@/sections/Contact";
import Footer from "@/sections/Footer";
import { useTheme } from "@/hooks/useTheme";

const Index = () => {
  const { isDark, toggle } = useTheme();

  return (
    <>
      <LoadingScreen />
      <Navbar isDark={isDark} toggleTheme={toggle} />
      <main>
        <Hero />
        <Stats />
        <About />
        <Experience />
        <Skills />
        <Services />
        <Projects />
        <Certifications />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default Index;
