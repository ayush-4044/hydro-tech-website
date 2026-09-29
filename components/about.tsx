import {
  Factory,
  Gauge,
  Truck,
  Wrench,
} from 'lucide-react'
import { SectionHeading } from '@/components/product-showcase'

const PILLARS = [
  {
    icon: Factory,
    title: 'In-house CNC Machining',
    body: 'State-of-the-art CNC turning and milling under one roof for complete precision and process control.',
  },
  {
    icon: Gauge,
    title: 'Strict Quality Testing',
    body: 'Every batch undergoes rigorous testing to ensure it survives heavy pressure and tough working conditions.',
  },
  {
    icon: Wrench,
    title: 'Custom QRC Solutions',
    body: 'We provide tailored manufacturing for custom sizes and specifications to meet your exact machinery needs.',
  },
  {
    icon: Truck,
    title: 'Fast Delivery',
    body: 'Dedicated and reliable supply chain ensuring fast on-time dispatch and delivery across Gujarat.',
  },
]

export function About() {
  return (
    <section
      id="about"
      className="site-section scroll-mt-20"
    >
      <div className="site-container">
        <div className="
          grid
          gap-10
          lg:grid-cols-2
          lg:gap-14
          xl:gap-16
        ">

          {/* LEFT */}

          <div>
            <SectionHeading
              eyebrow="ABOUT HYDRO TECH"
              title="Building reliable hydraulic connections since 2010"
            />

            <div className="
              mt-6
              max-w-2xl
              space-y-4
              text-pretty
              text-sm
              leading-7
              text-muted-foreground
              sm:text-base
            ">
              <p>
                Founded in 2010, Radhe Enterprise has grown into a trusted manufacturer of premium Quick Release Couplings (QRC) under the brand HYDRO TECH. Operating proudly from Rajkot, Gujarat, we specialize in high-quality hardware for agricultural, tractor, and heavy-equipment industries.
              </p>

              <p>
                We combine the best raw materials with modern in-house CNC machining to deliver precision products. From strict testing protocols to custom size manufacturing, our primary focus remains firmly on delivering 100% quality assured components to our clients all over Gujarat.
              </p>
            </div>

            {/* STATS */}

            <div className="
              mt-8
              grid
              grid-cols-3
              gap-3
              border-t
              border-border
              pt-6
              sm:gap-6
            ">
              {[
                {
                  v: '15+',
                  l: 'Years Experience',
                },
                {
                  v: '500+',
                  l: 'Happy Clients',
                },
                {
                  v: '100%',
                  l: 'Quality Assured',
                },
              ].map((stat) => (
                <div
                  key={stat.l}
                  className="min-w-0"
                >
                  <div className="
                    font-mono
                    text-xl
                    font-semibold
                    text-primary
                    sm:text-2xl
                  ">
                    {stat.v}
                  </div>

                  <div className="
                    mt-1
                    text-[9px]
                    uppercase
                    leading-4
                    tracking-wide
                    text-muted-foreground
                    sm:text-[10px]
                  ">
                    {stat.l}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT */}

          <div className="
            grid
            gap-3
            sm:grid-cols-2
            sm:gap-4
          ">
            {PILLARS.map((pillar) => (
              <div
                key={pillar.title}
                className="
                  rounded-2xl
                  border
                  border-border
                  bg-card/50
                  p-5
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-primary/30
                  hover:shadow-[0_18px_40px_rgba(0,0,0,0.18)]
                  sm:p-6
                "
              >
                <span className="
                  grid
                  size-10
                  place-items-center
                  rounded-lg
                  bg-primary/10
                  text-primary
                ">
                  <pillar.icon className="size-5" />
                </span>

                <h3 className="
                  mt-4
                  text-base
                  font-semibold
                  text-foreground
                ">
                  {pillar.title}
                </h3>

                <p className="
                  mt-2
                  text-sm
                  leading-6
                  text-muted-foreground
                ">
                  {pillar.body}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
