import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import SectionHeading from "@/components/shared/SectionHeading";

const products = [
  {
    title: "Signature Cake Pops",
    description: "Our classic handcrafted cake pops in a variety of delicious flavors with elegant finishes.",
    cta: "View Collection",
  },
  {
    title: "Seasonal Specials",
    description: "Limited-edition flavors and designs celebrating each season's unique spirit.",
    cta: "See What's New",
  },
  {
    title: "Custom Themed",
    description: "Bespoke designs tailored to your event theme, colors, and vision.",
    cta: "Start Designing",
  },
];

export default function FeaturedProducts({ images }) {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          subtitle="Our Creations"
          title="Featured Treats"
          description="Every cake pop is handcrafted with premium ingredients and decorated with care to make your celebration unforgettable."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {products.map((product, i) => (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="group"
            >
             <div className="bg-card rounded-2xl overflow-hidden border border-border shadow-sm hover:shadow-lg transition-all duration-300">
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={images[i]}
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="font-heading font-bold text-lg text-foreground mb-2">{product.title}</h3>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed mb-4">{product.description}</p>
                  <Link
                    to="/products"
                    className="inline-flex items-center text-primary text-sm font-body font-semibold hover:gap-2 transition-all group-hover:gap-2 gap-1"
                  >
                    {product.cta} <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button asChild variant="outline" size="lg" className="rounded-full font-body">
            <Link to="/products">
              Browse All Products <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}