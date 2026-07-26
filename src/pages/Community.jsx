import PageHeader from '../components/ui/PageHeader'
import CommunitySection from '../components/sections/CommunitySection'
import Testimonials from '../components/sections/Testimonials'
import CTASection from '../components/sections/CTASection'

export default function Community() {
  return (
    <>
      <PageHeader
        eyebrow="Community"
        title="Built by and for African builders"
        description="A network of developers, founders, and researchers helping each other ship better work, faster."
      />
      <CommunitySection />
      <Testimonials />
      <CTASection />
    </>
  )
}
