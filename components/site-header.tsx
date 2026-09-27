'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const NAV = [
  {
    label: 'Products',
    href: '/products',
  },
  {
    label: 'Catalog',
    href: '/catalog',
  },
  {
    label: 'About',
    href: '/about',
  },
  {
    label: 'FAQ',
    href: '/faq',
  },
  {
    label: 'Contact',
    href: '/contact',
  },
]

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  /* ===================================================== */
  /* HEADER SCROLL */
  /* ===================================================== */

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24)
    }

    handleScroll()

    window.addEventListener('scroll', handleScroll, {
      passive: true,
    })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  /* ===================================================== */
  /* ESCAPE */
  /* ===================================================== */

  useEffect(() => {
    if (!open) return

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false)
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [open])

  /* ===================================================== */
  /* BODY SCROLL LOCK */
  /* ===================================================== */

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }

    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  /* ===================================================== */
  /* CLOSE MENU ON DESKTOP */
  /* ===================================================== */

  useEffect(() => {
    const mediaQuery = window.matchMedia(
      '(min-width: 768px)',
    )

    const handleChange = (
      event: MediaQueryListEvent,
    ) => {
      if (event.matches) {
        setOpen(false)
      }
    }

    mediaQuery.addEventListener(
      'change',
      handleChange,
    )

    return () => {
      mediaQuery.removeEventListener(
        'change',
        handleChange,
      )
    }
  }, [])

  /* ===================================================== */
  /* CLOSE MENU */
  /* ===================================================== */

  const closeMenu = () => {
    setOpen(false)
  }

  /* ===================================================== */
  /* MOBILE MENU TOGGLE */
  /* ===================================================== */

  const toggleMenu = () => {
    setOpen((current) => !current)
  }

  return (
    <>
      {/* ================================================= */}
      {/* HEADER */}
      {/* ================================================= */}

      <header
        className={cn(
          `
            fixed
            inset-x-0
            top-0
            z-[9999]
            w-full
            transition-all
            duration-300
          `,
          scrolled
            ? `
              border-b
              border-border
              bg-background/95
              backdrop-blur-md
            `
            : `
              border-b
              border-transparent
              bg-background/90
              backdrop-blur-sm
            `,
        )}
      >
        {/* ================================================= */}
        {/* HEADER CONTENT */}
        {/* ================================================= */}

        <div
          className="
            relative
            z-[10000]
            mx-auto
            flex
            h-16
            max-w-7xl
            items-center
            justify-between
            px-4
            sm:px-6
            lg:px-8
          "
        >
          {/* ================================================= */}
          {/* LOGO */}
          {/* ================================================= */}

          <Link
            href="/"
            onClick={closeMenu}
            className="
              flex
              items-center
              gap-3
            "
          >
            <img
              src="/ht_logo.png"
              alt="Hydro Tech Logo"
              draggable={false}
              className="
                size-8
                rounded-full
                object-cover
                shadow-sm
              "
            />

            <span
              className="
                font-mono
                text-base
                font-bold
                uppercase
                tracking-[0.15em]
                text-foreground
              "
            >
              HYDRO{' '}
              <span className="text-primary">
                TECH
              </span>
            </span>
          </Link>

          {/* ================================================= */}
          {/* DESKTOP NAV */}
          {/* ================================================= */}

          <nav
            className="
              hidden
              items-center
              gap-7
              md:flex
            "
          >
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="
                  text-sm
                  font-medium
                  text-muted-foreground
                  transition-colors
                  hover:text-foreground
                "
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* ================================================= */}
          {/* DESKTOP CTA */}
          {/* ================================================= */}

          <div className="hidden md:block">
            <Button
              render={
                <Link href="/bulk-quote" />
              }
              nativeButton={false}
              className="font-semibold"
            >
              Request a Quote
            </Button>
          </div>

          {/* ================================================= */}
          {/* MOBILE MENU BUTTON */}
          {/* ================================================= */}

          <button
            type="button"
            aria-label={
              open
                ? 'Close navigation menu'
                : 'Open navigation menu'
            }
            aria-expanded={open}
            aria-controls="mobile-navigation"
            onClick={toggleMenu}
            className="
              relative
              z-[10002]
              grid
              size-10
              touch-manipulation
              select-none
              place-items-center
              rounded-md
              border
              border-border
              bg-background
              text-foreground
              outline-none
              transition-colors
              active:bg-accent
              md:hidden
            "
          >
            {open ? (
              <X
                className="
                  pointer-events-none
                  size-5
                "
              />
            ) : (
              <Menu
                className="
                  pointer-events-none
                  size-5
                "
              />
            )}
          </button>
        </div>

        {/* ================================================= */}
        {/* MOBILE DRAWER */}
        {/* ================================================= */}

        {open && (
          <>
            {/* BACKDROP */}

            <div
              className="
                fixed
                inset-0
                z-[9997]
                bg-black/60
                md:hidden
              "
              onClick={closeMenu}
              aria-hidden="true"
            />

            {/* DRAWER */}

            <div
              id="mobile-navigation"
              className="
                absolute
                left-0
                right-0
                top-16
                z-[10001]
                border-t
                border-border
                bg-background
                shadow-2xl
                md:hidden
              "
            >
              <nav
                className="
                  mx-auto
                  flex
                  max-w-7xl
                  flex-col
                  gap-1
                  px-4
                  py-4
                  sm:px-6
                "
              >
                {NAV.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={closeMenu}
                    className="
                      flex
                      min-h-12
                      w-full
                      touch-manipulation
                      select-none
                      items-center
                      rounded-lg
                      px-4
                      py-3
                      text-sm
                      font-medium
                      text-muted-foreground
                      transition-colors
                      active:bg-accent
                      hover:bg-accent
                      hover:text-foreground
                    "
                  >
                    {item.label}
                  </Link>
                ))}

                {/* REQUEST QUOTE */}

                <Button
                  render={
                    <Link
                      href="/bulk-quote"
                      onClick={closeMenu}
                    />
                  }
                  nativeButton={false}
                  className="
                    mt-3
                    min-h-12
                    w-full
                    font-semibold
                  "
                >
                  Request a Quote
                </Button>
              </nav>
            </div>
          </>
        )}
      </header>
    </>
  )
}