"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CTA } from "./cta";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/shop", label: "Shop" },
  { href: "/hampers", label: "Hampers" },
  { href: "/gallery", label: "Gallery" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40">
      <div className="bg-brand-wine text-white text-sm py-2 text-center">Same-day luxury delivery in Dubai & Abu Dhabi · Custom orders via WhatsApp</div>
      <nav className="backdrop-blur bg-white/85 border-b border-white/50 shadow-sm">
        <div className="container flex items-center justify-between py-4">
          <Link href="/" className="font-display text-2xl text-brand-wine">Camelias Flowers</Link>
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className={cn("text-sm font-medium hover:text-brand-rose", pathname === link.href && "text-brand-rose")}>{link.label}</Link>
            ))}
            <CTA href="/contact" label="Order Custom" />
          </div>
          <button aria-label="Toggle menu" className="md:hidden" onClick={() => setOpen((p) => !p)}>
            <span className="sr-only">Menu</span>
            ☰
          </button>
        </div>
        <AnimatePresence>
          {open && (
            <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="md:hidden bg-white border-t">
              <div className="container py-4 flex flex-col gap-3">
                {navLinks.map((link) => (
                  <Link key={link.href} href={link.href} onClick={() => setOpen(false)} className={cn("text-sm font-medium", pathname === link.href && "text-brand-rose")}>{link.label}</Link>
                ))}
                <CTA href="/contact" label="Order Custom" />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
