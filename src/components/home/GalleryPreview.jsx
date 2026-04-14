import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import SectionHeading from "@/components/shared/SectionHeading";

export default function GalleryPreview({ images }) {
  return (
    <section className="py-16 md:py-24 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          subtitle="Gallery"
          title="A Taste of Our Work"
          description="Browse some of our favorite creations — each one made with love and attention to detail."
        />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              className={`relative overflow-hidden rounded-2xl group ${
                i === 0 ? "md:col-span-2 md:row-span-2" : ""
              }`}
            >
              <img
                src={img}
                alt={`Cake pop creation ${i + 1}`}
                className={`w-full object-cover group-hover:scale-105 transition-transform duration-500 ${
                  i === 0 ? "h-48 md:h-full" : "h-48 md:h-56"
                }`}
              />
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-300" />
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button asChild variant="outline" size="lg" className="rounded-full font-body">
            <Link to="/gallery">
              View Full Gallery <ArrowRight className="w-4 h-4 ml-2" />
           </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}