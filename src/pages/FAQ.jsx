import PageHeader from '../components/ui/PageHeader'
import Accordion from '../components/ui/Accordion'
import Reveal from '../components/ui/Reveal'
import { faqs } from '../data/content'
import CTASection from '../components/sections/CTASection'

export default function FAQ() {
  return (
    <>
      <PageHeader eyebrow="FAQ" title="Frequently asked questions" />
      <section className="py-24 bg-white">
        <div className="max-w-content mx-auto px-6 lg:px-8 max-w-3xl">
          <Reveal>
            <Accordion items={faqs} />
          </Reveal>
        </div>
      </section>
      <CTASection />
    </>
  )
}
