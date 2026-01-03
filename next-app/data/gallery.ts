export type GalleryItem = {
  id: string;
  category: "Bouquets" | "Hampers" | "Events" | "Packaging";
  title: string;
  image: string;
};

export const galleryItems: GalleryItem[] = [
  { id: "g1", category: "Bouquets", title: "Sculptural orchids", image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=1200" },
  { id: "g2", category: "Hampers", title: "Rosé hamper", image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1200" },
  { id: "g3", category: "Events", title: "Aisle meadows", image: "https://images.unsplash.com/photo-1468327768560-75b778cbb551?w=1200" },
  { id: "g4", category: "Packaging", title: "Hand-tied wrap", image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=1200" },
  { id: "g5", category: "Bouquets", title: "Pastel garden", image: "https://images.unsplash.com/photo-1468327768560-75b778cbb551?w=1200" },
  { id: "g6", category: "Hampers", title: "Corporate suite", image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=1200" }
];
