"use client";
import { useMemo, useState } from "react";
import Image from "next/image";
import { GalleryItem } from "@/data/gallery";
import { AnimatePresence, motion } from "framer-motion";

const categories: GalleryItem["category"][] = ["Bouquets", "Hampers", "Events", "Packaging"];

export function GalleryGrid({ items }: { items: GalleryItem[] }) {
  const [active, setActive] = useState<GalleryItem["category"] | "All">("All");
  const [lightbox, setLightbox] = useState<GalleryItem | null>(null);

  const filtered = useMemo(() => (active === "All" ? items : items.filter((i) => i.category === active)), [active, items]);

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2">
        {(["All", ...categories] as const).map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`badge border ${active === cat ? "bg-brand-rose text-white" : "bg-white/80 text-brand-wine"}`}
          >
            {cat}
          </button>
        ))}
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {filtered.map((item) => (
          <motion.div key={item.id} whileHover={{ y: -4 }} className="relative h-48 cursor-pointer overflow-hidden rounded-2xl" onClick={() => setLightbox(item)}>
            <Image src={item.image} alt={item.title} fill className="object-cover" sizes="(max-width:768px) 100vw, 400px" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            <div className="absolute bottom-3 left-3 text-white">
              <p className="text-sm font-semibold">{item.title}</p>
              <p className="text-xs opacity-80">{item.category}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {lightbox && (
          <motion.div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <div className="relative w-full max-w-3xl h-[70vh]">
              <Image src={lightbox.image} alt={lightbox.title} fill className="object-cover rounded-2xl" sizes="100vw" />
              <button className="absolute top-3 right-3 text-white text-xl" onClick={() => setLightbox(null)} aria-label="Close lightbox">×</button>
              <div className="absolute bottom-4 left-4 text-white drop-shadow-lg">
                <p className="text-lg font-semibold">{lightbox.title}</p>
                <p className="text-sm opacity-80">{lightbox.category}</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
