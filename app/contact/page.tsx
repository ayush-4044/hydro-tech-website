import { SiteHeader } from '@/components/site-header'
import { Contact } from '@/components/contact'
import { SiteFooter } from '@/components/site-footer'
import { MobileBottomBar } from '@/components/mobile-bottom-bar'

export default function ContactPage() {
  return (
    <div className="min-h-svh bg-background">
      <SiteHeader />

      <main className="pb-20 md:pb-0">
        <div className="pt-16">
          <Contact />
        </div>
      </main>

      <SiteFooter />

      <MobileBottomBar />
    </div>
  )
}