'use client'

import { useMemo, useState } from 'react'
import Link from 'next/link'
import {
  ArrowRight,
  ArrowUpRight,
  Package,
  Search,
} from 'lucide-react'

import { PRODUCTS } from '@/data/products'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { MobileBottomBar } from '@/components/mobile-bottom-bar'

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')

  const categories = useMemo(() => {
    const uniqueCategories = Array.from(
      new Set(PRODUCTS.map((product) => product.category)),
    )

    return ['All', ...uniqueCategories]
  }, [])

  const filteredProducts = useMemo(() => {
    const query = searchQuery.trim().toLowerCase()

    return PRODUCTS.filter((product) => {
      const matchesCategory =
        selectedCategory === 'All' ||
        product.category === selectedCategory

      const matchesSearch =
        query.length === 0 ||
        product.name.toLowerCase().includes(query) ||
        product.category.toLowerCase().includes(query) ||
        product.spec.toLowerCase().includes(query)

      return matchesCategory && matchesSearch
    })
  }, [selectedCategory, searchQuery])

  return (
    <div className="min-h-svh bg-background">
      <SiteHeader />

      <main className="pb-20 md:pb-0">

        {/* ===================================================== */}
        {/* PAGE HERO */}
        {/* ===================================================== */}

        <section className="border-b border-border pt-[4.5rem] sm:pt-20">
          <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
            <div className="max-w-3xl">

              <div className="flex items-center gap-3">
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
                  HYDRO TECH
                </span>

                <span className="h-px w-10 bg-primary/50" />

                <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                  Product Catalog
                </span>
              </div>

              <h1 className="mt-4 text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                Hydraulic Couplings
                <span className="block text-primary">
                  Built for Reliable Connections
                </span>
              </h1>

              <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                Explore our complete range of Quick Release Couplings,
                tractor-specific hydraulic couplings, fittings and other
                hydraulic connection components.
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-4">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Package className="size-4 text-primary" />

                  <span>
                    {PRODUCTS.length} Products Available
                  </span>
                </div>

                <span className="hidden h-4 w-px bg-border sm:block" />

                <span className="text-sm text-muted-foreground">
                  B2B & Bulk Supply
                </span>
              </div>

            </div>
          </div>
        </section>

        {/* ===================================================== */}
        {/* PRODUCTS */}
        {/* ===================================================== */}

        <section className="bg-[linear-gradient(180deg,rgba(24,39,58,0.34),transparent_28rem)] pt-2 pb-8 sm:pt-4 sm:pb-12 lg:pt-6 lg:pb-14">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

            {/* FILTER HEADER */}

            <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">

              <div>
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
                  Product Range
                </p>

                <h2 className="mt-2 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                  Explore Our Products
                </h2>
              </div>

              {/* SEARCH */}

              <div className="relative w-full lg:max-w-sm">
                <Search className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />

                <input
                  type="text"
                  value={searchQuery}
                  onChange={(event) =>
                    setSearchQuery(event.target.value)
                  }
                  placeholder="Search products..."
                  className="h-11 w-full rounded-lg border border-border bg-card/40 pl-11 pr-4 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary/50"
                />
              </div>
            </div>

            {/* CATEGORY FILTER */}

            <div className="mt-6 overflow-x-auto pb-2">
              <div className="flex min-w-max gap-2">
                {categories.map((category) => {
                  const isActive =
                    selectedCategory === category

                  return (
                    <button
                      key={category}
                      type="button"
                      onClick={() =>
                        setSelectedCategory(category)
                      }
                      className={`rounded-full border px-4 py-2 text-xs font-medium transition-all ${
                        isActive
                    ? 'border-primary bg-primary text-primary-foreground shadow-[0_8px_24px_rgba(198,156,74,0.2)]'
                          : 'border-border bg-card/40 text-muted-foreground hover:border-primary/40 hover:text-foreground'
                      }`}
                    >
                      {category}
                    </button>
                  )
                })}
              </div>
            </div>

            {/* RESULT COUNT */}

            <div className="mt-6 flex items-center justify-between border-b border-border pb-4">
              <p className="text-sm text-muted-foreground">
                Showing{' '}
                <span className="font-medium text-foreground">
                  {filteredProducts.length}
                </span>{' '}
                {filteredProducts.length === 1
                  ? 'product'
                  : 'products'}
              </p>

              {(searchQuery ||
                selectedCategory !== 'All') && (
                <button
                  type="button"
                  onClick={() => {
                    setSearchQuery('')
                    setSelectedCategory('All')
                  }}
                  className="text-xs font-medium text-primary transition-colors hover:text-foreground"
                >
                  Clear Filters
                </button>
              )}
            </div>

            {/* PRODUCT GRID */}

            {filteredProducts.length > 0 ? (
              <div className="mt-6 grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6 xl:grid-cols-4">
                {filteredProducts.map((product) => (
                  <Link
                    key={product.id}
                    href={`/products/${product.id}`}
                    className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border/80 bg-card/40 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:bg-card hover:shadow-[0_16px_40px_rgba(0,0,0,0.28)]"
                  >

                    {/* IMAGE */}

                    <div className="relative aspect-[4/3] overflow-hidden border-b border-border/60 bg-gradient-to-br from-secondary/50 via-card/70 to-background sm:aspect-square">

                      <div
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-0 opacity-[0.06] transition-opacity duration-300 group-hover:opacity-[0.1]"
                        style={{
                          backgroundImage:
                            'radial-gradient(circle at center, currentColor 1px, transparent 1px)',
                          backgroundSize: '20px 20px',
                        }}
                      />

                      <img
                        src={product.image}
                        alt={product.name}
                        className="relative size-full object-contain p-7 transition-transform duration-500 ease-out group-hover:scale-105 sm:p-8"
                        loading="lazy"
                      />

                      {/* CATEGORY BADGE */}

                      <div className="absolute left-4 top-4">
                        <span className="rounded-full border border-primary/25 bg-background/90 px-3 py-1.5 font-mono text-[9px] uppercase tracking-[0.12em] text-primary shadow-sm backdrop-blur-sm">
                          {product.category}
                        </span>
                      </div>
                    </div>

                    {/* CONTENT */}

                    <div className="flex flex-1 flex-col p-5 sm:p-6">

                      <h3 className="text-base font-semibold leading-snug text-foreground transition-colors group-hover:text-primary">
                        {product.name}
                      </h3>

                      <p className="mt-2 min-h-[2.75rem] line-clamp-2 text-sm leading-relaxed text-muted-foreground">
                        {product.description}
                      </p>

                      {/* SPEC */}

                      <div className="mt-5 rounded-lg border border-border bg-background/50 px-3 py-2.5">
                        <p className="font-mono text-[9px] uppercase tracking-[0.14em] text-muted-foreground">
                          Specification
                        </p>

                        <p className="mt-1 text-xs font-medium text-foreground">
                          {product.spec}
                        </p>
                      </div>

                      {/* CTA */}

                      <div className="mt-auto flex items-center justify-between border-t border-border/60 pt-5">
                        <span className="inline-flex items-center gap-2 text-xs font-semibold text-primary">
                          View Details

                          <ArrowUpRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </span>

                        <ArrowRight className="size-4 text-muted-foreground transition-all duration-300 group-hover:translate-x-1 group-hover:text-primary" />
                      </div>

                    </div>
                  </Link>
                ))}
              </div>
            ) : (

              /* ================================================= */
              /* NO PRODUCTS */
              /* ================================================= */

                <div className="mt-10 rounded-3xl border border-border bg-card/55 px-6 py-16 text-center shadow-[0_20px_60px_rgba(0,0,0,0.14)]">
                <Package className="mx-auto size-10 text-muted-foreground" />

                <h3 className="mt-5 text-xl font-semibold text-foreground">
                  No Products Found
                </h3>

                <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-muted-foreground">
                  No products match your current search or category
                  filter. Try another search or clear the filters.
                </p>

                <button
                  type="button"
                  onClick={() => {
                    setSearchQuery('')
                    setSelectedCategory('All')
                  }}
                  className="mt-6 inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
                >
                  View All Products

                  <ArrowRight className="size-4" />
                </button>
              </div>
            )}
          </div>
        </section>

        {/* ===================================================== */}
        {/* BULK QUOTE CTA */}
        {/* ===================================================== */}

        <section className="border-t border-border py-12 sm:py-16">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">

            <div className="relative overflow-hidden rounded-3xl border border-primary/25 bg-gradient-to-br from-card via-card/85 to-secondary/50 px-6 py-10 text-center shadow-[0_24px_70px_rgba(0,0,0,0.2)] sm:px-10 sm:py-14">

              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 opacity-[0.04]"
                style={{
                  backgroundImage:
                    'radial-gradient(circle at center, currentColor 1px, transparent 1px)',
                  backgroundSize: '24px 24px',
                }}
              />

              <div className="relative">

                <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
                  Bulk & B2B Enquiries
                </p>

                <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                  Need a larger quantity?
                </h2>

                <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                  Tell us your required product, size, application and
                  quantity. Our team can provide pricing and technical
                  information for your requirement.
                </p>

                <Link
                  href="/bulk-quote"
                  className="mt-7 inline-flex min-h-12 items-center gap-2 rounded-lg bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
                >
                  Request Bulk Quote

                  <ArrowUpRight className="size-4" />
                </Link>

              </div>
            </div>
          </div>
        </section>

      </main>

      <SiteFooter />

      <MobileBottomBar />
    </div>
  )
}
