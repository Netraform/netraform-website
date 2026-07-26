import { partners } from '../../data/content'
import Reveal from '../ui/Reveal'

export default function TrustedBy() {
  return (
    <section className="border-b border-navy/5">
      <div className="max-w-content mx-auto px-6 lg:px-8 py-12">
        <Reveal>
          <p className="text-center text-xs font-semibold tracking-[0.18em] uppercase text-muted mb-8">
            Trusted by universities, startups, and research labs
          </p>
        </Reveal>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
          {partners.map((name) => (
            <span key={name} className="text-muted/50 font-display font-semibold text-lg select-none">
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
