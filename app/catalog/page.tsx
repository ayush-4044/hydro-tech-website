import { SiteHeader } from '@/components/site-header'
import { Catalog } from '@/components/catalog'
import { SiteFooter } from '@/components/site-footer'
import { MobileBottomBar } from '@/components/mobile-bottom-bar'

export default function CatalogPage() {
  return (
    <div className="min-h-svh bg-background">
      <SiteHeader />

      <main className="pb-20 md:pb-0">
        <div className="pt-[4.5rem]">
          <Catalog />
        </div>
      </main>

      <SiteFooter />
      <MobileBottomBar />
    </div>
  )
}
