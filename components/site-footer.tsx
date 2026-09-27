import Link from 'next/link'

const COLUMNS = [
  {
    title: 'Products',
    links: [
      {
        name: 'All Products',
        href: '/products',
      },
      {
        name: 'Product Catalog',
        href: '/catalog',
      },
      {
        name: 'Bulk Quote',
        href: '/bulk-quote',
      },
    ],
  },
  {
    title: 'Company',
    links: [
      {
        name: 'About Us',
        href: '/about',
      },
      {
        name: 'Our Products',
        href: '/products',
      },
      {
        name: 'Product Catalog',
        href: '/catalog',
      },
    ],
  },
  {
    title: 'Support',
    links: [
      {
        name: 'Request a Quote',
        href: '/bulk-quote',
      },
      {
        name: 'FAQ',
        href: '/faq',
      },
      {
        name: 'Contact Us',
        href: '/contact',
      },
    ],
  },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-card/30">
      <div
        className="
          mx-auto
          max-w-7xl
          px-4
          py-10
          sm:px-6
          sm:py-12
          lg:px-8
        "
      >
        {/* ================================================= */}
        {/* FOOTER CONTENT */}
        {/* ================================================= */}

        <div
          className="
            grid
            gap-8
            sm:gap-10
            lg:grid-cols-[1.5fr_1fr_1fr_1fr]
            lg:gap-8
            xl:gap-12
          "
        >
          {/* ================================================= */}
          {/* LOGO & DESCRIPTION */}
          {/* ================================================= */}

          <div>
            <Link
              href="/"
              className="inline-flex items-center gap-2.5"
            >
              <img
                src="/ht_logo.png"
                alt="Hydro Tech Logo"
                draggable={false}
                className="
                  size-9
                  rounded-full
                  object-cover
                  shadow-sm
                "
              />

              <span
                className="
                  font-mono
                  text-sm
                  font-semibold
                  uppercase
                  tracking-[0.2em]
                  text-foreground
                "
              >
                HYDRO{' '}
                <span className="text-primary">
                  TECH
                </span>
              </span>
            </Link>

            <p
              className="
                mt-3
                max-w-sm
                text-sm
                leading-6
                text-muted-foreground
              "
            >
              Premium quality Quick Release Couplings
              (QRC) and hydraulic components. Proudly
              manufactured by Radhe Enterprise, Rajkot.
            </p>

            <Link
              href="/products"
              className="
                mt-5
                inline-flex
                items-center
                text-xs
                font-medium
                text-primary
                transition-colors
                hover:text-foreground
              "
            >
              Explore Products
            </Link>
          </div>

          {/* ================================================= */}
          {/* FOOTER COLUMNS */}
          {/* ================================================= */}

          {COLUMNS.map((column) => (
            <div key={column.title}>
              <h4
                className="
                  font-mono
                  text-xs
                  font-semibold
                  uppercase
                  tracking-[0.16em]
                  text-foreground
                "
              >
                {column.title}
              </h4>

              <ul className="mt-3 space-y-2">
                {column.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="
                        inline-flex
                        text-sm
                        leading-6
                        text-muted-foreground
                        transition-colors
                        hover:text-foreground
                      "
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* ================================================= */}
        {/* BOTTOM */}
        {/* ================================================= */}

        <div
          className="
            mt-9
            flex
            flex-col
            items-start
            justify-between
            gap-4
            border-t
            border-border
            pt-5
            sm:mt-10
            sm:flex-row
            sm:items-center
          "
        >
          <p className="text-xs leading-5 text-muted-foreground">
            © {new Date().getFullYear()} Radhe Enterprise
            (Brand: HYDRO TECH). All rights reserved.
          </p>

          <div className="flex items-center gap-4 sm:gap-5">
            <Link
              href="/faq"
              className="
                text-xs
                text-muted-foreground
                transition-colors
                hover:text-foreground
              "
            >
              FAQ
            </Link>

            <Link
              href="/contact"
              className="
                text-xs
                text-muted-foreground
                transition-colors
                hover:text-foreground
              "
            >
              Contact
            </Link>

            <Link
              href="/bulk-quote"
              className="
                text-xs
                font-medium
                text-primary
                transition-colors
                hover:text-foreground
              "
            >
              Request a Quote
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}