import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";

export const Contact = () => {
  return (
    <section className="py-24 bg-piano-black text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center"
        >
          <span className="text-piano-gold font-medium">Kontaktieren Sie uns</span>
          <h2 className="font-serif text-4xl font-bold mt-2 mb-8">
            Starten Sie Ihre musikalische Reise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="flex flex-col items-center">
              <Phone className="w-8 h-8 text-piano-gold mb-4" />
              <h3 className="font-semibold mb-2">Rufen Sie uns an</h3>
              <p className="text-gray-400">+49 (0) 30 123 456 78</p>
            </div>
            <div className="flex flex-col items-center">
              <Mail className="w-8 h-8 text-piano-gold mb-4" />
              <h3 className="font-semibold mb-2">Schreiben Sie uns</h3>
              <p className="text-gray-400">kontakt@klavierverleih.de</p>
            </div>
            <div className="flex flex-col items-center">
              <MapPin className="w-8 h-8 text-piano-gold mb-4" />
              <h3 className="font-semibold mb-2">Besuchen Sie uns</h3>
              <p className="text-gray-400">Musikstraße 123, 10115 Berlin</p>
            </div>
          </div>
          <button className="bg-piano-gold text-piano-black px-8 py-3 rounded-full hover:bg-piano-gold/90 transition-colors">
            Termin vereinbaren
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;