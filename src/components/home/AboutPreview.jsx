import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function AboutPreview({ image }) {
  return (
    <section className="py-16 md:py-24 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="rounded-3xl overflow-hidden shadow-lg">
              <img
                src={image}
                alt="Lorie crafting handmade cake pops with care"
                className="w-full h-[380px] md:h-[480px] object-cover"
              />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <span className="inline-block text-xs font-body font-semibold uppercase tracking-[0.2em] text-primary mb-3">
              Our Story
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground leading-tight mb-5">
              Made with Love,{" "}
              <span className="text-primary">Served with Joy</span>
            </h2>
            <p className="font-body text-muted-foreground leading-relaxed mb-4">
              What started as a passion for baking has blossomed into Delphos's favorite cake pop destination. 
              Every treat is handcrafted from scratch using premium ingredients, decorated with meticulous 
              attention to detail, and made to bring smiles to your celebrations.
            </p>
            <p className="font-body text-muted-foreground leading-relaxed mb-6">
              Whether it's a wedding, birthday, baby shower, or just a sweet Tuesday — we pour our heart 
              into every single pop.
            </p>

            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Heart className="w-5 h-5 text-primary" />
              </div>
              <p className="font-body text-sm font-medium text-foreground italic">
                "Every celebration deserves a sweet detail."
              </p>
            </div>

            <Button asChild size="lg" variant="outline" className="rounded-full font-body">
              <Link to="/about">
                Read Our Story <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}