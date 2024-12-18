import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sophie Weber",
    role: "Konzertpianistin",
    content: "Die Qualität ihrer Klaviere ist außergewöhnlich. Der gemietete Steinway war perfekt gewartet und wurde pünktlich geliefert. Ein Service der Extraklasse!",
    rating: 5
  },
  {
    name: "Michael Schmidt",
    role: "Musiklehrer",
    content: "Hervorragender Service! Meine Schüler lieben es, auf diesen wunderschönen Instrumenten zu üben. Die flexiblen Mietkonditionen sind ein großer Vorteil für unsere Musikschule.",
    rating: 5
  },
  {
    name: "Elena Wagner",
    role: "Veranstaltungsplanerin",
    content: "Sie haben unseren Wohltätigkeitsball unvergesslich gemacht. Das Klavier war der Mittelpunkt des Abends, und der Service war tadellos. Besonders die professionelle Stimmung vor Ort hat überzeugt.",
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
     <span className="text-piano-gold font-medium">Referenzen</span>
     <h2 className="font-serif text-4xl font-bold mt-2">Das sagen unsere Kunden</h2>
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