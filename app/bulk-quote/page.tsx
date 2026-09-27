import { SiteHeader } from '@/components/site-header'
import { BulkOrderCalculator } from '@/components/bulk-order-calculator'
import { SiteFooter } from '@/components/site-footer'
import { MobileBottomBar } from '@/components/mobile-bottom-bar'

export default function BulkQuotePage() {
  return (
    <div className="min-h-svh bg-background">
      <SiteHeader />

      <main className="pb-20 md:pb-0">
        <div className="pt-16">
          <BulkOrderCalculator />
        </div>
      </main>

      <SiteFooter />

      <MobileBottomBar />
    </div>
  )
}