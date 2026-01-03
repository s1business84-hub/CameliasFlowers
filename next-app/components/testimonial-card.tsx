"use client";

import { motion } from "framer-motion";
import { Testimonial } from "@/data/testimonials";

export function TestimonialCard({ item }: { item: Testimonial }) {
  return (
    <motion.article whileHover={{ y: -4 }} className="glass rounded-2xl p-5 space-y-3 shadow-glass">
      <div className="flex items-center gap-2">
        <p className="font-semibold text-brand-wine">{item.name}</p>
        <span className="text-xs text-neutral-600">{item.role}</span>
      </div>
      <div className="flex gap-1 text-brand-rose" aria-label={`Rating ${item.rating} of 5`}>
        {Array.from({ length: 5 }).map((_, i) => (
          <span key={i}>{i < item.rating ? "★" : "☆"}</span>
        ))}
      </div>
      <p className="text-sm text-neutral-800 leading-relaxed">“{item.quote}”</p>
      {item.highlight && <span className="badge bg-brand-cream border text-brand-wine">{item.highlight}</span>}
    </motion.article>
  );
}
