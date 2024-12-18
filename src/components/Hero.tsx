import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center hero-pattern overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/90" />
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="container mx-auto px-4 z-10"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center"
        >
          <motion.span 
            whileHover={{ scale: 1.05 }}
            className="inline-block px-3 py-1 bg-piano-gold/10 text-piano-gold rounded-full text-sm font-medium mb-6"
          >
            Premium Piano Rentals
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-serif text-5xl md:text-7xl font-bold mb-6 tracking-tight"
          >
            Experience Musical
            <br /> Excellence
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8"
          >
            Entdecken Sie unsere kuratierte Sammlung von Weltklasse-Klavieren für Vermietung, 
            professionelle Stimmung und sicheren Transport.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="space-x-4"
          >
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-piano-black text-white px-8 py-3 rounded-full hover:bg-piano-black/90 transition-colors"
            >
              Kollektion Entdecken
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border border-piano-black px-8 py-3 rounded-full hover:bg-piano-black/5 transition-colors"
            >
              Kontakt
            </motion.button>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};