export type FAQ = { id: string; question: string; answer: string; group: "Orders" | "Delivery" | "Customization" | "Corporate" };

export const faqs: FAQ[] = [
  { id: "f1", group: "Orders", question: "How far in advance should I order?", answer: "For bespoke bouquets we recommend 24–48 hours; for events and corporate installs, 5–10 business days." },
  { id: "f2", group: "Orders", question: "Do you offer same-day delivery?", answer: "Yes, in Dubai and Abu Dhabi for selected styles placed before 2 pm." },
  { id: "f3", group: "Delivery", question: "What are your delivery windows?", answer: "10 am–1 pm, 1–4 pm, 4–8 pm. Priority timed drop-offs available on request." },
  { id: "f4", group: "Delivery", question: "How do you package arrangements?", answer: "Water-packed hand ties with satin ribbon, or presentation boxes with moisture locks and branded tissue." },
  { id: "f5", group: "Customization", question: "Can I request a specific flower?", answer: "Yes—if seasonally available. We provide closest luxe substitutions when required." },
  { id: "f6", group: "Customization", question: "Can you match a color palette?", answer: "Absolutely. Share your references; we design to palette, mood, and venue lighting." },
  { id: "f7", group: "Customization", question: "Do you add fragrances?", answer: "We curate low-fragrance options for corporate and dining settings on request." },
  { id: "f8", group: "Corporate", question: "Do you handle weekly office flowers?", answer: "Yes—design, delivery, on-site placement, and refresh schedules tailored to your space." },
  { id: "f9", group: "Corporate", question: "Can you brand hampers?", answer: "We offer branded sleeves, wax seals, and custom cards for corporate hampers." },
  { id: "f10", group: "Orders", question: "What payment methods are accepted?", answer: "Major cards, bank transfer, and payment links. Cash is not accepted." },
  { id: "f11", group: "Delivery", question: "Do you deliver to hotels?", answer: "Yes, with guest name, room number, and concierge contact for seamless handover." },
  { id: "f12", group: "Customization", question: "Can I add gifts to bouquets?", answer: "Yes—chocolates, candles, note cards, balloons, and partner gifting items." }
];
