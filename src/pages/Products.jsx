import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/shared/SectionHeading";
import ProductCard from "@/components/products/ProductCard";

const products = [
  {
    title: "Signature Cake Pops",
    description: "Our classic collection featuring rich chocolate, creamy vanilla, red velvet, and more — each hand-dipped and beautifully decorated.",
    image: "https://media.base44.com/images/public/69debb96c82686023a11a118/3c6ef9b99_generated_582c54d9.png",
    badge: "Bestseller",
  },
  {
    title: "Seasonal Cake Pops",
    description: "Limited-edition flavors and designs that celebrate the best of every season — from pumpkin spice fall pops to peppermint holiday treats.",
    image: "https://media.base44.com/images/public/69debb96c82686023a11a118/23bf008b8_generated_7faae25a.png",
    badge: "Limited",
  },
  {
    title: "Custom Themed Cake Pops",
    description: "Fully customizable designs to match your party theme, school colors, favorite characters, or any creative vision you can imagine.",
    image: "https://media.base44.com/images/public/69debb96c82686023a11a118/8e01170c3_generated_bd379727.png",
  },
  {
    title: "Party Boxes",
    description: "Beautifully packaged assortments perfect for gifting, party favors, or treating yourself. Available in boxes of 6, 12, or 24.",
    image: "https://media.base44.com/images/public/69debb96c82686023a11a118/b24a766b9_generated_f5a5e034.png",
    price: "Starting at $18",
  },
  {
    title: "Dessert Favors",
    description: "Individually wrapped cake pops with custom labels — ideal wedding favors, baby shower gifts, and corporate event treats.",
    image: "https://media.base44.com/images/public/69debb96c82686023a11a118/2396468b1_generated_7b5b6a76.png",
  },
  {
    title: "Event Treats",
    description: "Large-scale displays and towers for events, complete with coordinated colors and themed decorations to wow your guests.",
    image: "https://media.base44.com/images/public/69debb96c82686023a11a118/b21c7094c_generated_e37b0c19.png",
  },
];

export default function Products() {
  return (
    <div>
      {/* Hero */}
      <section className="py-14 md:py-20 bg-secondary/30 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <span className="inline-block text-xs font-body font-semibold uppercase tracking-[0.2em] text-primary mb-3">
            Our Menu
          </span>
          <h1 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-4">
            Handcrafted <span className="text-primary">Cake Pops</span> & Treats
          </h1>
          <p className="font-body text-muted-foreground leading-relaxed max-w-xl mx-auto">
            Browse our collection of beautifully made cake pops. Every treat is baked fresh and 
            decorated by hand with premium ingredients.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {products.map((product, i) => (
              <ProductCard key={product.title} product={product} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Custom Order CTA */}
      <section className="py-14 md:py-20 bg-secondary/30 text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-3">
            Don't See What You're Looking For?
          </h2>
          <p className="font-body text-muted-foreground mb-6">
            We love creating custom designs! Tell us your vision and we'll make it happen.
          </p>
          <Button asChild size="lg" className="rounded-full font-body">
            <Link to="/custom-orders">
              Request Custom Order <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}