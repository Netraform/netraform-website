import { projects } from '../../data/content'
import SectionHeading from '../ui/SectionHeading'
import Reveal from '../ui/Reveal'

export default function FeaturedProjects() {
  return (
    <section className="py-24 bg-surface">
      <div className="max-w-content mx-auto px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Featured projects"
            title="Work that solves real problems"
            description="A sample of products built by our engineering team and program graduates."
          />
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={(i % 3) * 0.08}>
              <div className="rounded-xl2 bg-white border border-navy/5 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 overflow-hidden h-full flex flex-col">
                {/* Image slot: project screenshot / product mock, 16:9 */}
                <div className="aspect-video bg-navy/5 flex items-center justify-center text-muted/40 text-xs">
                  [ {p.title} screenshot, 16:9 ]
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-display font-semibold text-navy text-lg mb-1.5">{p.title}</h3>
                  <p className="text-xs text-primary font-medium mb-3">{p.stack}</p>
                  <p className="text-sm text-muted leading-relaxed">{p.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
