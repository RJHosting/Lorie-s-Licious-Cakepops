import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { SITE_CONFIG } from "@/lib/siteConfig";

export default function HeroSection({ heroImage }) {
  return (
    <section className="relative overflow-hidden bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-xs font-body font-semibold uppercase tracking-[0.2em] text-primary mb-4">
              Handcrafted in Delphos, Ohio
            </span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-[1.1] mb-5">
              Beautifully Made{" "}
              <span className="text-primary">Cake Pops</span> for Every
              Celebration
            </h1>
            <p className="font-body text-base md:text-lg text-muted-foreground leading-relaxed mb-8 max-w-lg">
              Custom treats handcrafted with love — perfect for birthdays, weddings,
              baby showers, holidays, and every sweet moment in between.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg" className="rounded-full font-body px-6">
                <Link to="/products">
                  View Products
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full font-body px-6">
                <Link to="/custom-orders">Request Custom Order</Link>
              </Button>
              <Button asChild variant="ghost" size="lg" className="rounded-full font-body px-6">
                <a href={SITE_CONFIG.googleMapsLink} target="_blank" rel="noopener noreferrer">
                  <MapPin className="w-4 h-4 mr-1.5" />
                  Get Directions
                </a>
             </Button>
            </div>

            {/* Trust badges */}
            <div className="mt-10 flex items-center gap-6 text-sm font-body text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary" />
                <span>Handmade Fresh</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary" />
                <span>Custom Designs</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary" />
                <span>Local Pickup</span>
              </div>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={heroImage}
                alt="Beautifully handcrafted cake pops by Lorie's 'Licious Cakepops"
                className="w-full h-[340px] md:h-[440px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/10 to-transparent" />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-4 -left-4 md:left-6 bg-card rounded-2xl shadow-lg px-5 py-3 border border-border">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <span key={i} className="text-amber-400 text-sm">★</span>
                  ))}
                </div>
                <span className="font-body text-xs font-semibold text-foreground">5.0 on Google</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}