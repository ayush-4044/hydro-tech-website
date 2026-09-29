'use client'

import { useEffect, useState } from 'react'
import {
  MessageCircle,
  Rotate3d,
} from 'lucide-react'
import { cn } from '@/lib/utils'

type Product = {
  id: string
  name: string
  series: string
  blurb: string
  image: string
  specs: {
    label: string
    value: string
  }[]
}

const PRODUCTS: Product[] = [
  {
    id: 'coupling',
    name: 'High Pressure Quick Release Coupling',
    series: 'High Pressure QRC',
    blurb:
      'Heavy-duty quick release couplings designed for reliable connection and disconnection in high-pressure hydraulic applications.',
    image: '/qrc_1_transperent.png',
    specs: [
      {
        label: 'Type',
        value: 'Quick Release Coupling',
      },
      {
        label: 'Material',
        value: 'MS Steel',
      },
      {
        label: 'Connection',
        value: 'Male / Female',
      },
      {
        label: 'Application',
        value: 'Hydraulic Equipment',
      },
    ],
  },

  {
    id: 'shaft',
    name: 'Agricultural Hydraulic Quick Coupling',
    series: 'Agri Series',
    blurb:
      'Reliable quick couplings designed for tractors and agricultural equipment, providing secure and efficient hydraulic connections.',
    image: '/qrc_EMS.png',
    specs: [
      {
        label: 'Type',
        value: 'Agricultural Quick Coupling',
      },
      {
        label: 'Material',
        value: 'MS Steel',
      },
      {
        label: 'Connection',
        value: 'Male / Female',
      },
      {
        label: 'Application',
        value: 'Tractors & Agriculture',
      },
    ],
  },

  {
    id: 'valve',
    name: 'Hydraulic Quick Coupling Range',
    series: 'Hydraulic Couplings',
    blurb:
      'A versatile range of precision-manufactured hydraulic couplings available in multiple sizes and configurations for reliable fluid connections.',
    image: '/qrc_all.png',
    specs: [
      {
        label: 'Type',
        value: 'Quick Coupling',
      },
      {
        label: 'Material',
        value: 'MS Steel',
      },
      {
        label: 'Connection',
        value: 'Male / Female',
      },
      {
        label: 'Application',
        value: 'Hydraulic Equipment',
      },
    ],
  },
]

const WHATSAPP_NUMBER = '919328170742'

export function ProductShowcase() {
  const [activeIndex, setActiveIndex] = useState(0)

  /* ===================================================== */
  /* FOOTER PRODUCT SELECTION */
  /* ===================================================== */

  useEffect(() => {
    const handleFooterProductSelection = (
      event: Event,
    ) => {
      const customEvent =
        event as CustomEvent<{
          index?: number
        }>

      const index = customEvent.detail?.index

      if (
        typeof index !== 'number' ||
        index < 0 ||
        index >= PRODUCTS.length
      ) {
        return
      }

      setActiveIndex(index)

      requestAnimationFrame(() => {
        document
          .getElementById('products')
          ?.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          })
      })
    }

    window.addEventListener(
      'select-product',
      handleFooterProductSelection,
    )

    return () => {
      window.removeEventListener(
        'select-product',
        handleFooterProductSelection,
      )
    }
  }, [])

  const activeProduct =
    PRODUCTS[activeIndex] ?? PRODUCTS[0]

  /* ===================================================== */
  /* PRODUCT SELECT */
  /* ===================================================== */

  const handleProductSelect = (
    index: number,
  ) => {
    setActiveIndex(index)
  }

  /* ===================================================== */
  /* WHATSAPP */
  /* ===================================================== */

  const handleWhatsAppEnquiry = (
    productName: string,
  ) => {
    const message = `Hello HYDRO TECH, I am interested in ${productName}. Please share price and availability.`

    const whatsappUrl =
      `https://wa.me/${WHATSAPP_NUMBER}` +
      `?text=${encodeURIComponent(message)}`

    window.open(
      whatsappUrl,
      '_blank',
      'noopener,noreferrer',
    )
  }

  return (
    <section
      id="products"
      className="
        site-section
        scroll-mt-20
      "
    >
      <div className="site-container motion-enter">

        {/* ================================================= */}
        {/* HEADING */}
        {/* ================================================= */}

        <SectionHeading
          eyebrow="Premium Components"
          title="Explore our hydraulic components"
          description="Precision-engineered components designed for demanding industrial and agricultural applications."
        />

        {/* ================================================= */}
        {/* MAIN CONTENT */}
        {/* ================================================= */}

        <div
          className="
            mt-8
            grid
            gap-6
            sm:mt-10
            lg:grid-cols-[1fr_1.4fr]
          "
        >

          {/* ================================================= */}
          {/* PRODUCT SELECTOR */}
          {/* ================================================= */}

          <div
            className="
              relative
              z-20
              flex
              flex-col
              gap-3
            "
          >
            {PRODUCTS.map(
              (product, index) => {
                const isActive =
                  activeIndex === index

                return (
                  <div
                    key={product.id}
                    className={cn(
                      `
                        relative
                        rounded-2xl
                        border
                        p-5
                        transition-all
                        duration-300
                      `,
                      isActive
                        ? `
                          border-primary/60
                          bg-card
                          shadow-[0_18px_40px_rgba(0,0,0,0.18)]
                        `
                        : `
                          border-border
                          bg-card/40
                          hover:border-primary/30
                          hover:bg-card/70
                          hover:shadow-lg
                        `,
                    )}
                  >
                    {/* SELECT PRODUCT */}

                    <button
                      type="button"
                      aria-pressed={isActive}
                      onClick={() =>
                        handleProductSelect(index)
                      }
                      onTouchEnd={(event) => {
                        event.preventDefault()
                        event.stopPropagation()
                        handleProductSelect(index)
                      }}
                      className="
                        group
                        w-full
                        touch-manipulation
                        cursor-pointer
                        select-none
                        text-left
                        outline-none
                      "
                    >
                      {/* TOP ROW */}

                      <div
                        className="
                          flex
                          items-center
                          justify-between
                        "
                      >
                        <span
                          className="
                            pointer-events-none
                            font-mono
                            text-xs
                            uppercase
                            tracking-[0.16em]
                            text-primary
                          "
                        >
                          {product.series}
                        </span>

                        {isActive && (
                          <Rotate3d
                            className="
                              pointer-events-none
                              size-4
                              shrink-0
                              text-primary
                            "
                          />
                        )}
                      </div>

                      {/* PRODUCT NAME */}

                      <h3
                        className="
                          pointer-events-none
                          mt-2
                          text-lg
                          font-semibold
                          leading-snug
                          text-foreground
                        "
                      >
                        {product.name}
                      </h3>

                      {/* DESCRIPTION */}

                      <p
                        className="
                          pointer-events-none
                          mt-1
                          text-sm
                          leading-relaxed
                          text-muted-foreground
                        "
                      >
                        {product.blurb}
                      </p>
                    </button>

                    {/* WHATSAPP BUTTON */}

                    <button
                      type="button"
                      onClick={() =>
                        handleWhatsAppEnquiry(
                          product.name,
                        )
                      }
                      onTouchEnd={(event) => {
                        event.preventDefault()
                        event.stopPropagation()

                        handleWhatsAppEnquiry(
                          product.name,
                        )
                      }}
                      className="
                        relative
                        z-40
                        mt-4
                        inline-flex
                        min-h-10
                        w-full
                        touch-manipulation
                        cursor-pointer
                        items-center
                        justify-center
                        gap-2
                        rounded-md
                        border
                        border-primary/30
                        bg-primary/10
                        px-4
                        py-2.5
                        text-sm
                        font-semibold
                        text-primary
                        transition-all
                        hover:border-primary/60
                        hover:bg-primary/15
                        active:scale-[0.98]
                      "
                    >
                      <MessageCircle className="size-4" />

                      Enquire on WhatsApp
                    </button>
                  </div>
                )
              },
            )}
          </div>

          {/* ================================================= */}
          {/* PRODUCT DISPLAY */}
          {/* ================================================= */}

          <div
            className="
              relative
              overflow-hidden
              rounded-3xl
              border
              border-primary/20
              bg-gradient-to-br
              from-card
              via-card/90
              to-background
              shadow-[0_28px_70px_rgba(0,0,0,0.2)]
            "
          >
            {/* DOT BACKGROUND */}

            <div
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                inset-0
                opacity-[0.05]
              "
              style={{
                backgroundImage:
                  'radial-gradient(circle at center, currentColor 1px, transparent 1px)',
                backgroundSize: '22px 22px',
              }}
            />

            {/* IMAGE */}

            <div
              className="
                pointer-events-none
                relative
                z-0
                flex
                h-[320px]
                w-full
                items-center
                justify-center
                overflow-hidden
                sm:h-[420px]
                lg:h-[460px]
              "
            >
              <img
                key={activeProduct.image}
                src={activeProduct.image}
                alt={activeProduct.name}
                draggable={false}
                className="
                  pointer-events-none
                  max-h-[74%]
                  max-w-[76%]
                  select-none
                  object-contain
                  drop-shadow-[0_20px_30px_rgba(0,0,0,0.5)]
                  transition-all
                  duration-500
                  ease-out
                  sm:max-h-[82%]
                  sm:max-w-[82%]
                "
              />
            </div>

            {/* SPECS */}

            <div
              className="
                relative
                z-10
                border-t
                border-border
                p-4
                sm:p-5
              "
            >
              <div
                className="
                  grid
                  grid-cols-2
                  gap-x-5
                  gap-y-4
                  sm:grid-cols-4
                "
              >
                {activeProduct.specs.map(
                  (spec) => (
                    <div key={spec.label}>
                      <div
                        className="
                          text-[10px]
                          uppercase
                          tracking-wide
                          text-muted-foreground
                        "
                      >
                        {spec.label}
                      </div>

                      <div
                        className="
                          mt-0.5
                          font-mono
                          text-xs
                          font-medium
                          leading-5
                          text-foreground
                          sm:text-sm
                        "
                      >
                        {spec.value}
                      </div>
                    </div>
                  ),
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ============================================================ */
/* SECTION HEADING */
/* ============================================================ */

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
}: {
  eyebrow: string
  title: string
  description?: string
  align?: 'left' | 'center'
}) {
  return (
    <div
      className={cn(
        'max-w-2xl',
        align === 'center' &&
          'mx-auto text-center',
      )}
    >
      <span
        className="
          font-mono
          text-xs
          uppercase
          tracking-[0.2em]
          text-primary
        "
      >
        {eyebrow}
      </span>

      <h2
        className="
          mt-2.5
          text-balance
          text-2xl
          font-semibold
          leading-tight
          tracking-tight
          sm:text-3xl
          lg:text-4xl
        "
      >
        {title}
      </h2>

      {description && (
        <p
          className="
            mt-3
            max-w-2xl
            text-pretty
            text-sm
            leading-6
            text-muted-foreground
            sm:text-base
            sm:leading-relaxed
          "
        >
          {description}
        </p>
      )}
    </div>
  )
}
