import React from "react";
import { motion } from "framer-motion";

export default function SectionHeading({ subtitle, title, description, centered = true, light = false }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      className={`mb-10 md:mb-14 ${centered ? "text-center" : ""}`}
    >
      {subtitle && (
        <span className={`inline-block text-xs font-body font-semibold uppercase tracking-[0.2em] mb-3 ${light ? "text-primary-foreground/70" : "text-primary"}`}>
          {subtitle}
        </span>
      )}
      <h2 className={`font-heading text-3xl md:text-4xl lg:text-5xl font-bold leading-tight ${light ? "text-primary-foreground" : "text-foreground"}`}>
        {title}
      </h2>
      {description && (
        <p className={`mt-4 max-w-2xl font-body text-base md:text-lg leading-relaxed ${centered ? "mx-auto" : ""} ${light ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
          {description}
        </p>
      )}
    </motion.div>
  );
}