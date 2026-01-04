export type GalleryItem = {
  id: string;
  category: "Bouquets" | "Hampers" | "Events" | "Packaging";
  title: string;
  image: string;
};

export const galleryItems: GalleryItem[] = [
  { id: "g1", category: "Bouquets", title: "Sculptural orchids", image: "/images/products/orchids.jpg" },
  { id: "g2", category: "Hampers", title: "Rosé hamper", image: "/images/products/roses.jpg" },
  { id: "g3", category: "Events", title: "Aisle meadows", image: "/images/products/tulips.jpg" },
  { id: "g4", category: "Packaging", title: "Hand-tied wrap", image: "/images/products/sunflower.jpg" },
  { id: "g5", category: "Bouquets", title: "Pastel garden", image: "/images/products/lilies.jpg" },
  { id: "g6", category: "Hampers", title: "Corporate suite", image: "/images/products/mixed.jpg" }
];
