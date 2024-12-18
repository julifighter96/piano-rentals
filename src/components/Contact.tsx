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
          <span className="text-piano-gold font-medium">Get in Touch</span>
          <h2 className="font-serif text-4xl font-bold mt-2 mb-8">
            Start Your Musical Journey
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="flex flex-col items-center">
              <Phone className="w-8 h-8 text-piano-gold mb-4" />
              <h3 className="font-semibold mb-2">Call Us</h3>
              <p className="text-gray-400">+1 (555) 123-4567</p>
            </div>
            <div className="flex flex-col items-center">
              <Mail className="w-8 h-8 text-piano-gold mb-4" />
              <h3 className="font-semibold mb-2">Email Us</h3>
              <p className="text-gray-400">contact@pianorentals.com</p>
            </div>
            <div className="flex flex-col items-center">
              <MapPin className="w-8 h-8 text-piano-gold mb-4" />
              <h3 className="font-semibold mb-2">Visit Us</h3>
              <p className="text-gray-400">123 Music Street, NY 10001</p>
            </div>
          </div>
          <button className="bg-piano-gold text-piano-black px-8 py-3 rounded-full hover:bg-piano-gold/90 transition-colors">
            Schedule a Consultation
          </button>
        </motion.div>
      </div>
    </section>
  );
};