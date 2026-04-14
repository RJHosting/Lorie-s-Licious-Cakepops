import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Heart, Sparkles, Users, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/shared/SectionHeading";

const values = [
  { icon: Heart, title: "Made with Love", text: "Every single cake pop is handcrafted from scratch. We never cut corners — because your celebrations deserve the best." },
  { icon: Sparkles, title: "Creative Vision", text: "From elegant wedding favors to whimsical birthday themes, we bring your sweetest ideas to life with custom designs." },
  { icon: Users, title: "Community First", text: "We're proud to serve Delphos and surrounding Ohio communities, building relationships one celebration at a time." },
  { icon: Clock, title: "Fresh & Timely", text: "We bake fresh for every order and plan carefully to ensure your treats arrive perfectly on time." },
];

export default function About() {
  return (
    <div>
      {/* Hero */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="rounded-3xl overflow-hidden shadow-lg">
                <img
                  src="https://media.base44.com/images/public/69debb96c82686023a11a118/59497e09c_generated_f4d7a8bb.png"
                  alt="Lorie in her bakery crafting cake pops"
                  className="w-full h-[380px] md:h-[500px] object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <span className="inline-block text-xs font-body font-semibold uppercase tracking-[0.2em] text-primary mb-3">
                About Us
              </span>
              <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-5">
                The Story Behind{" "}
                <span className="text-primary">Every Pop</span>
              </h1>
              <p className="font-body text-muted-foreground leading-relaxed mb-4">
                Lorie's 'Licious Cakepops was born from a simple love of baking and a desire to bring 
                something truly special to every celebration. What started in a home kitchen has grown 
                into a beloved local bakery, known for creating stunning, delicious cake pops that 
                make people smile.
              </p>
              <p className="font-body text-muted-foreground leading-relaxed mb-4">
                Based in the heart of Delphos, Ohio, we take immense pride in using premium ingredients, 
                perfecting our recipes, and handcrafting every single treat. From rich chocolate and 
                creamy vanilla to seasonal specialties — each flavor is developed with care.
              </p>
              <p className="font-body text-muted-foreground leading-relaxed">
                But it's not just about the taste. We believe that the way a dessert looks is just as 
                important as how it tastes. That's why we put extraordinary attention into every design, 
                every color choice, and every finishing touch.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subtitle="What We Stand For"
            title="Our Values"
            description="The principles that guide every cake pop we create."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
            {values.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-card rounded-2xl p-6 md:p-8 border border-border hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-heading font-bold text-lg text-foreground mb-2">{item.title}</h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-primary text-primary-foreground text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Ready to Create Something Sweet?</h2>
          <p className="font-body text-primary-foreground/80 mb-8">
            Let us help you make your next celebration unforgettable with custom cake pops.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Button asChild variant="secondary" size="lg" className="rounded-full font-body">
              <Link to="/custom-orders">Start Custom Order <ArrowRight className="w-4 h-4 ml-2" /></Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full font-body border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}