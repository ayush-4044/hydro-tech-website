import Link from 'next/link'
import {
  ArrowLeft,
  ArrowUpRight,
  CheckCircle2,
  Factory,
  ShieldCheck,
} from 'lucide-react'

import { PRODUCTS } from '@/data/products'
import { ProductImageViewer } from '@/components/product-image-viewer'

type ProductPageProps = {
  params: Promise<{
    id: string
  }>
}

export default async function ProductDetailPage({
  params,
}: ProductPageProps) {
  const { id } = await params

  const product = PRODUCTS.find((item) => item.id === id)

  if (!product) {
    return (
      <main className="min-h-screen bg-background px-4 py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
            Product Not Found
          </p>

          <h1 className="mt-4 text-3xl font-semibold text-foreground">
            Product not found
          </h1>

          <p className="mt-3 text-muted-foreground">
            The product you are looking for does not exist in our catalog.
          </p>

          <Link
            href="/catalog"
            className="mt-8 inline-flex items-center gap-2 rounded-lg border border-primary/40 px-5 py-2.5 text-sm font-medium text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            <ArrowLeft className="size-4" />
            Back to Catalog
          </Link>
        </div>
      </main>
    )
  }

  const relatedProducts = PRODUCTS.filter(
    (item) =>
      item.category === product.category &&
      item.id !== product.id,
  ).slice(0, 4)

  return (
    <main className="min-h-screen bg-background">

      {/* ===================================================== */}
      {/* TOP BAR */}
      {/* ===================================================== */}

      <div className="border-b border-border">
        <div className="mx-auto max-w-7xl px-4 py-5 sm:px-6 lg:px-8">
          <Link
            href="/catalog"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
          >
            <ArrowLeft className="size-4" />
            Back to Product Catalog
          </Link>
        </div>
      </div>

      {/* ===================================================== */}
      {/* PRODUCT HERO */}
      {/* ===================================================== */}

      <section className="border-b border-border py-12 sm:py-16 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-16 lg:px-8">

          {/* IMAGE */}

          <div className="relative overflow-hidden rounded-2xl border border-border bg-gradient-to-b from-card/80 to-background">

            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 opacity-[0.05]"
              style={{
                backgroundImage:
                  'radial-gradient(circle at center, currentColor 1px, transparent 1px)',
                backgroundSize: '22px 22px',
              }}
            />

            <ProductImageViewer
              image={product.image}
              name={product.name}
              category={product.category}
            />

          </div>

          {/* PRODUCT CONTENT */}

          <div>

            <div className="flex items-center gap-2">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
                HYDRO TECH
              </span>

              <span className="h-px w-8 bg-primary/50" />
            </div>

            <h1 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              {product.name}
            </h1>

            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              {product.description}
            </p>

            {/* QUICK SPEC */}

            <div className="mt-8 rounded-xl border border-primary/20 bg-card/40 p-5">

              <div className="flex items-center gap-2">
                <CheckCircle2 className="size-4 text-primary" />

                <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                  Quick Specification
                </p>
              </div>

              <p className="mt-3 text-base font-semibold text-foreground">
                {product.spec}
              </p>

            </div>

            {/* CTA */}

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">

              <Link
                href={`/bulk-quote?product=${encodeURIComponent(product.id)}`}
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:opacity-90"
              >
                Request a Quote
                <ArrowUpRight className="size-4" />
              </Link>

              <Link
                href="/catalog"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:border-primary/40 hover:text-primary"
              >
                View All Products
              </Link>

            </div>

          </div>
        </div>
      </section>

      {/* ===================================================== */}
      {/* PRODUCT OVERVIEW */}
      {/* ===================================================== */}

      <section className="border-b border-border py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="max-w-3xl">

            <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
              Product Overview
            </p>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Designed for reliable hydraulic connections
            </h2>

            <p className="mt-4 leading-relaxed text-muted-foreground">
              {product.description}
            </p>

          </div>

          {/* INFO CARDS */}

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

            {/* CATEGORY */}

            <div className="rounded-xl border border-border bg-card/40 p-6 transition-colors hover:border-primary/30">

              <Factory className="size-5 text-primary" />

              <p className="mt-5 font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                Category
              </p>

              <p className="mt-2 text-lg font-semibold text-foreground">
                {product.category}
              </p>

            </div>

            {/* COMPATIBILITY */}

            <div className="rounded-xl border border-border bg-card/40 p-6 transition-colors hover:border-primary/30">

              <CheckCircle2 className="size-5 text-primary" />

              <p className="mt-5 font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                Compatibility
              </p>

              <div className="mt-3 flex flex-wrap gap-2">

                {product.compatibility.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-border bg-background/60 px-3 py-1.5 text-xs text-foreground"
                  >
                    {item}
                  </span>
                ))}

              </div>

            </div>

            {/* PRODUCT TYPE */}

            <div className="rounded-xl border border-border bg-card/40 p-6 transition-colors hover:border-primary/30">

              <ShieldCheck className="size-5 text-primary" />

              <p className="mt-5 font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                Product Specification
              </p>

              <p className="mt-2 text-lg font-semibold text-foreground">
                {product.spec}
              </p>

            </div>

          </div>

        </div>
      </section>

      {/* ===================================================== */}
      {/* TECHNICAL SPECIFICATIONS */}
      {/* ===================================================== */}

      <section className="border-b border-border py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="max-w-2xl">

            <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
              Technical Details
            </p>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground">
              Product specifications
            </h2>

            <p className="mt-4 leading-relaxed text-muted-foreground">
              Key product information available for this product.
              Detailed technical drawings and pressure ratings are available
              on request.
            </p>

          </div>

          {/* SPEC TABLE */}

          <div className="mt-10 overflow-hidden rounded-xl border border-border">

            <div className="grid grid-cols-[1fr_1.2fr] border-b border-border bg-card/60 px-5 py-4 sm:px-6">

              <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                Parameter
              </span>

              <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                Details
              </span>

            </div>

            {product.specifications.map((specification, index) => (
              <div
                key={specification.label}
                className={`grid grid-cols-[1fr_1.2fr] px-5 py-4 sm:px-6 ${
                  index !== product.specifications.length - 1
                    ? 'border-b border-border'
                    : ''
                }`}
              >

                <span className="text-sm text-muted-foreground">
                  {specification.label}
                </span>

                <span className="text-sm font-medium text-foreground">
                  {specification.value}
                </span>

              </div>
            ))}

          </div>

        </div>
      </section>

      {/* ===================================================== */}
      {/* APPLICATIONS */}
      {/* ===================================================== */}

      <section className="border-b border-border py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">

            <div>

              <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
                Applications
              </p>

              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground">
                Where this product is used
              </h2>

              <p className="mt-4 leading-relaxed text-muted-foreground">
                Suitable application areas based on the product category and
                intended hydraulic use.
              </p>

            </div>

            <div className="grid gap-3 sm:grid-cols-2">

              {product.applications.map((application) => (
                <div
                  key={application}
                  className="flex items-center gap-3 rounded-xl border border-border bg-card/40 p-5 transition-colors hover:border-primary/30"
                >
                  <CheckCircle2 className="size-5 shrink-0 text-primary" />

                  <span className="text-sm font-medium text-foreground">
                    {application}
                  </span>
                </div>
              ))}

            </div>

          </div>

        </div>
      </section>

      {/* ===================================================== */}
      {/* RELATED PRODUCTS */}
      {/* ===================================================== */}

      {relatedProducts.length > 0 && (
        <section className="border-b border-border py-16 sm:py-20">

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

            <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">

              <div>

                <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
                  Related Products
                </p>

                <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground">
                  Explore similar products
                </h2>

              </div>

              <Link
                href="/catalog"
                className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-foreground"
              >
                View Full Catalog
                <ArrowUpRight className="size-4" />
              </Link>

            </div>

            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

              {relatedProducts.map((relatedProduct) => (
                <Link
                  key={relatedProduct.id}
                  href={`/products/${relatedProduct.id}`}
                  className="group overflow-hidden rounded-xl border border-border bg-card/40 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40"
                >

                  <div className="aspect-square overflow-hidden bg-gradient-to-b from-secondary/40 to-background">

                    <img
                      src={relatedProduct.image}
                      alt={relatedProduct.name}
                      className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />

                  </div>

                  <div className="p-5">

                    <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-primary">
                      {relatedProduct.category}
                    </p>

                    <h3 className="mt-2 text-sm font-semibold leading-snug text-foreground">
                      {relatedProduct.name}
                    </h3>

                    <p className="mt-2 text-xs text-muted-foreground">
                      {relatedProduct.spec}
                    </p>

                    <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-medium text-primary">
                      View Product
                      <ArrowUpRight className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>

                  </div>

                </Link>
              ))}

            </div>

          </div>

        </section>
      )}

      {/* ===================================================== */}
      {/* FINAL CTA */}
      {/* ===================================================== */}

      <section className="py-20 sm:py-24">

        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">

          <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
            Need This Product?
          </p>

          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Get pricing and technical information
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-muted-foreground">
            Tell us about your machinery, application, required size, thread
            type, and quantity. Our team can confirm the appropriate product
            and provide the required technical information.
          </p>

          {/* IMPORTANT:
              This now keeps the selected product ID
              while opening the bulk quote page.
          */}

          <Link
            href={`/bulk-quote?product=${encodeURIComponent(product.id)}`}
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
          >
            Request a Quote
            <ArrowUpRight className="size-4" />
          </Link>

        </div>

      </section>

    </main>
  )
}