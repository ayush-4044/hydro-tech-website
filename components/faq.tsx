'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'
import { SectionHeading } from '@/components/product-showcase'

const FAQS = [
  {
    question: 'What is a Quick Release Coupling?',
    answer:
      'A Quick Release Coupling (QRC) is a hydraulic connection component designed to connect and disconnect hydraulic lines quickly and securely without requiring complex tools. It is commonly used in agricultural, tractor, industrial, and hydraulic equipment applications.',
  },
  {
    question: 'What pressure do your couplings support?',
    answer:
      'Our product range is designed for demanding hydraulic applications. The exact working pressure depends on the specific coupling series, size, material, and configuration. Please contact our team with your required application and product size for the applicable specification.',
  },
  {
    question: 'What sizes are available?',
    answer:
      'We offer hydraulic quick couplings in multiple sizes and configurations. Available sizes depend on the product series, thread type, and application. Contact us with your required size or machinery model and our team can help identify the appropriate coupling.',
  },
  {
    question: 'Do you supply bulk quantities?',
    answer:
      'Yes. We handle B2B and bulk requirements. Please share the product requirement, quantity, application, and required specifications with our team so we can prepare the appropriate quotation.',
  },
  {
    question: 'Do you provide OEM or custom manufacturing?',
    answer:
      'We support OEM and custom requirements based on product specifications, dimensions, thread configuration, material, finish, and quantity. Share your technical requirement or drawing with our team for further discussion.',
  },
  {
    question: 'How can I request a quotation?',
    answer:
      'You can use the Request a Quote form on this website or contact our team directly through WhatsApp or phone. For faster assistance, include the product name, required size, application, and quantity.',
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] =
    useState<number | null>(null)

  const handleToggle = (index: number) => {
    setOpenIndex((current) =>
      current === index ? null : index,
    )
  }

  return (
    <section
      id="faq"
      className="site-section scroll-mt-20"
    >
      <div className="
        mx-auto
        w-full
        max-w-5xl
        px-4
        sm:px-6
        lg:px-8
      ">
        {/* HEADING */}

        <SectionHeading
          eyebrow="FAQ"
          title="Frequently asked questions"
          description="Find quick answers about our hydraulic quick release couplings, applications, bulk requirements, OEM solutions, and quotations."
          align="center"
        />

        {/* FAQ */}

        <div className="
          mx-auto
          mt-8
          max-w-4xl
          overflow-hidden
          rounded-xl
          border
          border-border
          bg-card/30
          sm:mt-10
        ">
          {FAQS.map((faq, index) => {
            const isOpen =
              openIndex === index

            return (
              <div
                key={faq.question}
                className={cn(
                  'border-b border-border last:border-b-0',
                  isOpen && 'bg-card/60',
                )}
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() =>
                    handleToggle(index)
                  }
                  className="
                    flex
                    min-h-14
                    w-full
                    touch-manipulation
                    items-center
                    justify-between
                    gap-5
                    px-4
                    py-4
                    text-left
                    transition-colors
                    hover:bg-accent/50
                    sm:min-h-16
                    sm:px-6
                  "
                >
                  <span className="
                    text-sm
                    font-semibold
                    leading-6
                    text-foreground
                    sm:text-base
                  ">
                    {faq.question}
                  </span>

                  <ChevronDown
                    className={cn(
                      'size-5 shrink-0 text-primary transition-transform duration-300',
                      isOpen && 'rotate-180',
                    )}
                  />
                </button>

                {isOpen && (
                  <div className="px-4 pb-5 sm:px-6">
                    <p className="
                      max-w-3xl
                      text-sm
                      leading-7
                      text-muted-foreground
                    ">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* CTA */}

        <div className="
          mt-8
          text-center
        ">
          <p className="text-sm text-muted-foreground">
            Still have a question?
          </p>

          <a
            href="/contact"
            className="
              mt-2
              inline-flex
              items-center
              font-mono
              text-xs
              font-semibold
              uppercase
              tracking-[0.16em]
              text-primary
              transition-colors
              hover:text-foreground
            "
          >
            Talk to our team
          </a>
        </div>
      </div>
    </section>
  )
}