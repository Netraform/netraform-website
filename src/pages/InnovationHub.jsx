import PageHeader from '../components/ui/PageHeader'
import InnovationHubSection from '../components/sections/InnovationHubSection'
import ProgramsSection from '../components/sections/ProgramsSection'
import CommunitySection from '../components/sections/CommunitySection'
import CTASection from '../components/sections/CTASection'

export default function InnovationHub() {
  return (
    <>
      <PageHeader
        eyebrow="Innovation Hub"
        title="A place where technology gets made"
        description="Part workspace, part training ground, part startup studio — the hub is where our community turns ideas into shipped products."
      />
      <InnovationHubSection />
      <ProgramsSection />
      <CommunitySection />
      <CTASection />
    </>
  )
}
