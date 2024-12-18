import { motion } from "framer-motion";
import { Music, Clock, Trophy, Heart } from "lucide-react";

const features = [
  {
    icon: Music,
    title: "Premium Auswahl",
    description: "Kuratierte Sammlung weltbekannter Klaviermarken",
  },
  {
    icon: Clock,
    title: "Flexible Konditionen",
    description: "Tägliche, wöchentliche und monatliche Mietoptionen",
  },
  {
    icon: Trophy,
    title: "Experten-Service",
    description: "Professionelle Stimmung und Wartung inklusive",
  },
  {
    icon: Heart,
    title: "Premium Transport",
    description: "Sorgfältiger Transport und Aufbau an Ihrem Wunschort",
  },
];

export const Features = () => {
  return (
    <section className="py-24 bg-piano-cream">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <motion.span 
            whileHover={{ scale: 1.05 }}
            className="text-piano-gold font-medium"
          >
            Warum Uns Wählen
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-serif text-4xl font-bold mt-2"
          >
            Die Perfekte Klavier-Erfahrung
          </motion.h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
              transition={{ delay: index * 0.1 }}
              className="p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all cursor-pointer"
            >
              <feature.icon className="w-12 h-12 text-piano-gold mb-4" />
              <h3 className="font-serif text-xl font-semibold mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};