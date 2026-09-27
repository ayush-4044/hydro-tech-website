import { SiteHeader } from '@/components/site-header'
import { About } from '@/components/about'
import { SiteFooter } from '@/components/site-footer'
import { MobileBottomBar } from '@/components/mobile-bottom-bar'

export default function AboutPage() {
  return (
    <div className="min-h-svh bg-background">
      <SiteHeader />

      <main className="pb-20 md:pb-0">
        <div className="pt-16">
          <About />
        </div>
      </main>

      <SiteFooter />

      <MobileBottomBar />
    </div>
  )
}