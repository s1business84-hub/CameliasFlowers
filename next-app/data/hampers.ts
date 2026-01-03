export type Hamper = {
  id: string;
  name: string;
  slug: string;
  description: string;
  category: "Romantic" | "Birthday" | "Congrats" | "Corporate";
  price: number;
  items: string[];
  image: string;
  featured?: boolean;
};

export const hampers: Hamper[] = [
  {
    id: "h1",
    name: "Rose & Rosé Crate",
    slug: "rose-and-rose-crate",
    description: "Preserved roses, rosé, artisan truffles, and gold-dipped blooms.",
    category: "Romantic",
    price: 780,
    items: ["Preserved roses", "Rosé", "Truffles", "Gold foliage"],
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1200",
    featured: true,
  },
  {
    id: "h2",
    name: "Corporate Signature",
    slug: "corporate-signature",
    description: "Minimalist orchids, single-origin coffee, and leather folio gift.",
    category: "Corporate",
    price: 920,
    items: ["Phalaenopsis orchids", "Specialty coffee", "Leather folio"],
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=1200",
  },
  {
    id: "h3",
    name: "Celebration Brunch",
    slug: "celebration-brunch",
    description: "Bubbly, macarons, garden roses, and a brunch voucher envelope.",
    category: "Congrats",
    price: 690,
    items: ["Sparkling", "Macarons", "Garden roses", "Voucher"],
    image: "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?w=1200",
  }
];

export const hamperConfigurator = {
  bases: ["Round blush box", "Black lacquer box", "Woven basket", "Acrylic trunk"],
  flowers: ["Roses", "Peonies", "Orchids", "Seasonal mix"],
  addOns: ["Chocolate", "Sparkling", "Silk ribbon", "Keepsake card"],
  messages: ["Romantic", "Congratulations", "Thank you", "Custom"]
};
