"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export function CTA({ href, label, secondary }: { href: string; label: string; secondary?: boolean }) {
  const classes = secondary
    ? "px-4 py-2 rounded-full border border-brand-rose text-brand-wine bg-white/70 hover:bg-white"
    : "px-5 py-3 rounded-full bg-gradient-to-r from-brand-rose to-brand-blush text-white shadow-soft hover:shadow-glass";
  return (
    <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
      <Link href={href} className={classes} aria-label={label}>
        {label}
      </Link>
    </motion.div>
  );
}
