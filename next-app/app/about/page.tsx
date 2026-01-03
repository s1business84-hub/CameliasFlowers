import { SectionHeader } from "@/components/section-header";
import { CTA } from "@/components/cta";

export const metadata = {
  title: "About | Camelias Flowers",
  description: "Our story, values, and promise at Camelias Flowers—luxury florist and hamper atelier in the UAE."
};

export default function AboutPage() {
  return (
    <div className="container space-y-12 py-12">
      <SectionHeader title="Our Story" description="Camelias Flowers was born from haute couture floristry and a love for elevated gifting. We design with restraint, premium stems, and a hospitality mindset." />
      <div className="grid md:grid-cols-2 gap-8">
        <div className="glass rounded-2xl p-6 space-y-3">
          <h3 className="text-xl font-semibold text-brand-wine">Values</h3>
          <ul className="list-disc list-inside text-neutral-700 space-y-2">
            <li>Quiet luxury aesthetics with purposeful color.</li>
            <li>Responsible sourcing and seasonally led selections.</li>
            <li>Service-first, concierge communication.</li>
          </ul>
        </div>
        <div className="glass rounded-2xl p-6 space-y-3">
          <h3 className="text-xl font-semibold text-brand-wine">What makes us different</h3>
          <ul className="list-disc list-inside text-neutral-700 space-y-2">
            <li>Scent-aware design for dining and corporate spaces.</li>
            <li>Water-packed logistics with temperature-controlled delivery.</li>
            <li>Layered unboxing with satin, wax seals, and keepsake boxes.</li>
          </ul>
        </div>
      </div>
      <div className="glass rounded-2xl p-6 space-y-3">
        <h3 className="text-xl font-semibold text-brand-wine">Quality Promise</h3>
        <p className="text-neutral-700">We work only with Grade A stems, condition every bloom in-house, and finish with moisture locks to ensure arrival freshness. Every piece is photographed before dispatch.</p>
      </div>
      <CTA href="/contact" label="Start a custom order" />
    </div>
  );
}
