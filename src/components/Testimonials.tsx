import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Concert Pianist",
    content: "The quality of their pianos is exceptional. The Steinway I rented was perfectly maintained and delivered right on time.",
    rating: 5
  },
  {
    name: "Michael Chen",
    role: "Music Teacher",
    content: "Outstanding service! My students love practicing on these beautiful instruments. The flexible rental terms are a huge plus.",
    rating: 5
  },
  {
    name: "Emily Williams",
    role: "Event Planner",
    content: "They made our charity gala unforgettable. The piano was the centerpiece of the evening, and the service was impeccable.",
    rating: 5
  }
];

export const Testimonials = () => {
  return (
    <section className="py-24 bg-piano-cream">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-piano-gold font-medium">Testimonials</span>
          <h2 className="font-serif text-4xl font-bold mt-2">What Our Clients Say</h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-6 rounded-2xl shadow-sm"
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-piano-gold text-piano-gold" />
                ))}
              </div>
              <p className="text-gray-700 mb-4">{testimonial.content}</p>
              <div>
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};