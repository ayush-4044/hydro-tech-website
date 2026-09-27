'use client'

import { FileText, MessageCircle, Phone } from 'lucide-react'

const WHATSAPP_NUMBER = '919328170742'
const PHONE_NUMBER = '919328170742'

export function MobileBottomBar() {
  const handleQuote = () => {
    window.location.href = '/bulk-quote'
  }

  const handleWhatsApp = () => {
    const message =
      'Hello HYDRO TECH, I would like to enquire about your hydraulic couplings.'

    const whatsappUrl =
      `https://wa.me/${WHATSAPP_NUMBER}?text=` +
      encodeURIComponent(message)

    window.open(
      whatsappUrl,
      '_blank',
      'noopener,noreferrer',
    )
  }

  const handleCall = () => {
    window.location.href = `tel:+${PHONE_NUMBER}`
  }

  return (
    <div
      className="
        fixed
        inset-x-0
        bottom-0
        z-[9990]
        border-t
        border-border
        bg-background/95
        backdrop-blur-md
        md:hidden
      "
    >
      <div className="mx-auto grid h-16 max-w-lg grid-cols-3">

        {/* ================================================= */}
        {/* GET QUOTE */}
        {/* ================================================= */}

        <button
          type="button"
          onClick={handleQuote}
          className="
            flex
            touch-manipulation
            flex-col
            items-center
            justify-center
            gap-1
            text-muted-foreground
            transition-colors
            active:bg-accent
            hover:text-primary
          "
        >
          <FileText className="size-5" />

          <span className="text-[10px] font-medium">
            Get Quote
          </span>
        </button>

        {/* ================================================= */}
        {/* WHATSAPP */}
        {/* ================================================= */}

        <button
          type="button"
          onClick={handleWhatsApp}
          className="
            flex
            touch-manipulation
            flex-col
            items-center
            justify-center
            gap-1
            text-muted-foreground
            transition-colors
            active:bg-accent
            hover:text-primary
          "
        >
          <MessageCircle className="size-5" />

          <span className="text-[10px] font-medium">
            WhatsApp
          </span>
        </button>

        {/* ================================================= */}
        {/* CALL */}
        {/* ================================================= */}

        <button
          type="button"
          onClick={handleCall}
          className="
            flex
            touch-manipulation
            flex-col
            items-center
            justify-center
            gap-1
            text-muted-foreground
            transition-colors
            active:bg-accent
            hover:text-primary
          "
        >
          <Phone className="size-5" />

          <span className="text-[10px] font-medium">
            Call
          </span>
        </button>

      </div>
    </div>
  )
}