import { motion } from "framer-motion";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Basic",
    price: "$199",
    period: "per month",
    features: [
      "Upright Piano",
      "Monthly Tuning",
      "Free Delivery",
      "Basic Insurance",
      "24/7 Support"
    ]
  },
  {
    name: "Professional",
    price: "$349",
    period: "per month",
    features: [
      "Baby Grand Piano",
      "Bi-weekly Tuning",
      "Free Delivery & Setup",
      "Full Insurance Coverage",
      "Priority Support",
      "Climate Control System"
    ],
    popular: true
  },
  {
    name: "Concert",
    price: "$499",
    period: "per month",
    features: [
      "Concert Grand Piano",
      "Weekly Tuning",
      "White Glove Delivery",
      "Premium Insurance",
      "Dedicated Support",
      "Climate Control System",
      "Backup Piano Available"
    ]
  }
];

export const Pricing = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-piano-gold font-medium">Pricing</span>
          <h2 className="font-serif text-4xl font-bold mt-2">Choose Your Plan</h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`p-8 rounded-2xl ${
                plan.popular
                  ? "bg-piano-black text-white ring-2 ring-piano-gold"
                  : "bg-piano-cream"
              }`}
            >
              {plan.popular && (
                <span className="inline-block px-3 py-1 bg-piano-gold text-piano-black text-sm font-medium rounded-full mb-4">
                  Most Popular
                </span>
              )}
              <h3 className="font-serif text-2xl font-bold mb-2">{plan.name}</h3>
              <div className="mb-6">
                <span className="text-3xl font-bold">{plan.price}</span>
                <span className="text-muted-foreground"> {plan.period}</span>
              </div>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-piano-gold" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button
                className={`w-full py-3 rounded-full transition-colors ${
                  plan.popular
                    ? "bg-piano-gold text-piano-black hover:bg-piano-gold/90"
                    : "bg-piano-black text-white hover:bg-piano-black/90"
                }`}
              >
                Get Started
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};