'use client'

import React, { useEffect, useState } from 'react'
import {
  CheckCircle2,
  MapPin,
  Phone,
  Loader2,
} from 'lucide-react'

import { Button } from '@/components/ui/button'
import { SectionHeading } from '@/components/product-showcase'

const inputClass =
  'w-full rounded-md border border-input bg-card/60 px-3.5 py-2.5 text-sm text-foreground shadow-sm transition-colors placeholder:text-muted-foreground/70 focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring/40'

const CONTACT_DETAILS = [
  {
    icon: Phone,
    label: 'Phone',
    value:
      '+91 88664 34044 / +91 80006 11118',
  },
  {
    icon: MapPin,
    label: 'Works / Office',
    value:
      'Shed No.3, Plot No.4, Survey No.36, Nr. Falcon Pump, Gondal Highway, Vavdi, Rajkot, Gujarat.',
  },
]

const PRODUCT_CATEGORIES = [
  {
    label: 'Standard QRC',
    value: 'Standard QRC',
  },
  {
    label: 'Tractor QRC',
    value: 'Tractor QRC',
  },
  {
    label: 'Metric QRC',
    value: 'Metric QRC',
  },
  {
    label: 'Fittings',
    value: 'Fittings',
  },
  {
    label: 'Custom / OEM',
    value: 'Custom / OEM',
  },
]

export function Contact() {
  const [submitted, setSubmitted] =
    useState(false)

  const [loading, setLoading] =
    useState(false)

  const [error, setError] =
    useState('')

  const [selectedProduct, setSelectedProduct] =
    useState('')

  const [selectedCategory, setSelectedCategory] =
    useState('')

  useEffect(() => {
    const params =
      new URLSearchParams(
        window.location.search,
      )

    const product =
      params.get('product')?.trim() ?? ''

    const category =
      params.get('category')?.trim() ?? ''

    if (product) {
      setSelectedProduct(product)
    }

    if (category) {
      const matchedCategory =
        PRODUCT_CATEGORIES.find(
          (item) =>
            item.value.toLowerCase() ===
            category.toLowerCase(),
        )

      if (matchedCategory) {
        setSelectedCategory(
          matchedCategory.value,
        )
      }
    }

    if (product || category) {
      window.history.replaceState(
        {},
        '',
        `${window.location.pathname}#contact`,
      )
    }
  }, [])

  async function handleSubmit(
    e: React.FormEvent<HTMLFormElement>,
  ) {
    e.preventDefault()

    setLoading(true)
    setError('')

    const form = e.currentTarget
    const formData = new FormData(form)

    formData.append(
      'access_key',
      '151180bc-88ef-4f1e-a876-85aee9a737a0',
    )

    try {
      const response = await fetch(
        'https://api.web3forms.com/submit',
        {
          method: 'POST',
          body: formData,
        },
      )

      const data =
        await response.json()

      if (data.success) {
        setSubmitted(true)
        form.reset()

        setSelectedProduct('')
        setSelectedCategory('')
      } else {
        setError(
          'Something went wrong. Please try again.',
        )
      }
    } catch (err) {
      setError(
        'Connection failed. Check your internet and try again.',
      )
    } finally {
      setLoading(false)
    }
  }

  return (
    <section
      id="contact"
      className="
        site-section
        scroll-mt-20
      "
    >
      <div className="site-container motion-enter">

        {/* MAIN GRID */}

        <div
          className="
            grid
            gap-10
            lg:grid-cols-[0.85fr_1.15fr]
            lg:gap-14
            xl:gap-16
          "
        >

          {/* ================================================= */}
          {/* LEFT SIDE */}
          {/* ================================================= */}

          <div>
            <SectionHeading
              eyebrow="Get in touch"
              title="Request a quote or technical spec"
              description="Tell us about your machinery and application. Our team will reply within one business day."
            />

            <ul className="
              mt-8
              space-y-4
            ">
              {CONTACT_DETAILS.map(
                (contact) => {
                  const Icon =
                    contact.icon

                  return (
                    <li
                      key={contact.label}
                      className="
                        flex
                        items-start
                        gap-3
                      "
                    >
                      <span
                        className="
                          grid
                          size-10
                          shrink-0
                          place-items-center
                          rounded-lg
                          border
                          border-border
                          bg-card
                          text-primary
                        "
                      >
                        <Icon className="size-5" />
                      </span>

                      <div className="min-w-0">
                        <div
                          className="
                            text-[10px]
                            uppercase
                            tracking-wide
                            text-muted-foreground
                          "
                        >
                          {contact.label}
                        </div>

                        <div
                          className="
                            mt-1
                            text-sm
                            font-medium
                            leading-6
                            text-foreground
                          "
                        >
                          {contact.value}
                        </div>
                      </div>
                    </li>
                  )
                },
              )}
            </ul>
          </div>

          {/* ================================================= */}
          {/* RIGHT SIDE */}
          {/* ================================================= */}

          <div
            className="
              rounded-2xl
              border
              border-primary/20
              bg-card/70
              shadow-[0_24px_65px_rgba(0,0,0,0.18)]
              p-5
              sm:p-7
              lg:p-8
            "
          >

            {/* SUCCESS STATE */}

            {submitted ? (
              <div
                className="
                  flex
                  min-h-[320px]
                  h-full
                  flex-col
                  items-center
                  justify-center
                  text-center
                "
              >
                <span
                  className="
                    grid
                    size-14
                    place-items-center
                    rounded-full
                    bg-primary/15
                    text-primary
                  "
                >
                  <CheckCircle2 className="size-7" />
                </span>

                <h3
                  className="
                    mt-5
                    text-xl
                    font-semibold
                    text-foreground
                  "
                >
                  Enquiry received
                </h3>

                <p
                  className="
                    mt-2
                    max-w-sm
                    text-sm
                    leading-relaxed
                    text-muted-foreground
                  "
                >
                  Thanks for reaching out. The
                  HYDRO TECH team will get back to
                  you shortly.
                </p>

                <Button
                  variant="outline"
                  className="mt-6"
                  onClick={() => {
                    setSubmitted(false)
                    setError('')
                    setSelectedProduct('')
                    setSelectedCategory('')
                  }}
                >
                  Send another enquiry
                </Button>
              </div>
            ) : (

              /* ================================================= */
              /* FORM */
              /* ================================================= */

              <form
                onSubmit={handleSubmit}
                className="
                  grid
                  gap-4
                  sm:gap-5
                "
              >

                {/* NAME + COMPANY */}

                <div className="
                  grid
                  gap-4
                  sm:grid-cols-2
                  sm:gap-5
                ">
                  <Field
                    label="Full name"
                    htmlFor="name"
                  >
                    <input
                      id="name"
                      name="name"
                      required
                      className={inputClass}
                      placeholder="Jane Doe"
                    />
                  </Field>

                  <Field
                    label="Company"
                    htmlFor="company"
                  >
                    <input
                      id="company"
                      name="company"
                      required
                      className={inputClass}
                      placeholder="Acme Agri Ltd."
                    />
                  </Field>
                </div>

                {/* EMAIL + PHONE */}

                <div className="
                  grid
                  gap-4
                  sm:grid-cols-2
                  sm:gap-5
                ">
                  <Field
                    label="Work email"
                    htmlFor="email"
                  >
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className={inputClass}
                      placeholder="jane@acme.com"
                    />
                  </Field>

                  <Field
                    label="Phone"
                    htmlFor="phone"
                  >
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      className={inputClass}
                      placeholder="+91 00000 00000"
                    />
                  </Field>
                </div>

                {/* SELECTED PRODUCT */}

                {selectedProduct && (
                  <Field
                    label="Product you're enquiring about"
                    htmlFor="selected-product"
                  >
                    <div className="relative">
                      <input
                        id="selected-product"
                        name="selected_product"
                        value={selectedProduct}
                        readOnly
                        className={`${inputClass} cursor-default pr-10`}
                      />

                      <CheckCircle2
                        className="
                          pointer-events-none
                          absolute
                          right-3
                          top-1/2
                          size-4
                          -translate-y-1/2
                          text-primary
                        "
                      />
                    </div>

                    <p className="
                      text-xs
                      text-muted-foreground
                    ">
                      Selected from the product page
                    </p>
                  </Field>
                )}

                {/* PRODUCT CATEGORY */}

                <Field
                  label="Product category"
                  htmlFor="interest"
                >
                  <div className="relative">
                    <select
                      id="interest"
                      name="interest"
                      value={selectedCategory}
                      onChange={(e) =>
                        setSelectedCategory(
                          e.target.value,
                        )
                      }
                      required
                      className={`${inputClass} appearance-none pr-10`}
                      style={{
                        colorScheme: 'dark',
                      }}
                    >
                      <option
                        value=""
                        disabled
                        className="
                          bg-[#111214]
                          text-white
                        "
                      >
                        Select product category
                      </option>

                      {PRODUCT_CATEGORIES.map(
                        (category) => (
                          <option
                            key={category.value}
                            value={category.value}
                            className="
                              bg-[#111214]
                              text-white
                            "
                          >
                            {category.label}
                          </option>
                        ),
                      )}
                    </select>

                    <span
                      className="
                        pointer-events-none
                        absolute
                        right-4
                        top-1/2
                        -translate-y-1/2
                        text-muted-foreground
                      "
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="m6 9 6 6 6-6" />
                      </svg>
                    </span>
                  </div>

                  {selectedCategory && (
                    <p className="
                      text-xs
                      leading-5
                      text-muted-foreground
                    ">
                      Automatically selected from this
                      product. You can change it if needed.
                    </p>
                  )}
                </Field>

                {/* MESSAGE */}

                <Field
                  label="Message"
                  htmlFor="message"
                >
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    className={`${inputClass} resize-y`}
                    placeholder="Describe your machine, required specs, and order quantity…"
                  />
                </Field>

                {/* ERROR */}

                {error && (
                  <div
                    className="
                      rounded-md
                      border
                      border-red-500/30
                      bg-red-500/10
                      px-4
                      py-3
                      text-sm
                      text-red-400
                    "
                  >
                    {error}
                  </div>
                )}

                {/* SUBMIT BUTTON */}

                <Button
                  type="submit"
                  size="lg"
                  disabled={loading}
                  className="font-semibold"
                >
                  {loading ? (
                    <>
                      <Loader2 className="
                        mr-2
                        size-4
                        animate-spin
                      " />
                      Sending...
                    </>
                  ) : (
                    'Send enquiry'
                  )}
                </Button>

                {/* PRIVACY */}

                <p className="
                  text-xs
                  leading-5
                  text-muted-foreground
                ">
                  By submitting you agree to be contacted
                  about your enquiry. We never share your
                  details.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string
  htmlFor: string
  children: React.ReactNode
}) {
  return (
    <div className="grid gap-1.5">
      <label
        htmlFor={htmlFor}
        className="
          text-xs
          font-medium
          uppercase
          tracking-wide
          text-muted-foreground
        "
      >
        {label}
      </label>

      {children}
    </div>
  )
}
