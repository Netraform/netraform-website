import { testimonials } from '../../data/content'
import SectionHeading from '../ui/SectionHeading'
import Reveal from '../ui/Reveal'

export default function Testimonials() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-content mx-auto px-6 lg:px-8">
        <Reveal>
          <SectionHeading eyebrow="Testimonials" title="What our community says" align="center" />
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.08}>
              <div className="bg-surface rounded-xl2 border border-navy/5 p-7 h-full flex flex-col">
                <p className="text-navy leading-relaxed text-sm flex-1">"{t.quote}"</p>
                <div className="flex items-center gap-3 mt-6">
                  {/* Avatar slot: circular headshot, 1:1 */}
                  <div className="w-11 h-11 rounded-full bg-primary/10 text-primary flex items-center justify-center font-display font-semibold text-sm">
                    {t.name.split(' ').map((n) => n[0]).join('')}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-navy">{t.name}</p>
                    <p className="text-xs text-muted">{t.role}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
