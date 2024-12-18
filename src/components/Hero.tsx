import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center hero-pattern overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/90" />
      <div className="container mx-auto px-4 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <span className="inline-block px-3 py-1 bg-piano-gold/10 text-piano-gold rounded-full text-sm font-medium mb-6">
            Premium Piano Rentals
          </span>
          <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            Experience Musical
            <br /> Excellence
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Discover our curated collection of world-class pianos available for
            rent, perfect for performances, practice, or special events.
          </p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="space-x-4"
          >
            <button className="bg-piano-black text-white px-8 py-3 rounded-full hover:bg-piano-black/90 transition-colors">
              Explore Collection
            </button>
            <button className="border border-piano-black px-8 py-3 rounded-full hover:bg-piano-black/5 transition-colors">
              Contact Us
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};