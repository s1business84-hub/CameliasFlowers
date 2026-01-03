export type Service = {
  id: string;
  name: string;
  description: string;
  includes: string[];
  idealFor: string;
  turnaround: string;
  cta: string;
};

export const services: Service[] = [
  {
    id: "s1",
    name: "Custom Bouquets",
    description: "One-of-a-kind arrangements tailored to palette, scent, and mood.",
    includes: ["Palette curation", "Premium blooms", "Handwritten note"],
    idealFor: "Everyday luxe, intimate gifting",
    turnaround: "24–48 hours",
    cta: "Request a custom bouquet"
  },
  {
    id: "s2",
    name: "Gift Hampers",
    description: "Curated florals with artisanal treats, staged for an elevated unboxing.",
    includes: ["Florals", "Edibles", "Keepsake packaging"],
    idealFor: "Celebrations, client appreciation",
    turnaround: "48 hours",
    cta: "Design my hamper"
  },
  {
    id: "s3",
    name: "Corporate Gifting",
    description: "Branded floral gifts and hampers aligned to your company aesthetic.",
    includes: ["Branding", "Delivery scheduling", "VIP handling"],
    idealFor: "Client and team gifting",
    turnaround: "3–7 days",
    cta: "Plan corporate gifting"
  },
  {
    id: "s4",
    name: "Events",
    description: "Runway-level florals for launches, dinners, and private celebrations.",
    includes: ["On-site styling", "Install & strike", "Scent-aware design"],
    idealFor: "Events, pop-ups, weddings",
    turnaround: "5–10 days",
    cta: "Book an event consult"
  }
];
