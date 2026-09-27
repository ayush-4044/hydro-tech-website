'use client'

import { useEffect, useState } from 'react'
import { Maximize2, X } from 'lucide-react'

type ProductImageViewerProps = {
  image: string
  name: string
  category: string
}

export function ProductImageViewer({
  image,
  name,
  category,
}: ProductImageViewerProps) {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (!isOpen) {
      document.body.style.overflow = ''
      return
    }

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false)
      }
    }

    window.addEventListener('keydown', handleEscape)
    document.body.style.overflow = 'hidden'

    return () => {
      window.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = ''
    }
  }, [isOpen])

  return (
    <>
      {/* PRODUCT IMAGE AREA */}
      <div className="relative aspect-square w-full">
        {/* PRODUCT IMAGE */}
        <div className="absolute inset-0 flex items-center justify-center p-8 sm:p-12 lg:p-16">
          <img
            src={image}
            alt={name}
            className="h-full w-full object-contain drop-shadow-[0_25px_35px_rgba(0,0,0,0.5)]"
          />
        </div>

        {/* CATEGORY */}
        <div className="absolute left-5 top-5 z-30">
          <span className="inline-flex rounded-full border border-border bg-background/90 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground backdrop-blur">
            {category}
          </span>
        </div>

        {/* VIEW IMAGE BUTTON */}
        <div className="absolute right-5 top-5 z-50">
          <button
            type="button"
            onClick={() => setIsOpen(true)}
            aria-label="View Image"
            title="View Image"
            data-testid="view-image-button"
            className="group inline-flex size-9 items-center justify-center rounded-full border border-border bg-background/90 text-muted-foreground shadow-sm backdrop-blur transition-all duration-300 hover:border-primary/50 hover:text-primary"
          >
            <Maximize2 className="size-4 transition-transform duration-300 group-hover:scale-110" />
          </button>
        </div>
      </div>

      {/* FULLSCREEN IMAGE VIEWER */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Product Image Viewer"
        className={
          isOpen
            ? 'fixed inset-0 z-[99999] flex items-center justify-center bg-black/95 p-4 sm:p-8'
            : 'hidden'
        }
        onClick={() => setIsOpen(false)}
      >
        {/* CLOSE BUTTON */}
        <button
          type="button"
          aria-label="Close"
          title="Close"
          data-testid="close-image-button"
          onClick={(event) => {
            event.stopPropagation()
            setIsOpen(false)
          }}
          className="fixed right-5 top-5 z-[100000] flex size-12 items-center justify-center rounded-full border-2 border-primary bg-black text-white transition-all duration-200 hover:bg-primary hover:text-black"
        >
          <X className="size-6" />

          {/* Accessible text for Playwright / screen readers */}
          <span className="sr-only">Close</span>
        </button>

        {/* IMAGE */}
        <div
          className="flex max-h-[90vh] max-w-[95vw] items-center justify-center"
          onClick={(event) => event.stopPropagation()}
        >
          <img
            src={image}
            alt={name}
            className="max-h-[85vh] max-w-[90vw] object-contain"
          />
        </div>

        {/* PRODUCT INFORMATION */}
        <div className="fixed bottom-6 left-1/2 z-[100000] -translate-x-1/2 rounded-lg border border-white/20 bg-black px-5 py-3 text-center">
          <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-primary">
            {category}
          </p>

          <p className="mt-1 text-sm font-semibold text-white">
            {name}
          </p>
        </div>
      </div>
    </>
  )
}