'use client'

import { useMemo, useState } from 'react'
import {
  ArrowUpRight,
  Search,
  SlidersHorizontal,
  X,
} from 'lucide-react'
import { SectionHeading } from '@/components/product-showcase'
import { PRODUCTS } from '@/data/products'

const CATEGORIES = [
  'All',
  'Standard QRC',
  'Tractor QRC',
  'Metric QRC',
  'Fittings',
]

export function Catalog() {
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('All')

  const filteredProducts = useMemo(() => {
    const query = search.trim().toLowerCase()

    return PRODUCTS.filter((product) => {
      const matchesCategory =
        category === 'All' ||
        product.category === category

      const matchesSearch =
        !query ||
        product.name.toLowerCase().includes(query) ||
        product.category.toLowerCase().includes(query) ||
        product.spec.toLowerCase().includes(query)

      return matchesCategory && matchesSearch
    })
  }, [search, category])

  const clearFilters = () => {
    setSearch('')
    setCategory('All')
  }

  const hasFilters =
    search.trim() !== '' ||
    category !== 'All'

  return (
    <section
      id="catalog"
      className="site-section scroll-mt-20"
    >
      <div className="site-container">

        {/* HEADER */}

        <div className="
          flex
          flex-col
          gap-5
          sm:flex-row
          sm:items-end
          sm:justify-between
        ">
          <SectionHeading
            eyebrow="Product Catalog"
            title="Engineered families for every machine"
            description="Explore our hydraulic coupling range by product name, category, size, thread, or compatibility."
          />

          <a
            href="/bulk-quote"
            className="
              inline-flex
              shrink-0
              items-center
              gap-1.5
              font-mono
              text-xs
              uppercase
              tracking-[0.16em]
              text-primary
              transition-colors
              hover:text-foreground
            "
          >
            Request full catalog
            <ArrowUpRight className="size-4" />
          </a>
        </div>

        {/* SEARCH + FILTER */}

        <div className="
          mt-8
          rounded-2xl
          border
          border-border
          bg-card/65
          shadow-[0_16px_50px_rgba(0,0,0,0.12)]
          p-3
          sm:mt-10
          sm:p-4
        ">
          <div className="
            flex
            flex-col
            gap-3
            lg:flex-row
            lg:items-center
          ">

            {/* SEARCH */}

            <div className="relative min-w-0 flex-1">
              <Search
                className="
                  pointer-events-none
                  absolute
                  left-3.5
                  top-1/2
                  size-4
                  -translate-y-1/2
                  text-muted-foreground
                "
              />

              <input
                type="text"
                value={search}
                onChange={(e) =>
                  setSearch(e.target.value)
                }
                placeholder="Search products, size, thread, compatibility..."
                className="
                  h-11
                  w-full
                  rounded-lg
                  border
                  border-input
                  bg-background/60
                  pl-10
                  pr-4
                  text-sm
                  text-foreground
                  outline-none
                  transition-all
                  placeholder:text-muted-foreground/70
                  focus:border-primary
                  focus:ring-2
                  focus:ring-primary/20
                "
              />
            </div>

            {/* FILTER */}

            <div className="
              flex
              w-full
              items-center
              gap-2
              lg:w-auto
            ">
              <SlidersHorizontal
                className="
                  size-4
                  shrink-0
                  text-primary
                "
              />

              <div className="relative w-full lg:w-[190px]">
                <select
                  value={category}
                  onChange={(e) =>
                    setCategory(e.target.value)
                  }
                  className="
                    h-11
                    w-full
                    appearance-none
                    rounded-lg
                    border
                    border-input
                    bg-background
                    px-3
                    pr-10
                    text-sm
                    text-foreground
                    outline-none
                    transition-all
                    focus:border-primary
                    focus:ring-2
                    focus:ring-primary/20
                  "
                >
                  {CATEGORIES.map((item) => (
                    <option
                      key={item}
                      value={item}
                      className="bg-background text-foreground"
                    >
                      {item}
                    </option>
                  ))}
                </select>

                <span className="
                  pointer-events-none
                  absolute
                  right-3
                  top-1/2
                  -translate-y-1/2
                  text-xs
                  text-muted-foreground
                ">
                  ▼
                </span>
              </div>
            </div>

            {/* CLEAR */}

            {hasFilters && (
              <button
                type="button"
                onClick={clearFilters}
                className="
                  inline-flex
                  h-11
                  shrink-0
                  items-center
                  justify-center
                  gap-2
                  rounded-lg
                  border
                  border-border
                  px-4
                  text-sm
                  text-muted-foreground
                  transition-colors
                  hover:border-primary/40
                  hover:text-foreground
                "
              >
                <X className="size-4" />
                Clear
              </button>
            )}
          </div>

          {/* CATEGORY CHIPS */}

          <div className="
            mt-3
            flex
            flex-wrap
            gap-2
          ">
            {CATEGORIES.map((item) => {
              const active = category === item

              return (
                <button
                  key={item}
                  type="button"
                  onClick={() =>
                    setCategory(item)
                  }
                  className={[
                    'rounded-full border px-3.5 py-1.5 text-xs font-medium transition-all',
                    active
                      ? 'border-primary bg-primary text-primary-foreground shadow-[0_0_20px_rgba(234,179,8,0.15)]'
                      : 'border-border bg-background/40 text-muted-foreground hover:border-primary/40 hover:text-foreground',
                  ].join(' ')}
                >
                  {item}
                </button>
              )
            })}
          </div>
        </div>

        {/* RESULT INFO */}

        <div className="
          mt-7
          flex
          items-end
          justify-between
        ">
          <div>
            <p className="
              font-mono
              text-xs
              uppercase
              tracking-[0.14em]
              text-muted-foreground
            ">
              Product Range
            </p>

            <p className="mt-1 text-sm text-foreground">
              <span className="font-semibold">
                {filteredProducts.length}
              </span>{' '}
              {filteredProducts.length === 1
                ? 'product'
                : 'products'}{' '}
              found
            </p>
          </div>
        </div>

        {/* PRODUCTS */}

        {filteredProducts.length > 0 ? (
          <div className="
            mt-5
            grid
            grid-cols-1
            gap-4
            sm:grid-cols-2
            lg:grid-cols-4
          ">
            {filteredProducts.map((item) => (
              <article
                key={item.id}
                className="
                  group
                  relative
                  flex
                  flex-col
                  overflow-hidden
                  rounded-2xl
                  border
                  border-border
                  bg-card/70
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-primary/40
                  hover:shadow-[0_18px_45px_rgba(0,0,0,0.22)]
                "
              >
                {/* IMAGE */}

                <div className="
                  relative
                  aspect-square
                  overflow-hidden
                  bg-gradient-to-b
                   from-secondary/60
                   to-background
                ">
                  <img
                    src={
                      item.image ||
                      '/placeholder.svg'
                    }
                    alt={item.name}
                    className="
                      size-full
                      object-contain
                      p-7
                      transition-transform
                      duration-500
                      group-hover:scale-105
                    "
                    loading="lazy"
                  />

                  <span className="
                    absolute
                    left-3
                    top-3
                    rounded-full
                    border
                    border-border
                    bg-background/70
                    px-2.5
                    py-1
                    font-mono
                    text-[10px]
                    uppercase
                    tracking-wide
                    text-muted-foreground
                    backdrop-blur
                  ">
                    {item.category}
                  </span>
                </div>

                {/* CONTENT */}

                <div className="
                  flex
                  flex-1
                  flex-col
                  p-4
                  sm:p-5
                ">
                  <h3 className="
                    text-base
                    font-semibold
                    leading-snug
                    text-foreground
                  ">
                    {item.name}
                  </h3>

                  <p className="
                    mt-1.5
                    font-mono
                    text-xs
                    text-muted-foreground
                  ">
                    {item.spec}
                  </p>

                  <a
                    href={`/products/${item.id}`}
                    className="
                      mt-4
                      inline-flex
                      items-center
                      gap-1.5
                      text-sm
                      font-medium
                      text-primary
                      transition-all
                      group-hover:gap-2.5
                    "
                  >
                    View Details
                    <ArrowUpRight className="size-4" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="
            mt-5
            rounded-xl
            border
            border-dashed
            border-border
            bg-card/30
            px-5
            py-14
            text-center
          ">
            <div className="
              mx-auto
              flex
              size-12
              items-center
              justify-center
              rounded-full
              border
              border-border
              bg-background
            ">
              <Search className="size-5 text-muted-foreground" />
            </div>

            <h3 className="
              mt-4
              text-lg
              font-semibold
              text-foreground
            ">
              No products found
            </h3>

            <p className="
              mx-auto
              mt-2
              max-w-md
              text-sm
              text-muted-foreground
            ">
              We couldn't find any products matching your search or selected category.
            </p>

            <button
              type="button"
              onClick={clearFilters}
              className="
                mt-5
                inline-flex
                items-center
                gap-2
                rounded-lg
                border
                border-primary/40
                px-4
                py-2
                text-sm
                font-medium
                text-primary
                transition-colors
                hover:bg-primary
                hover:text-primary-foreground
              "
            >
              <X className="size-4" />
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
