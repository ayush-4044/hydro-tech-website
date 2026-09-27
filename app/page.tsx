import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { ProductShowcase } from '@/components/product-showcase'
import { About } from '@/components/about'
import { SiteFooter } from '@/components/site-footer'
import { MobileBottomBar } from '@/components/mobile-bottom-bar'

export default function Page() {
  return (
    <div className="min-h-svh bg-background">
      <SiteHeader />

      <main className="pb-20 md:pb-0">
        <Hero />

        <ProductShowcase />

        <About />
      </main>

      <SiteFooter />

      <MobileBottomBar />
    </div>
  )
}





// import { SiteHeader } from '@/components/site-header'
// import { Hero } from '@/components/hero'
// import { ProductShowcase } from '@/components/product-showcase'
// import { Catalog } from '@/components/catalog'
// import { BulkOrderCalculator } from '@/components/bulk-order-calculator'
// import { About } from '@/components/about'
// import { FAQ } from '@/components/faq'
// import { Contact } from '@/components/contact'
// import { SiteFooter } from '@/components/site-footer'
// import { MobileBottomBar } from '@/components/mobile-bottom-bar'

// export default function Page() {
//   return (
//     <div className="min-h-svh bg-background">
//       <SiteHeader />

//       <main className="pb-20 md:pb-0">
//         <Hero />

//         <ProductShowcase />

//         <Catalog />

//         <BulkOrderCalculator />

//         <About />

//         <FAQ />

//         <Contact />
//       </main>

//       <SiteFooter />

//       <MobileBottomBar />
//     </div>
//   )
// }