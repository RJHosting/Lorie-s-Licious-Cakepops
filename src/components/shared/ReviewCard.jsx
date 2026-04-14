import React from "react";
import { Star } from "lucide-react";
import { motion } from "framer-motion";

export default function ReviewCard({ review, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="bg-card rounded-2xl p-6 md:p-8 shadow-sm border border-border hover:shadow-md transition-shadow"
    >
      {/* Stars */}
      <div className="flex gap-0.5 mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`w-4 h-4 ${i < review.rating ? "fill-amber-400 text-amber-400" : "fill-muted text-muted"}`}
          />
        ))}
      </div>

      {/* Text */}
      <p className="text-foreground/80 font-body text-sm leading-relaxed mb-5 line-clamp-4">
        "{review.text}"
      </p>

      {/* Author */}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
          <span className="text-primary font-heading font-bold text-sm">
            {review.author_name?.charAt(0)}
          </span>
        </div>
        <div>
          <p className="font-body font-semibold text-sm text-foreground">{review.author_name}</p>
          {review.relative_time_description && (
            <p className="font-body text-xs text-muted-foreground">{review.relative_time_description}</p>
          )}
        </div>
      </div>
    </motion.div>
  );
}