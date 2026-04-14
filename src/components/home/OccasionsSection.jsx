import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Cake, Heart, Baby, GraduationCap, Gift, Building2 } from "lucide-react";
import SectionHeading from "@/components/shared/SectionHeading";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const occasions = [
  { icon: Cake, label: "Birthdays" },
  { icon: Heart, label: "Weddings" },
  { icon: Baby, label: "Baby Showers" },
  { icon: GraduationCap, label: "Graduations" },
  { icon: Gift, label: "Holidays" },
  { icon: Building2, label: "Corporate" },
];

export default function OccasionsSection() {
  return (
    <section className="py-16 md:py-24 bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <SectionHeading
          subtitle="Celebrations"
          title="Sweet Treats for Every Occasion"
          description="From intimate gatherings to grand celebrations, we create custom cake pops that make your event unforgettable."
          light
        />

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6 mb-10">
          {occasions.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-5 md:p-6 hover:bg-primary-foreground/20 transition-colors cursor-default"
            >
              <item.icon className="w-7 h-7 mx-auto mb-3 text-primary-foreground/90" />
              <p className="font-body text-sm font-medium text-primary-foreground/90">{item.label}</p>
            </motion.div>
          ))}
        </div>

        <Button asChild variant="secondary" size="lg" className="rounded-full font-body">
          <Link to="/custom-orders">
            Start Your Custom Order <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </Button>
      </div>
    </section>
  );
}