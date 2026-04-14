import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function ContactCTA() {
  return (
    <section className="py-16 md:py-24 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-card rounded-3xl border border-border shadow-sm p-8 md:p-14 text-center max-w-3xl mx-auto"
        >
          <span className="inline-block text-xs font-body font-semibold uppercase tracking-[0.2em] text-primary mb-3">
            Let's Create Together
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground leading-tight mb-4">
            Ready to Order Your{" "}
            <span className="text-primary">Perfect Treats?</span>
          </h2>
          <p className="font-body text-muted-foreground leading-relaxed mb-8 max-w-lg mx-auto">
            Whether you have a big celebration coming up or just want to brighten someone's day, 
            we'd love to hear from you. Let's make something sweet together!
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Button asChild size="lg" className="rounded-full font-body px-6">
              <Link to="/contact">
                Get In Touch <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full font-body px-6">
              <Link to="/custom-orders">
                <Phone className="w-4 h-4 mr-2" />
                Custom Orders
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}