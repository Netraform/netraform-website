import PageHeader from '../components/ui/PageHeader'
import WhatWeDo from '../components/sections/WhatWeDo'
import WhyChoose from '../components/sections/WhyChoose'
import CTASection from '../components/sections/CTASection'

export default function Services() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="Full-stack technical services, delivered end to end"
        description="From AI research to production cloud infrastructure, we cover the entire technical stack so your organisation deals with one accountable partner."
      />
      <WhatWeDo />
      <WhyChoose />
      <CTASection />
    </>
  )
}
