import PageHeader from '../components/ui/PageHeader'
import FeaturedProjects from '../components/sections/FeaturedProjects'
import CTASection from '../components/sections/CTASection'

export default function Projects() {
  return (
    <>
      <PageHeader
        eyebrow="Projects"
        title="Selected work from our studio"
        description="A portfolio of products built for hospitals, agritech businesses, schools, and startups across Africa."
      />
      <FeaturedProjects />
      <CTASection />
    </>
  )
}
