import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { addOns, products } from "@/data/products";

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const product = products.find((p) => p.slug === params.slug);
  if (!product) return {};

  const title = `${product.name} | Camelias Flowers`;
  return {
    title,
    description: product.description,
    openGraph: {
      title,
      description: product.description,
      images: [{ url: product.image, alt: product.name }],
    },
    alternates: { canonical: `https://www.cameliasflowers.com/shop/${product.slug}` },
  };
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = products.find((p) => p.slug === params.slug);
  if (!product) return notFound();

  const related = products
    .filter((p) => p.slug !== product.slug && (p.occasion === product.occasion || p.color === product.color))
    .slice(0, 3);

  return (
    <div className="container py-12 space-y-12">
      <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-start">
        <div className="glass rounded-3xl overflow-hidden shadow-glass">
          <div className="relative h-[520px]">
            <Image src={product.image} alt={product.name} fill className="object-cover" priority />
          </div>
        </div>

        <div className="space-y-6">
          <Link href="/shop" className="text-sm text-brand-wine hover:underline inline-flex items-center gap-2" aria-label="Back to shop">
            ← Back to shop
          </Link>
          <div className="flex flex-wrap gap-3 items-center">
            <span className="badge bg-brand-cream border border-brand-blush/40 text-brand-wine">{product.occasion}</span>
            <span className="badge bg-white border border-brand-blush/50 text-brand-wine">{product.color}</span>
          </div>
          <div className="space-y-3">
            <h1 className="text-4xl font-display text-brand-wine leading-tight">{product.name}</h1>
            <p className="text-lg text-neutral-700 leading-relaxed">{product.description}</p>
            <p className="text-2xl font-semibold text-brand-rose">AED {product.price}</p>
          </div>

          <div className="flex flex-wrap gap-2 text-sm text-brand-wine">
            {product.tags.map((tag) => (
              <span key={tag} className="badge bg-white border border-brand-blush/40">
                {tag}
              </span>
            ))}
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <InfoTile title="Delivery" body="Same-day Dubai, next-day UAE. Chilled handling from studio to door." />
            <InfoTile title="Presentation" body="Water-packed, satin ribboned, includes vase-care card and sachet." />
            <InfoTile title="Customise" body="Adjust palette, stem count, wrap, or vase styling to your brief." />
            <InfoTile title="Card" body="Complimentary handwritten note for the recipient." />
          </div>

          <form action="/contact" method="get" className="space-y-4 glass rounded-2xl p-4 border border-brand-blush/30 shadow-glass">
            <input type="hidden" name="product" value={product.name} />

            <div className="space-y-2">
              <p className="font-semibold text-brand-wine">Add-ons</p>
              <div className="grid sm:grid-cols-2 gap-2">
                {addOns.map((addon) => (
                  <label key={addon.id} className="flex items-center gap-3 rounded-xl border border-brand-blush/40 bg-white px-3 py-2 text-sm text-brand-wine">
                    <input type="checkbox" name="addons" value={addon.id} className="accent-brand-rose h-4 w-4" aria-label={`Add ${addon.label}`} />
                    <span className="flex-1">{addon.label}</span>
                    {addon.price ? <span className="text-brand-rose font-medium">+{addon.price}</span> : <span className="text-neutral-500">Included</span>}
                  </label>
                ))}
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              <label className="sm:col-span-1 text-sm font-medium text-brand-wine/90 space-y-2">
                Quantity
                <input
                  type="number"
                  name="qty"
                  min={1}
                  defaultValue={1}
                  className="w-full rounded-xl border border-brand-blush/50 bg-white/90 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-rose/40"
                  aria-label="Quantity"
                />
              </label>
              <label className="sm:col-span-2 text-sm font-medium text-brand-wine/90 space-y-2">
                Message for card (optional)
                <textarea
                  name="note"
                  className="w-full rounded-xl border border-brand-blush/50 bg-white/90 px-4 py-3 min-h-[96px] focus:outline-none focus:ring-2 focus:ring-brand-rose/40"
                  placeholder="Share sentiments, delivery window, or palette tweaks."
                  aria-label="Message for card"
                />
              </label>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <button
                type="submit"
                className="px-5 py-3 rounded-full bg-gradient-to-r from-brand-rose to-brand-blush text-white shadow-soft hover:shadow-glass"
              >
                Request this style
              </button>
              <Link
                href="/contact"
                className="px-4 py-2 rounded-full border border-brand-rose text-brand-wine bg-white/70 hover:bg-white"
                aria-label="Talk to a designer"
              >
                Talk to a designer
              </Link>
              <p className="text-xs text-neutral-600">We confirm stem selection, add-ons, and delivery timing before invoicing.</p>
            </div>
          </form>
        </div>
      </div>

      {related.length > 0 && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-display text-brand-wine">You may also like</h2>
            <Link href="/shop" className="text-sm text-brand-rose hover:underline">
              View all
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {related.map((item) => (
              <Link
                key={item.id}
                href={`/shop/${item.slug}`}
                className="glass rounded-2xl shadow-glass overflow-hidden hover:-translate-y-1 transition-transform"
                aria-label={`View ${item.name}`}
              >
                <div className="relative h-52">
                  <Image src={item.image} alt={item.name} fill className="object-cover" />
                </div>
                <div className="p-4 space-y-1">
                  <p className="text-sm text-brand-wine/80">{item.occasion}</p>
                  <p className="font-semibold text-brand-wine">{item.name}</p>
                  <p className="text-brand-rose text-sm">AED {item.price}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function InfoTile({ title, body }: { title: string; body: string }) {
  return (
    <div className="glass rounded-2xl p-4 border border-brand-blush/30">
      <p className="text-sm font-semibold text-brand-wine">{title}</p>
      <p className="text-sm text-neutral-700 mt-1 leading-relaxed">{body}</p>
    </div>
  );
}
