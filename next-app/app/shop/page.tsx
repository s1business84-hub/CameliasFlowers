"use client";
import { useMemo, useState } from "react";
import { SectionHeader } from "@/components/section-header";
import { ProductCard } from "@/components/product-card";
import { products, Product, addOns } from "@/data/products";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const occasions = ["All", "Birthday", "Anniversary", "Corporate", "Seasonal", "Romantic"] as const;
const colors = ["All", "Blush", "Ivory", "Crimson", "Pastel", "Sunlit"] as const;
const sorts = ["Featured", "Price: Low to High", "Price: High to Low"] as const;

export default function ShopPage() {
  const [occasion, setOccasion] = useState<typeof occasions[number]>("All");
  const [color, setColor] = useState<typeof colors[number]>("All");
  const [sort, setSort] = useState<typeof sorts[number]>("Featured");
  const [query, setQuery] = useState("");
  const [active, setActive] = useState<Product | null>(null);
  const [selectedAddOns, setSelectedAddOns] = useState<string[]>([]);

  const filtered = useMemo(() => {
    let list = [...products];
    if (occasion !== "All") list = list.filter((p) => p.occasion === occasion);
    if (color !== "All") list = list.filter((p) => p.color === color);
    if (query) list = list.filter((p) => p.name.toLowerCase().includes(query.toLowerCase()));
    if (sort === "Price: Low to High") list.sort((a, b) => a.price - b.price);
    if (sort === "Price: High to Low") list.sort((a, b) => b.price - a.price);
    return list;
  }, [occasion, color, sort, query]);

  return (
    <div className="container space-y-10 py-12">
      <SectionHeader title="Shop Flowers" description="Curated arrangements ready to request or customize." />
      <div className="glass rounded-2xl p-4 shadow-glass grid gap-3 md:grid-cols-4 md:items-center">
        <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search bouquets" className="input" aria-label="Search bouquets" />
        <Select label="Occasion" value={occasion} onChange={setOccasion} options={occasions} />
        <Select label="Color" value={color} onChange={setColor} options={colors} />
        <Select label="Sort" value={sort} onChange={setSort} options={sorts} />
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {filtered.map((product) => (
          <ProductCard key={product.id} product={product} onSelect={setActive} />
        ))}
      </div>

      <AnimatePresence>
        {active && (
          <motion.div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <div className="glass max-w-3xl w-full rounded-3xl overflow-hidden relative">
              <button className="absolute top-3 right-3 text-brand-wine" onClick={() => setActive(null)} aria-label="Close">×</button>
              <div className="grid md:grid-cols-2">
                <div className="relative h-80">
                  <Image src={active.image} alt={active.name} fill className="object-cover" />
                </div>
                <div className="p-6 space-y-3">
                  <h3 className="text-2xl font-semibold text-brand-wine">{active.name}</h3>
                  <p className="text-neutral-700">{active.description}</p>
                  <p className="font-semibold text-brand-rose">AED {active.price}</p>
                  <div className="space-y-2">
                    <p className="text-sm font-semibold text-brand-wine">Add-ons</p>
                    <div className="flex flex-wrap gap-2">
                      {addOns.map((a) => {
                        const selected = selectedAddOns.includes(a.id);
                        return (
                          <button
                            key={a.id}
                            onClick={() => setSelectedAddOns((prev) => selected ? prev.filter((id) => id !== a.id) : [...prev, a.id])}
                            className={`badge border ${selected ? "bg-brand-rose text-white" : "bg-white/80 text-brand-wine"}`}
                          >
                            {a.label} {a.price ? `(+${a.price})` : ""}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                  <p className="text-sm text-neutral-600">Request this style and we’ll confirm availability and delivery window.</p>
                  <a href="/contact" className="px-4 py-2 rounded-full bg-brand-rose text-white inline-flex w-fit">Request this style</a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function Select<T extends string>({ label, value, onChange, options }: { label: string; value: T; onChange: (v: T) => void; options: readonly T[] }) {
  return (
    <label className="text-sm font-medium text-brand-wine/90 flex flex-col gap-2">
      {label}
      <select value={value} onChange={(e) => onChange(e.target.value as T)} className="input">
        {options.map((opt) => (
          <option key={opt} value={opt}>{opt}</option>
        ))}
      </select>
    </label>
  );
}

if (typeof document !== "undefined") {
  const style = document.createElement("style");
  style.innerHTML = `.input{width:100%;padding:0.75rem 1rem;border-radius:0.75rem;border:1px solid #f3aac6;background:rgba(255,255,255,0.9);outline:none} .input:focus{box-shadow:0 0 0 3px rgba(228,94,145,0.2);}`;
  document.head.appendChild(style);
}
