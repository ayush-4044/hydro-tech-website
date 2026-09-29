'use client'

import {
  ArrowRight,
  ShieldCheck,
  Award,
  Globe2,
  Gauge,
  Cog,
  CheckCircle2,
} from 'lucide-react'
import { Button } from '@/components/ui/button'

const STATS = [
  {
    value: '15+',
    label: 'Years of Manufacturing Excellence',
  },
  {
    value: '350 BAR',
    label: 'Max Operating Pressure',
  },
  {
    value: '100%',
    label: 'Hydrostatically Pressure Tested',
  },
]

export function Hero() {
  return (
    <section
      id="top"
      className="
        relative
        overflow-hidden
        border-b
        border-border/70
        bg-[radial-gradient(ellipse_at_78%_18%,rgba(198,156,74,0.12),transparent_36%),linear-gradient(180deg,rgba(19,33,51,0.5),transparent_78%)]
      "
    >
      {/* ================================================= */}
      {/* GRID TEXTURE */}
      {/* ================================================= */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.04]
        "
        style={{
          backgroundImage:
            'linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      {/* ================================================= */}
      {/* BACKGROUND GLOW */}
      {/* ================================================= */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-40
          -top-40
          size-[32rem]
          rounded-full
          bg-primary/10
          blur-[120px]
          sm:size-[38rem]
          lg:size-[42rem]
        "
      />

      {/* ================================================= */}
      {/* HERO CONTAINER */}
      {/* ================================================= */}

      <div
        className="
          relative
          mx-auto
          grid
          max-w-7xl
          grid-cols-1
          items-center
          gap-10
          px-4
          pb-14
          pt-24
          sm:gap-12
          sm:px-6
          sm:pb-16
          sm:pt-28
          lg:grid-cols-2
          lg:gap-12
          lg:px-8
          lg:py-20
          xl:gap-16
          xl:py-24
        "
      >
        {/* ================================================= */}
        {/* LEFT CONTENT */}
        {/* ================================================= */}

        <div
          className="
            motion-enter
            flex
            min-w-0
            flex-col
            items-start
          "
        >
          {/* ================================================= */}
          {/* BADGE */}
          {/* ================================================= */}

          <span
            className="
              inline-flex
              max-w-full
              items-center
              gap-2
              rounded-full
              border
              border-border
              bg-card/60
              px-3
              py-1.5
              font-mono
              text-[10px]
              uppercase
              tracking-[0.16em]
              text-muted-foreground
              backdrop-blur-sm
              sm:px-3.5
              sm:text-xs
              sm:tracking-[0.18em]
            "
          >
            <ShieldCheck className="size-4 shrink-0 text-primary" />

            <span>
              Premium Agricultural Hydraulic Components
            </span>
          </span>

          {/* ================================================= */}
          {/* HEADING */}
          {/* ================================================= */}

          <h1
            className="
              mt-5
              max-w-3xl
              text-pretty
              text-[2.45rem]
              font-semibold
              leading-[1.04]
              tracking-[-0.035em]
              sm:mt-6
              sm:text-5xl
              lg:text-[3.65rem]
              xl:text-6xl
            "
          >
            Heavy-Duty{' '}
            <span className="text-primary">
              Hydraulic Couplings.
            </span>

            <br />

            Engineered for zero Leakage.

          </h1>

          {/* ================================================= */}
          {/* DESCRIPTION */}
          {/* ================================================= */}

          <p
            className="
              mt-5
              max-w-xl
              text-pretty
              text-sm
              leading-6
              text-muted-foreground
              sm:mt-6
              sm:text-base
              sm:leading-7
              lg:text-lg
            "
          >
            HYDRO TECH specializes in manufacturing
            high-pressure Quick Release Couplings (QRC)
            and hydraulic fittings engineered for reliable
            performance across agricultural and industrial
            applications.
          </p>

          {/* ================================================= */}
          {/* BUTTONS */}
          {/* ================================================= */}

          <div
            className="
              mt-7
              flex
              w-full
              flex-col
              items-stretch
              gap-3
              sm:mt-8
              sm:w-auto
              sm:flex-row
              sm:items-center
            "
          >
            <Button
              render={<a href="#products" />}
              nativeButton={false}
              size="lg"
              className="
                h-11
                w-full
                px-5
                font-semibold
                sm:w-auto
              "
            >
              Explore Products

              <ArrowRight className="size-4" />
            </Button>

            <a
              href="/HYDRO_TECH_OEM_Catalogue.pdf"
              download="HYDRO_TECH_OEM_Catalogue.pdf"
              data-testid="download-oem-catalog"
              className="
                inline-flex
                h-11
                w-full
                items-center
                justify-center
                gap-2
                rounded-md
                border
                border-input
                bg-background
                px-5
                text-sm
                font-semibold
                text-foreground
                shadow-sm
                transition-colors
                hover:bg-accent
                hover:text-accent-foreground
                sm:w-auto
              "
            >
              Download OEM Catalog
            </a>
          </div>

          {/* ================================================= */}
          {/* FEATURES */}
          {/* ================================================= */}

          <div
            className="
              mt-6
              flex
              flex-col
              items-start
              gap-3
              font-mono
              text-[11px]
              text-muted-foreground
              sm:flex-row
              sm:flex-wrap
              sm:items-center
              sm:gap-x-6
              sm:gap-y-3
              sm:text-xs
            "
          >
            <span className="flex items-center gap-1.5">
              <Award className="size-4 shrink-0 text-primary" />

              Direct-Fit for Major Tractors
            </span>

            <span className="flex items-center gap-1.5">
              <Globe2 className="size-4 shrink-0 text-primary" />

              CNC Machined Precision
            </span>
          </div>

          {/* ================================================= */}
          {/* STATS */}
          {/* ================================================= */}

          <dl
            className="
              mt-8
              grid
              w-full
              max-w-xl
              grid-cols-3
              gap-3
              border-t
              border-border
              pt-5
              sm:mt-10
              sm:gap-5
              sm:pt-6
            "
          >
            {STATS.map((stat) => (
              <div
                key={stat.label}
                className="min-w-0"
              >
                <dt
                  className="
                    font-mono
                    text-lg
                    font-semibold
                    leading-none
                    text-foreground
                    sm:text-2xl
                  "
                >
                  {stat.value}
                </dt>

                <dd
                  className="
                    mt-1.5
                    max-w-[130px]
                    text-[9px]
                    uppercase
                    leading-4
                    tracking-wide
                    text-muted-foreground
                    sm:text-[10px]
                    sm:leading-4
                  "
                >
                  {stat.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        {/* ================================================= */}
        {/* RIGHT PRODUCT SHOWCASE */}
        {/* ================================================= */}

        <div
          className="
            motion-enter-delayed
            relative
            flex
            min-h-[360px]
            items-center
            justify-center
            sm:min-h-[440px]
            lg:min-h-[480px]
            xl:min-h-[520px]
          "
        >
          {/* ================================================= */}
          {/* PRODUCT GLOW */}
          {/* ================================================= */}

          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              left-1/2
              top-1/2
              h-[260px]
              w-[260px]
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              bg-primary/10
              blur-[90px]
              sm:h-[320px]
              sm:w-[320px]
              sm:blur-[100px]
            "
          />

          {/* ================================================= */}
          {/* PRODUCT SHOWCASE CARD */}
          {/* ================================================= */}

          <div
            className="
              relative
              flex
              h-[360px]
              w-full
              max-w-[520px]
              items-center
              justify-center
              overflow-hidden
              rounded-2xl
              border
              border-primary/20
              bg-gradient-to-br
              from-card
              via-card/75
              to-background
              shadow-[0_28px_80px_rgba(0,0,0,0.24)]
              sm:h-[440px]
              sm:rounded-2xl
              lg:h-[480px]
              xl:h-[500px]
            "
          >
            {/* ================================================= */}
            {/* DOTTED BACKGROUND */}
            {/* ================================================= */}

            <div
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                inset-0
                opacity-[0.06]
              "
              style={{
                backgroundImage:
                  'radial-gradient(circle at center, currentColor 1px, transparent 1px)',
                backgroundSize: '24px 24px',
              }}
            />

            {/* ================================================= */}
            {/* RADIAL HIGHLIGHT */}
            {/* ================================================= */}

            <div
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                inset-0
                bg-[radial-gradient(circle_at_center,rgba(255,193,7,0.10),transparent_55%)]
              "
            />

            {/* ================================================= */}
            {/* PRODUCT IMAGE */}
            {/* ================================================= */}

            <div
              className="
                group
                relative
                z-10
                flex
                h-full
                w-full
                items-center
                justify-center
                p-7
                sm:p-10
              "
            >
              <img
                src="/qrc_all.png"
                alt="HYDRO TECH Hydraulic Quick Release Couplings"
                className="
                  max-h-[76%]
                  max-w-[88%]
                  select-none
                  object-contain
                  drop-shadow-[0_30px_40px_rgba(0,0,0,0.65)]
                  transition-transform
                  duration-700
                  ease-out
                  group-hover:scale-105
                "
                draggable={false}
              />
            </div>

            {/* ================================================= */}
            {/* TOP FLOATING LABEL */}
            {/* ================================================= */}

            <div
              className="
                absolute
                left-3
                top-3
                z-20
                rounded-lg
                border
                border-border
                bg-background/80
                px-2.5
                py-2
                backdrop-blur-md
                sm:left-5
                sm:top-5
                sm:px-3
              "
            >
              <div className="flex items-center gap-2">
                <Gauge className="size-4 shrink-0 text-primary" />

                <div>
                  <p
                    className="
                      font-mono
                      text-[8px]
                      uppercase
                      tracking-widest
                      text-muted-foreground
                      sm:text-[9px]
                    "
                  >
                    Performance
                  </p>

                  <p
                    className="
                      text-[10px]
                      font-semibold
                      text-foreground
                      sm:text-xs
                    "
                  >
                    High Pressure QRC
                  </p>
                </div>
              </div>
            </div>

            {/* ================================================= */}
            {/* BOTTOM FLOATING LABEL */}
            {/* ================================================= */}

            <div
              className="
                absolute
                bottom-3
                right-3
                z-20
                rounded-lg
                border
                border-border
                bg-background/80
                px-2.5
                py-2
                backdrop-blur-md
                sm:bottom-5
                sm:right-5
                sm:px-3
              "
            >
              <div className="flex items-center gap-2">
                <Cog className="size-4 shrink-0 text-primary" />

                <div>
                  <p
                    className="
                      font-mono
                      text-[8px]
                      uppercase
                      tracking-widest
                      text-muted-foreground
                      sm:text-[9px]
                    "
                  >
                    Manufacturing
                  </p>

                  <p
                    className="
                      text-[10px]
                      font-semibold
                      text-foreground
                      sm:text-xs
                    "
                  >
                    CNC Machined
                  </p>
                </div>
              </div>
            </div>

            {/* ================================================= */}
            {/* QUALITY INDICATOR */}
            {/* ================================================= */}

            <div
              className="
                absolute
                bottom-3
                left-3
                z-20
                flex
                items-center
                gap-1.5
                rounded-full
                border
                border-border
                bg-background/80
                px-2.5
                py-1.5
                backdrop-blur-md
                sm:bottom-5
                sm:left-5
                sm:gap-2
                sm:px-3
              "
            >
              <CheckCircle2 className="size-3.5 text-primary" />

              <span
                className="
                  font-mono
                  text-[8px]
                  uppercase
                  tracking-widest
                  text-muted-foreground
                  sm:text-[9px]
                "
              >
                Quality Tested
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
