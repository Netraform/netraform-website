import { whyReasons } from '../../data/content'
import SectionHeading from '../ui/SectionHeading'
import Reveal from '../ui/Reveal'
import { FiCheck } from 'react-icons/fi'

export default function WhyChoose() {
  return (
    <section className="py-24 bg-surface">
      <div className="max-w-content mx-auto px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Why Netraform"
            title="What sets our approach apart"
            align="center"
          />
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-14">
          {whyReasons.map((r, i) => (
            <Reveal key={r.title} delay={(i % 4) * 0.06}>
              <div className="bg-white rounded-xl2 border border-navy/5 p-6 h-full">
                <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center mb-4">
                  <FiCheck size={15} />
                </div>
                <h3 className="font-display font-semibold text-navy mb-1.5">{r.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{r.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
