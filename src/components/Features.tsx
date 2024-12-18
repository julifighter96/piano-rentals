import { motion } from "framer-motion";
import { Music, Clock, Trophy, Heart } from "lucide-react";

const features = [
  {
    icon: Music,
    title: "Premium Selection",
    description: "Curated collection of world-renowned piano brands",
  },
  {
    icon: Clock,
    title: "Flexible Terms",
    description: "Daily, weekly, and monthly rental options available",
  },
  {
    icon: Trophy,
    title: "Expert Service",
    description: "Professional tuning and maintenance included",
  },
  {
    icon: Heart,
    title: "White Glove Delivery",
    description: "Careful transportation and setup at your location",
  },
];

export const Features = () => {
  return (
    <section className="py-24 bg-piano-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-piano-gold font-medium">Why Choose Us</span>
          <h2 className="font-serif text-4xl font-bold mt-2">
            The Perfect Piano Experience
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow"
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