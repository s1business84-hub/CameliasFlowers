"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Product } from "@/data/products";
import { CTA } from "./cta";

export function ProductCard({ product, onSelect }: { product: Product; onSelect?: (p: Product) => void }) {
  return (
    <motion.article whileHover={{ y: -6 }} className="glass rounded-2xl overflow-hidden shadow-glass">
      <div className="relative h-56">
        <Image src={product.image} alt={product.name} fill className="object-cover" sizes="(max-width:768px) 100vw, 400px" />
        <span className="absolute left-3 top-3 badge bg-white/90 text-brand-wine">{product.occasion}</span>
      </div>
      <div className="p-5 space-y-3">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-xl font-semibold text-brand-wine">{product.name}</h3>
          <span className="text-sm font-medium text-brand-rose">AED {product.price}</span>
        </div>
        <p className="text-sm text-neutral-700 leading-relaxed">{product.description}</p>
        <div className="flex flex-wrap gap-2 text-xs text-brand-wine/80">
          {product.tags.map((tag) => (
            <span key={tag} className="badge bg-brand-cream border border-brand-pink/30">{tag}</span>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <CTA href={`/shop/${product.slug}`} label="View" />
          {onSelect && (
            <button onClick={() => onSelect(product)} className="text-sm font-semibold text-brand-wine underline underline-offset-4">Request this style</button>
          )}
        </div>
      </div>
    </motion.article>
  );
}
