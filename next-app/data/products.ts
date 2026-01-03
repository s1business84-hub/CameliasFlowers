export type Product = {
  id: string;
  name: string;
  slug: string;
  description: string;
  occasion: "Birthday" | "Anniversary" | "Corporate" | "Seasonal" | "Romantic";
  price: number;
  color: "Blush" | "Ivory" | "Crimson" | "Pastel" | "Sunlit";
  tags: string[];
  image: string;
  featured?: boolean;
};

export const products: Product[] = [
  {
    id: "p1",
    name: "Blush Peony Statement",
    slug: "blush-peony-statement",
    description: "Lush peonies, quicksand roses, and butterfly ranunculus in a sculptural wrap.",
    occasion: "Anniversary",
    price: 520,
    color: "Blush",
    tags: ["peonies", "roses", "hand-tied"],
    image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=1200",
    featured: true,
  },
  {
    id: "p2",
    name: "Ivory Atelier Classic",
    slug: "ivory-atelier-classic",
    description: "White roses, lisianthus, and phalaenopsis orchids with satin ribbon.",
    occasion: "Corporate",
    price: 480,
    color: "Ivory",
    tags: ["orchids", "roses", "modern"],
    image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=1200",
    featured: true,
  },
  {
    id: "p3",
    name: "Crimson Grand Gesture",
    slug: "crimson-grand-gesture",
    description: "100 premium Ecuadorian roses in a domed, water-packed presentation box.",
    occasion: "Romantic",
    price: 890,
    color: "Crimson",
    tags: ["roses", "grand", "box"],
    image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=1200",
  },
  {
    id: "p4",
    name: "Sunlit Citrus",
    slug: "sunlit-citrus",
    description: "Sunny dahlias, tulips, and spray roses with citrus greenery.",
    occasion: "Birthday",
    price: 360,
    color: "Sunlit",
    tags: ["dahlias", "tulips", "bright"],
    image: "https://images.unsplash.com/photo-1468327768560-75b778cbb551?w=1200",
  },
  {
    id: "p5",
    name: "Pastel Cloud",
    slug: "pastel-cloud",
    description: "Hydrangea, cappuccino roses, and delphinium in airy pastel palette.",
    occasion: "Seasonal",
    price: 410,
    color: "Pastel",
    tags: ["hydrangea", "delphinium", "whimsical"],
    image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=1200",
  }
];

export const addOns = [
  { id: "chocs", label: "Artisan Chocolates", price: 60 },
  { id: "candle", label: "Signature Candle", price: 75 },
  { id: "note", label: "Handwritten Note", price: 0 },
  { id: "balloon", label: "Helium Balloon", price: 35 }
];
