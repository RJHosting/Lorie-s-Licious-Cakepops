import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

// Gallery images - add your own photos here by adding objects to this array
// Each object needs: { src: "url", alt: "description" }
// To use Google Place Photos API, configure SITE_CONFIG.apiKey and SITE_CONFIG.placeId
const galleryImages = [
  { src: "https://media.base44.com/images/public/69debb96c82686023a11a118/3c6ef9b99_generated_582c54d9.png", alt: "Signature cake pops collection" },
  { src: "https://media.base44.com/images/public/69debb96c82686023a11a118/23bf008b8_generated_7faae25a.png", alt: "Seasonal autumn cake pops" },
  { src: "https://media.base44.com/images/public/69debb96c82686023a11a118/8e01170c3_generated_bd379727.png", alt: "Custom princess themed pops" },
  { src: "https://media.base44.com/images/public/69debb96c82686023a11a118/b24a766b9_generated_f5a5e034.png", alt: "Gift box of assorted cake pops" },
  { src: "https://media.base44.com/images/public/69debb96c82686023a11a118/2396468b1_generated_7b5b6a76.png", alt: "Wedding dessert favors" },
  { src: "https://media.base44.com/images/public/69debb96c82686023a11a118/b21c7094c_generated_e37b0c19.png", alt: "Event cake pop tower" },
  { src: "https://media.base44.com/images/public/69debb96c82686023a11a118/8ea03dae8_generated_b3c4b292.png", alt: "Cake pop making process" },
  { src: "https://media.base44.com/images/public/69debb96c82686023a11a118/136fdc3c0_generated_2c5fd9aa.png", alt: "Garden party display" },
  { src: "https://media.base44.com/images/public/69debb96c82686023a11a118/99daa0a53_generated_b99a3093.png", alt: "Chocolate dipping process" },
  { src: "https://media.base44.com/images/public/69debb96c82686023a11a118/4c12a7eb3_generated_9b377415.png", alt: "Party favor wrapped cake pops" },
  { src: "https://media.base44.com/images/public/69debb96c82686023a11a118/8807b4374_generated_66ebd5c3.png", alt: "Birthday celebration cake pops" },
  { src: "https://media.base44.com/images/public/69debb96c82686023a11a118/4cdb107b7_generated_10508c17.png", alt: "Elegant wedding cake pops" },
];

export default function Gallery() {
  const [lightbox, setLightbox] = useState(null);

  return (
    <div>
      {/* Hero */}
      <section className="py-14 md:py-20 bg-secondary/30 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <span className="inline-block text-xs font-body font-semibold uppercase tracking-[0.2em] text-primary mb-3">
            Gallery
          </span>
          <h1 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-4">
            A Taste of Our <span className="text-primary">Creations</span>
          </h1>
          <p className="font-body text-muted-foreground leading-relaxed max-w-xl mx-auto">
            Browse our portfolio of handcrafted cake pops — from signature designs to custom creations 
            made for special celebrations.
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {galleryImages.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: (i % 3) * 0.08 }}
                className="break-inside-avoid group cursor-pointer"
                onClick={() => setLightbox(i)}
              >
                <div className="relative rounded-2xl overflow-hidden">
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/15 transition-colors duration-300 flex items-center justify-center">
                    <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity font-body text-sm font-semibold">
                      View
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-foreground/90 flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <button
              className="absolute top-4 right-4 text-background hover:text-primary transition-colors z-10"
              onClick={() => setLightbox(null)}
            >
              <X className="w-8 h-8" />
            </button>
            <motion.img
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              src={galleryImages[lightbox].src}
              alt={galleryImages[lightbox].alt}
              className="max-w-full max-h-[85vh] object-contain rounded-xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}