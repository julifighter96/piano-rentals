import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const pianos = [
  {
    name: "Steinway Model D",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    description: "Concert Grand Piano - Perfect for professional performances",
    price: "$450/month"
  },
  {
    name: "Yamaha C7X",
    image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334",
    description: "Semi-Concert Grand - Ideal for large venues",
    price: "$350/month"
  },
  {
    name: "Boston GP-156",
    image: "https://images.unsplash.com/photo-1501854140801-50d01698950b",
    description: "Performance Edition - Great for home practice",
    price: "$250/month"
  }
];

export const PianoShowcase = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-piano-gold font-medium">Our Collection</span>
          <h2 className="font-serif text-4xl font-bold mt-2">Featured Pianos</h2>
        </motion.div>
        <Carousel className="w-full max-w-5xl mx-auto">
          <CarouselContent>
            {pianos.map((piano, index) => (
              <CarouselItem key={index}>
                <Card className="border-none">
                  <CardContent className="p-6">
                    <div className="aspect-[16/9] relative mb-6">
                      <img
                        src={piano.image}
                        alt={piano.name}
                        className="rounded-lg object-cover w-full h-full"
                      />
                    </div>
                    <h3 className="font-serif text-2xl font-semibold mb-2">{piano.name}</h3>
                    <p className="text-muted-foreground mb-4">{piano.description}</p>
                    <p className="text-piano-gold font-semibold text-xl">{piano.price}</p>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};