import PageHeader from '../components/ui/PageHeader'
import ProgramsSection from '../components/sections/ProgramsSection'
import Testimonials from '../components/sections/Testimonials'
import CTASection from '../components/sections/CTASection'

export default function Programs() {
  return (
    <>
      <PageHeader
        eyebrow="Programs"
        title="Structured, project-based, mentor-led"
        description="Every Netraform program is built around one idea: you learn engineering by doing it under real constraints, with people who will tell you the truth about your work."
      />
      <ProgramsSection />
      <Testimonials />
      <CTASection />
    </>
  )
}
