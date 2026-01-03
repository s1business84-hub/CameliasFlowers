"use client";
import { useState } from "react";
import { FAQ } from "@/data/faqs";
import { motion, AnimatePresence } from "framer-motion";

export function FAQAccordion({ items }: { items: FAQ[] }) {
  const [open, setOpen] = useState<string | null>(null);
  return (
    <div className="space-y-3">
      {items.map((item) => {
        const isOpen = open === item.id;
        return (
          <div key={item.id} className="border border-brand-rose/20 rounded-xl bg-white/70">
            <button
              className="w-full text-left px-4 py-3 flex items-center justify-between gap-3"
              onClick={() => setOpen(isOpen ? null : item.id)}
              aria-expanded={isOpen}
            >
              <span className="font-semibold text-brand-wine">{item.question}</span>
              <span>{isOpen ? "−" : "+"}</span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="px-4 pb-4 text-sm text-neutral-700 leading-relaxed"
                >
                  {item.answer}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
