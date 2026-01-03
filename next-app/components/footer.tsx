import Link from "next/link";
import { CTA } from "./cta";

const links = [
  { title: "Company", items: [{ label: "About", href: "/about" }, { label: "Services", href: "/services" }, { label: "Contact", href: "/contact" }] },
  { title: "Shop", items: [{ label: "Flowers", href: "/shop" }, { label: "Hampers", href: "/hampers" }, { label: "Gallery", href: "/gallery" }] },
  { title: "Support", items: [{ label: "FAQ", href: "/faq" }, { label: "Testimonials", href: "/testimonials" }] },
];

export function Footer() {
  return (
    <footer className="bg-brand-wine text-white mt-16">
      <div className="container py-12 grid gap-8 md:grid-cols-4">
        <div className="space-y-4">
          <p className="font-display text-2xl">Camelias Flowers</p>
          <p className="text-sm text-white/80">Luxury florist crafting bespoke blooms and curated hampers across the UAE.</p>
          <CTA href="/contact" label="Order Custom" />
        </div>
        {links.map((col) => (
          <div key={col.title} className="space-y-3">
            <p className="font-semibold text-white/90">{col.title}</p>
            <div className="flex flex-col gap-2 text-sm text-white/80">
              {col.items.map((item) => (
                <Link key={item.href} href={item.href}>{item.label}</Link>
              ))}
            </div>
          </div>
        ))}
        <div className="space-y-3 text-sm text-white/80">
          <p className="font-semibold text-white/90">Visit</p>
          <p>Dubai Design District · Daily 10am – 8pm</p>
          <p>WhatsApp: +971 56 775 6327</p>
          <p>Email: studio@cameliasflowers.ae</p>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs text-white/60">© {new Date().getFullYear()} Camelias Flowers. All rights reserved.</div>
    </footer>
  );
}
