"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Hamper } from "@/data/hampers";
import { CTA } from "./cta";

export function HamperCard({ hamper }: { hamper: Hamper }) {
  return (
    <motion.article whileHover={{ y: -6 }} className="glass rounded-2xl overflow-hidden shadow-glass">
      <div className="relative h-48">
        <Image src={hamper.image} alt={hamper.name} fill className="object-cover" sizes="(max-width:768px) 100vw, 400px" />
        <span className="absolute left-3 top-3 badge bg-white/90 text-brand-wine">{hamper.category}</span>
      </div>
      <div className="p-5 space-y-3">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-xl font-semibold text-brand-wine">{hamper.name}</h3>
          <span className="text-sm font-medium text-brand-rose">AED {hamper.price}</span>
        </div>
        <p className="text-sm text-neutral-700 leading-relaxed">{hamper.description}</p>
        <div className="flex flex-wrap gap-2 text-xs text-brand-wine/80">
          {hamper.items.map((item) => (
            <span key={item} className="badge bg-brand-cream border border-brand-pink/30">{item}</span>
          ))}
        </div>
        <CTA href="/contact" label="Request this hamper" />
      </div>
    </motion.article>
  );
}
