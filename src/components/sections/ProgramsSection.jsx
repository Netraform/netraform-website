import { programs } from '../../data/content'
import SectionHeading from '../ui/SectionHeading'
import Reveal from '../ui/Reveal'
import Button from '../ui/Button'

export default function ProgramsSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-content mx-auto px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Programs"
            title="Structured paths from curiosity to career"
            description="Every program pairs hands-on building with mentorship from engineers who ship for a living."
          />
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
          {programs.map((p, i) => (
            <Reveal key={p.title} delay={(i % 3) * 0.08}>
              <div className="rounded-xl2 border border-navy/5 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 overflow-hidden h-full flex flex-col bg-white">
                {/* Image slot: program-specific photo, 16:9, e.g. classroom/cohort in session */}
                <div className="aspect-video bg-surface flex items-center justify-center text-muted/40 text-xs">
                  [ {p.title} image, 16:9 ]
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <span className="text-xs font-semibold text-primary uppercase tracking-wide mb-2">{p.duration}</span>
                  <h3 className="font-display font-semibold text-navy text-lg mb-2">{p.title}</h3>
                  <p className="text-sm text-muted leading-relaxed flex-1">{p.desc}</p>
                  <Button variant="secondary" className="w-fit mt-5 !px-5 !py-2">Apply</Button>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
