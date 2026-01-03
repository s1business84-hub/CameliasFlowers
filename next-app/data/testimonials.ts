export type Testimonial = {
  id: string;
  name: string;
  role: string;
  rating: number;
  quote: string;
  highlight?: string;
};

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Layla A.",
    role: "Bride",
    rating: 5,
    quote: "They translated every mood board note into arrangements that felt cinematic and intimate at once.",
    highlight: "Bespoke bridal florals"
  },
  {
    id: "t2",
    name: "Omar K.",
    role: "Corporate Affairs, DIFC",
    rating: 5,
    quote: "Punctual weekly installs, fragrance-aware selections, and flawless maintenance—true partners.",
    highlight: "Corporate weekly program"
  },
  {
    id: "t3",
    name: "Sara M.",
    role: "Gifting client",
    rating: 5,
    quote: "The hamper unboxing felt like a jewelry experience—layered textures, handwritten notes, and perfect blooms.",
    highlight: "Luxury hamper"
  }
];
