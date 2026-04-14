import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function ProductCard({ product, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="group bg-card rounded-2xl overflow-hidden border border-border shadow-sm hover:shadow-lg transition-all duration-300"
    >
      <div className="relative h-52 overflow-hidden">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {product.badge && (
          <span className="absolute top-3 right-3 bg-primary text-primary-foreground text-xs font-body font-semibold px-3 py-1 rounded-full">
            {product.badge}
          </span>
        )}
      </div>
      <div className="p-5 md:p-6">
        <h3 className="font-heading font-bold text-lg text-foreground mb-1.5">{product.title}</h3>
        <p className="font-body text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-2">
          {product.description}
        </p>
        <div className="flex items-center justify-between">
          <span className="font-body text-sm font-semibold text-primary">
            {product.price || "Contact for Pricing"}
          </span>
          <Button asChild size="sm" variant="outline" className="rounded-full font-body text-xs">
            <Link to="/contact">Inquire</Link>
          </Button>
        </div>
      </div>
    </motion.div>
  );
}