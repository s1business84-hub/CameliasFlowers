"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export function WhatsAppFloat({ phone }: { phone: string }) {
  const href = `https://wa.me/${phone}`;
  return (
    <motion.div className="fixed bottom-6 right-6 z-50" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
      <Link
        href={href}
        aria-label="Chat on WhatsApp"
        className="flex items-center gap-2 px-4 py-3 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-600 text-white shadow-lg hover:shadow-xl"
        target="_blank"
      >
        <span>WhatsApp</span>
        <span className="text-sm">{phone}</span>
      </Link>
    </motion.div>
  );
}
