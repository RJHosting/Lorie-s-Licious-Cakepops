import React from "react";
import HeroSection from "@/components/home/HeroSection";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import AboutPreview from "@/components/home/AboutPreview";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import OccasionsSection from "@/components/home/OccasionsSection";
import GalleryPreview from "@/components/home/GalleryPreview";
import ReviewsSection from "@/components/home/ReviewsSection";
import MapSection from "@/components/shared/MapSection";
import ContactCTA from "@/components/home/ContactCTA";

// All images are pre-generated static assets
const IMAGES = {
  hero: "https://media.base44.com/images/public/69debb96c82686023a11a118/b206005af_generated_320dd4d0.png",
  signature: "https://media.base44.com/images/public/69debb96c82686023a11a118/3c6ef9b99_generated_582c54d9.png",
  seasonal: "https://media.base44.com/images/public/69debb96c82686023a11a118/23bf008b8_generated_7faae25a.png",
  custom: "https://media.base44.com/images/public/69debb96c82686023a11a118/8e01170c3_generated_bd379727.png",
  about: "https://media.base44.com/images/public/69debb96c82686023a11a118/59497e09c_generated_f4d7a8bb.png",
  gallery: [
    "https://media.base44.com/images/public/69debb96c82686023a11a118/8ea03dae8_generated_b3c4b292.png",
    "https://media.base44.com/images/public/69debb96c82686023a11a118/136fdc3c0_generated_2c5fd9aa.png",
    "https://media.base44.com/images/public/69debb96c82686023a11a118/99daa0a53_generated_b99a3093.png",
    "https://media.base44.com/images/public/69debb96c82686023a11a118/4c12a7eb3_generated_9b377415.png",
    "https://media.base44.com/images/public/69debb96c82686023a11a118/3c6ef9b99_generated_582c54d9.png",
  ],
};

export default function Home() {
  return (
    <div>
      <HeroSection heroImage={IMAGES.hero} />
      <FeaturedProducts images={[IMAGES.signature, IMAGES.seasonal, IMAGES.custom]} />
      <AboutPreview image={IMAGES.about} />
      <WhyChooseUs />
      <OccasionsSection />
      <GalleryPreview images={IMAGES.gallery} />
      <ReviewsSection />
      <MapSection />
      <ContactCTA />
    </div>
  );
}