import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const pianos = [
  {
    name: "Steinway & Sons Modell D-274",
    image: "/pianos/steinway-d.jpg",
    description: "Konzertflügel - Der Maßstab für professionelle Konzertaufführungen",
    price: "450€ pro Tag"
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
          <span className="text-piano-gold font-medium">Unsere Kollektion</span>
          <h2 className="font-serif text-4xl font-bold mt-2">Pianos</h2>
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