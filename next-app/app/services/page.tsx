import { SectionHeader } from "@/components/section-header";
import { CTA } from "@/components/cta";
import { services } from "@/data/services";

export const metadata = { title: "Services | Camelias Flowers", description: "Custom bouquets, hampers, corporate gifting, and events by Camelias Flowers." };

export default function ServicesPage() {
  return (
    <div className="container space-y-12 py-12">
      <SectionHeader title="Services" description="Tailored floristry and gifting programs designed for every moment." />
      <div className="grid md:grid-cols-2 gap-6">
        {services.map((service) => (
          <div key={service.id} className="glass rounded-2xl p-6 shadow-glass space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-semibold text-brand-wine">{service.name}</h3>
              <span className="badge bg-brand-cream border">{service.turnaround}</span>
            </div>
            <p className="text-neutral-700">{service.description}</p>
            <p className="text-sm text-neutral-700"><strong>Ideal for:</strong> {service.idealFor}</p>
            <ul className="list-disc list-inside text-neutral-700 space-y-1">
              {service.includes.map((inc) => (
                <li key={inc}>{inc}</li>
              ))}
            </ul>
            <CTA href="/contact" label={service.cta} />
          </div>
        ))}
      </div>
      <div className="glass rounded-2xl p-6 space-y-2">
        <h3 className="text-xl font-semibold text-brand-wine">Pricing guidance</h3>
        <p className="text-neutral-700">Custom bouquets from AED 350, hampers from AED 650, corporate programs bespoke to scope. We confirm a tailored quote after your brief.</p>
      </div>
    </div>
  );
}
