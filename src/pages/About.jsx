import PageHeader from '../components/ui/PageHeader'
import AboutSection from '../components/sections/AboutSection'
import WhyChoose from '../components/sections/WhyChoose'
import StatsSection from '../components/sections/StatsSection'
import Testimonials from '../components/sections/Testimonials'
import CTASection from '../components/sections/CTASection'

export default function About() {
  return (
    <>
      <PageHeader
        eyebrow="About Us"
        title="Engineers, researchers, and builders — united by one mission"
        description="Netraform Technologies exists to prove that world-class technology can be designed, built, and owned in Africa."
      />
      <AboutSection />
    {/*   <StatsSection /> */}
      <WhyChoose />
      <Testimonials />
      <CTASection />
    </>
  )
}
