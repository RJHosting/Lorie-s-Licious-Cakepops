import React from "react";
import { Sparkles, Palette, Award, Truck } from "lucide-react";
import { motion } from "framer-motion";
import SectionHeading from "@/components/shared/SectionHeading";

const reasons = [
  {
    icon: Sparkles,
    title: "Handmade Fresh",
    description: "Every cake pop is baked and decorated from scratch using only premium ingredients — never mass-produced.",
  },
  {
    icon: Palette,
    title: "Fully Customizable",
    description: "Choose your colors, themes, flavors, and designs. We bring your vision to life for any occasion.",
  },
  {
    icon: Award,
    title: "5-Star Quality",
    description: "Our customers rave about the taste and presentation. We take pride in every detail.",
  },
  {
    icon: Truck,
    title: "Local & Reliable",
    description: "Proudly serving Delphos and surrounding areas with reliable service and timely orders.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          subtitle="Why Choose Us"
          title="Crafted with Care, Made to Impress"
          description="We go above and beyond to ensure every treat is as beautiful as it is delicious."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="text-center p-6 md:p-8 rounded-2xl bg-card border border-border hover:shadow-md transition-shadow"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-5">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-heading font-bold text-base text-foreground mb-2">{item.title}</h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}