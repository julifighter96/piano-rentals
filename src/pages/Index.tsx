import { motion } from "framer-motion";
import { Hero } from "../components/Hero";
import { Features } from "../components/Features";
import { PianoShowcase } from "../components/PianoShowcase";
import { Testimonials } from "../components/Testimonials";
import { Pricing } from "../components/Pricing";
import { Contact } from "../components/Contact";

const Index = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Hero />
      <Features />
      <PianoShowcase />
      <Testimonials />
      <Contact />
    </motion.div>
  );
};

export default Index;