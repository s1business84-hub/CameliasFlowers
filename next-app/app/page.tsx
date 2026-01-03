import Image from "next/image";
import Link from "next/link";
import { SectionHeader } from "@/components/section-header";
import { CTA } from "@/components/cta";
import { ProductCard } from "@/components/product-card";
import { HamperCard } from "@/components/hamper-card";
import { GalleryGrid } from "@/components/gallery-grid";
import { TestimonialCard } from "@/components/testimonial-card";
import { products } from "@/data/products";
import { hampers } from "@/data/hampers";
import { galleryItems } from "@/data/gallery";
import { testimonials } from "@/data/testimonials";

const trustBadges = [
  "Fresh Flowers Daily",
  "Custom Made",
  "Premium Packaging",
  "On-Time Delivery",
];

const categories = [
  { title: "Birthday", copy: "Playful palettes and joyful textures.", href: "/shop?occasion=Birthday" },
  { title: "Anniversary", copy: "Romantic signatures and lush blooms.", href: "/shop?occasion=Anniversary" },
  { title: "Corporate", copy: "Fragrance-aware, modern silhouettes.", href: "/shop?occasion=Corporate" },
  { title: "Seasonal", copy: "Limited seasonal stems in elevated wraps.", href: "/shop?occasion=Seasonal" },
  { title: "Hampers", copy: "Curated florals with artisanal gifting.", href: "/hampers" },
];

export default function HomePage() {
  return (
    <div className="space-y-20">
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-cream via-white to-brand-pink/20">
        <div className="container grid md:grid-cols-2 gap-8 items-center py-16 md:py-24">
          <div className="space-y-6">
            <p className="text-sm uppercase tracking-[0.3em] text-brand-rose">Luxury florist · UAE</p>
            <h1 className="text-4xl md:text-5xl font-display text-brand-wine leading-tight">Custom flower arrangements & curated gift hampers crafted to feel unforgettable.</h1>
            <p className="text-lg text-neutral-700 max-w-xl">Made-to-order florals, sculptural wraps, and hamper experiences delivered same-day in Dubai & Abu Dhabi.</p>
            <div className="flex flex-wrap gap-3">
              <CTA href="/contact" label="Order Custom" />
              <CTA href="/hampers" label="Explore Hampers" secondary />
            </div>
            <div className="flex flex-wrap gap-2 items-center text-sm text-brand-wine">
              {trustBadges.map((badge) => (
                <span key={badge} className="badge bg-white border border-brand-rose/30 shadow-sm">{badge}</span>
              ))}
            </div>
          </div>
          <div className="relative h-96 md:h-[480px]">
            <Image src="https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=1200" alt="Camelias flowers hero" fill className="object-cover rounded-3xl shadow-glass" priority />
          </div>
        </div>
      </section>

      <section className="container space-y-10">
        <SectionHeader title="Featured Categories" description="Find the perfect curation for every moment." />
        <div className="grid gap-4 md:grid-cols-5">
          {categories.map((cat) => (
            <Link key={cat.title} href={cat.href} className="glass rounded-2xl p-4 shadow-glass hover:-translate-y-1 transition transform">
              <p className="font-semibold text-brand-wine">{cat.title}</p>
              <p className="text-sm text-neutral-700 mt-2">{cat.copy}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="container space-y-10">
        <SectionHeader title="Bespoke Custom Flowers" description="Four steps to a made-for-you arrangement." />
        <div className="grid md:grid-cols-4 gap-4">
          {[
            { title: "Share intent", copy: "Occasion, palette, scent preferences." },
            { title: "Curated proposal", copy: "Stem selection with premium substitutions." },
            { title: "Craft & wrap", copy: "Sculptural wraps or presentation boxes." },
            { title: "Deliver same-day", copy: "Timed drop-offs with white-glove handover." },
          ].map((step, i) => (
            <div key={step.title} className="glass rounded-2xl p-4 shadow-glass">
              <p className="text-sm font-semibold text-brand-rose">0{i + 1}</p>
              <p className="font-semibold text-brand-wine mt-2">{step.title}</p>
              <p className="text-sm text-neutral-700 mt-1">{step.copy}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container space-y-10">
        <SectionHeader title="Featured Bouquets" description="Signature arrangements designed for impact." />
        <div className="grid gap-6 md:grid-cols-3">
          {products.filter((p) => p.featured).map((product) => <ProductCard key={product.id} product={product} />)}
        </div>
      </section>

      <section className="container space-y-10">
        <SectionHeader title="Luxury Gift Hampers" description="Curated keepsake boxes with florals, treats, and tailored messaging." />
        <div className="grid gap-6 md:grid-cols-3">
          {hampers.filter((h) => h.featured || h.category === "Romantic").map((hamper) => <HamperCard key={hamper.id} hamper={hamper} />)}
        </div>
      </section>

      <section className="container space-y-6">
        <SectionHeader title="Gallery" description="A glimpse of recent work across bouquets, hampers, and events." />
        <GalleryGrid items={galleryItems.slice(0, 6)} />
      </section>

      <section className="container space-y-8">
        <SectionHeader title="Testimonials" description="Loved by brides, brands, and gifting clients." />
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => <TestimonialCard key={t.id} item={t} />)}
        </div>
      </section>

      <section className="container">
        <div className="glass rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 shadow-glass">
          <div className="space-y-3">
            <p className="text-sm uppercase tracking-[0.2em] text-brand-rose">Let’s design together</p>
            <h3 className="text-3xl font-display text-brand-wine">Order custom florals or bespoke hampers.</h3>
            <p className="text-neutral-700">Share your occasion, palette, and budget—our concierge will respond within 30 minutes during business hours.</p>
            <div className="flex gap-3">
              <CTA href="/contact" label="Start a request" />
              <CTA href="https://wa.me/971567756327" label="WhatsApp" secondary />
            </div>
          </div>
          <div className="flex-1 w-full h-56 relative">
            <Image src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1200" alt="Hampers" fill className="object-cover rounded-2xl" />
          </div>
        </div>
      </section>
    </div>
  );
}
