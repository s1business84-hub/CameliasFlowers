"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function SectionHeader({ title, eyebrow, description, align = "left" }: { title: string; eyebrow?: string; description?: string; align?: "left" | "center" }) {
  return (
    <div className={cn("space-y-3", align === "center" && "text-center mx-auto max-w-2xl")}> 
      {eyebrow && <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-rose">{eyebrow}</p>}
      <motion.h2 initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-3xl md:text-4xl font-display text-brand-wine">
        {title}
      </motion.h2>
      {description && <p className="text-base text-neutral-700 leading-relaxed">{description}</p>}
    </div>
  );
}
