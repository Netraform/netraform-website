import Reveal from './Reveal'
import NetworkPattern from './NetworkPattern'

export default function PageHeader({ eyebrow, title, description }) {
  return (
    <section className="relative overflow-hidden bg-navy">
      <NetworkPattern className="absolute inset-0 w-full h-full opacity-50" />
      <div className="absolute inset-0 bg-gradient-to-b from-navy/40 to-navy" />
      <div className="relative max-w-content mx-auto px-6 lg:px-8 pt-20 pb-16 lg:pt-24 lg:pb-20 text-center">
        <Reveal>
          {eyebrow && (
            <span className="text-xs font-semibold tracking-[0.18em] uppercase text-accent">{eyebrow}</span>
          )}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mt-4">
            {title}
          </h1>
          {description && (
            <p className="text-white/70 leading-relaxed max-w-2xl mx-auto mt-5">{description}</p>
          )}
        </Reveal>
      </div>
    </section>
  )
}
