'use client'

import { useEffect, useState } from 'react'
import {
  Check,
  ChevronDown,
  MessageCircle,
  Minus,
  Plus,
  Send,
  ShoppingCart,
} from 'lucide-react'

import { PRODUCTS as CATALOG_PRODUCTS } from '@/data/products'

const SIZES = ['1/4"', '3/8"', '1/2"', '3/4"', '1"', 'Custom Size']

const APPLICATIONS = [
  'Tractor',
  'Agricultural Equipment',
  'Hydraulic Equipment',
  'Industrial Machinery',
  'Other',
]

const WHATSAPP_NUMBER = '919328170742'

const DEFAULT_PRODUCT_ID = CATALOG_PRODUCTS[0]?.id ?? ''

export function BulkOrderCalculator() {
  const [productId, setProductId] = useState(DEFAULT_PRODUCT_ID)
  const [quantity, setQuantity] = useState(100)
  const [size, setSize] = useState('1/2"')
  const [application, setApplication] = useState('Tractor')
  const [notes, setNotes] = useState('')

  // Read product ID from URL
  // Example:
  // /bulk-quote?product=qrc-eicher
  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const requestedProductId = params.get('product')

    if (
      requestedProductId &&
      CATALOG_PRODUCTS.some(
        (item) => item.id === requestedProductId,
      )
    ) {
      setProductId(requestedProductId)
    }
  }, [])

  // Find selected product from central products data
  const selectedProduct =
    CATALOG_PRODUCTS.find((item) => item.id === productId) ??
    CATALOG_PRODUCTS[0]

  const handleQuantityChange = (value: number) => {
    if (value < 1) {
      setQuantity(1)
      return
    }

    setQuantity(value)
  }

  const handleWhatsApp = () => {
    const message = [
      'Hello HYDRO TECH,',
      '',
      'I am interested in getting a bulk quotation.',
      '',
      `Product: ${selectedProduct?.name ?? ''}`,
      `Quantity: ${quantity}`,
      `Size: ${size}`,
      `Application: ${application}`,
      notes ? `Notes: ${notes}` : '',
      '',
      'Please share price and availability.',
    ]
      .filter(Boolean)
      .join('\n')

    const whatsappUrl =
      `https://wa.me/${WHATSAPP_NUMBER}?text=` +
      encodeURIComponent(message)

    window.open(
      whatsappUrl,
      '_blank',
      'noopener,noreferrer',
    )
  }

  return (
    <section className="site-section scroll-mt-20">
      <div className="site-container motion-enter">

        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">
            Bulk Orders
          </p>

          <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Request a Bulk Quote
          </h2>

          <p className="mt-3 text-base text-muted-foreground">
            Tell us what you need and our team will provide
            pricing and availability.
          </p>
        </div>

        {/* Main Card */}
        <div className="mx-auto mt-8 max-w-5xl sm:mt-10">
          <div className="grid overflow-hidden rounded-3xl border border-primary/20 bg-card/90 shadow-[0_28px_75px_rgba(0,0,0,0.2)] lg:grid-cols-[1.2fr_0.8fr]">

            {/* =========================
                LEFT SIDE - FORM
            ========================== */}

            <div className="p-5 sm:p-7 lg:p-8">
              <div className="space-y-6">

                {/* Product */}
                <div>
                  <label
                    htmlFor="bulk-product"
                    className="mb-2 block text-sm font-medium text-foreground"
                  >
                    Product
                  </label>

                  <CustomDropdown
                    value={selectedProduct?.name ?? ''}
                    options={CATALOG_PRODUCTS.map(
                      (item) => ({
                        label: item.name,
                        value: item.id,
                      }),
                    )}
                    onChange={(value) =>
                      setProductId(value)
                    }
                  />
                </div>

                {/* Quantity */}
                <div>
                  <label
                    htmlFor="bulk-quantity"
                    className="mb-2 block text-sm font-medium text-foreground"
                  >
                    Quantity
                  </label>

                  <div className="flex h-12 overflow-hidden rounded-lg border border-border bg-background">

                    <button
                      type="button"
                      onClick={() =>
                        handleQuantityChange(quantity - 1)
                      }
                      className="flex w-12 items-center justify-center border-r border-border text-muted-foreground transition hover:bg-muted hover:text-foreground"
                      aria-label="Decrease quantity"
                    >
                      <Minus className="h-4 w-4" />
                    </button>

                    <input
                      id="bulk-quantity"
                      type="number"
                      min={1}
                      value={quantity}
                      onChange={(event) =>
                        handleQuantityChange(
                          Number(event.target.value) || 1,
                        )
                      }
                      className="min-w-0 flex-1 bg-transparent px-4 text-center text-sm text-foreground outline-none"
                    />

                    <button
                      type="button"
                      onClick={() =>
                        handleQuantityChange(quantity + 1)
                      }
                      className="flex w-12 items-center justify-center border-l border-border text-muted-foreground transition hover:bg-muted hover:text-foreground"
                      aria-label="Increase quantity"
                    >
                      <Plus className="h-4 w-4" />
                    </button>

                  </div>
                </div>

                {/* Size */}
                <div>
                  <label
                    htmlFor="bulk-size"
                    className="mb-2 block text-sm font-medium text-foreground"
                  >
                    Size
                  </label>

                  <CustomDropdown
                    value={size}
                    options={SIZES.map((item) => ({
                      label: item,
                      value: item,
                    }))}
                    onChange={setSize}
                  />
                </div>

                {/* Application */}
                <div>
                  <label
                    htmlFor="bulk-application"
                    className="mb-2 block text-sm font-medium text-foreground"
                  >
                    Application
                  </label>

                  <CustomDropdown
                    value={application}
                    options={APPLICATIONS.map(
                      (item) => ({
                        label: item,
                        value: item,
                      }),
                    )}
                    onChange={setApplication}
                  />
                </div>

                {/* Additional Notes */}
                <div>
                  <label
                    htmlFor="bulk-notes"
                    className="mb-2 block text-sm font-medium text-foreground"
                  >
                    Additional Notes
                  </label>

                  <textarea
                    id="bulk-notes"
                    value={notes}
                    onChange={(event) =>
                      setNotes(event.target.value)
                    }
                    rows={4}
                    placeholder="Tell us about your requirements..."
                    className="w-full resize-none rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition placeholder:text-muted-foreground focus:border-primary"
                  />
                </div>

              </div>
            </div>

            {/* =========================
                RIGHT SIDE - SUMMARY
            ========================== */}

            <div className="border-t border-border bg-muted/30 p-5 sm:p-7 lg:border-l lg:border-t-0 lg:p-8">

              {/* Summary Header */}
              <div className="flex items-center gap-3">

                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <ShoppingCart className="h-5 w-5" />
                </div>

                <div>
                  <h3 className="font-semibold text-foreground">
                    Quote Summary
                  </h3>

                  <p className="text-xs text-muted-foreground">
                    Review your requirements
                  </p>
                </div>

              </div>

              {/* Summary Details */}
              <div className="mt-6 space-y-4">

                {/* Product */}
                <div className="rounded-lg border border-border bg-background p-4">
                  <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                    Product
                  </p>

                  <p className="mt-1 text-sm font-semibold text-foreground">
                    {selectedProduct?.name ?? ''}
                  </p>

                  {selectedProduct?.category && (
                    <p className="mt-1 text-xs text-muted-foreground">
                      {selectedProduct.category}
                    </p>
                  )}
                </div>

                {/* Quantity + Size */}
                <div className="grid grid-cols-2 gap-3">

                  <div className="rounded-lg border border-border bg-background p-4">
                    <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                      Quantity
                    </p>

                    <p className="mt-1 text-sm font-semibold text-foreground">
                      {quantity}
                    </p>
                  </div>

                  <div className="rounded-lg border border-border bg-background p-4">
                    <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                      Size
                    </p>

                    <p className="mt-1 text-sm font-semibold text-foreground">
                      {size}
                    </p>
                  </div>

                </div>

                {/* Application */}
                <div className="rounded-lg border border-border bg-background p-4">
                  <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                    Application
                  </p>

                  <p className="mt-1 text-sm font-semibold text-foreground">
                    {application}
                  </p>
                </div>

                {/* Notes */}
                {notes && (
                  <div className="rounded-lg border border-border bg-background p-4">
                    <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                      Notes
                    </p>

                    <p className="mt-1 whitespace-pre-wrap text-sm text-foreground">
                      {notes}
                    </p>
                  </div>
                )}

                {/* Information */}
                <div className="rounded-lg border border-primary/20 bg-primary/5 p-4">
                  <div className="flex items-start gap-3">

                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />

                    <p className="text-sm leading-relaxed text-muted-foreground">
                      Our team will review your requirements
                      and share pricing and availability with
                      you.
                    </p>

                  </div>
                </div>

                {/* WhatsApp Button */}
                <button
                  type="button"
                  onClick={handleWhatsApp}
                  className="flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition hover:opacity-90"
                >
                  <MessageCircle className="h-4 w-4" />
                  Get Quote on WhatsApp
                </button>

                {/* Send Requirement */}
                <button
                  type="button"
                  onClick={handleWhatsApp}
                  className="flex w-full items-center justify-center gap-2 rounded-lg border border-border bg-background px-5 py-3 text-sm font-semibold text-foreground transition hover:bg-muted"
                >
                  <Send className="h-4 w-4" />
                  Send Requirement
                </button>

              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

/* ============================================================
   CUSTOM DROPDOWN
============================================================ */

type DropdownOption = {
  label: string
  value: string
}

type CustomDropdownProps = {
  value: string
  options: DropdownOption[]
  onChange: (value: string) => void
}

function CustomDropdown({
  value,
  options,
  onChange,
}: CustomDropdownProps) {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement

      if (!target.closest('[data-custom-dropdown]')) {
        setIsOpen(false)
      }
    }

    document.addEventListener(
      'mousedown',
      handleOutsideClick,
    )

    return () => {
      document.removeEventListener(
        'mousedown',
        handleOutsideClick,
      )
    }
  }, [])

  const selectedOption =
    options.find((option) => option.value === value) ??
    options[0]

  const handleSelect = (option: DropdownOption) => {
    onChange(option.value)
    setIsOpen(false)
  }

  return (
    <div
      className="relative"
      data-custom-dropdown
    >
      {/* Selected Value */}
      <button
        type="button"
        onClick={() => setIsOpen((current) => !current)}
        className="
          flex
          h-12
          w-full
          items-center
          rounded-lg
          border
          border-border
          bg-background
          pl-4
          pr-5
          text-left
          text-sm
          text-foreground
          outline-none
          transition
          hover:border-primary/60
          focus:border-primary
        "
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        <span className="min-w-0 truncate">
          {selectedOption?.label ?? ''}
        </span>

        <ChevronDown
          className={`
            ml-auto
            mr-1
            h-4
            w-4
            shrink-0
            text-muted-foreground
            transition-transform
            duration-200
            ${isOpen ? 'rotate-180' : ''}
          `}
        />
      </button>

      {/* Dropdown Options */}
      {isOpen && (
        <div
          className="
            absolute
            left-0
            right-0
            top-full
            z-50
            mt-2
            max-h-60
            overflow-y-auto
            rounded-lg
            border
            border-border
            bg-background
            p-1
            shadow-xl
          "
          role="listbox"
        >
          {options.map((option) => {
            const isSelected =
              option.value === value

            return (
              <button
                key={option.value}
                type="button"
                onClick={() =>
                  handleSelect(option)
                }
                className={`
                  flex
                  w-full
                  items-center
                  rounded-md
                  px-3
                  py-2.5
                  text-left
                  text-sm
                  transition
                  ${
                    isSelected
                      ? 'bg-primary/10 text-primary'
                      : 'text-foreground hover:bg-muted'
                  }
                `}
                role="option"
                aria-selected={isSelected}
              >
                <span className="min-w-0 flex-1 truncate">
                  {option.label}
                </span>

                {isSelected && (
                  <Check className="ml-3 h-4 w-4 shrink-0 text-primary" />
                )}
              </button>
            )
          })}
        </div>
      )}
    </div>
  )
}
