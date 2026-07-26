import Reveal from '../ui/Reveal'

const pillars = [
  { label: 'Developers', desc: 'learn production-grade engineering' },
  { label: 'Founders', desc: 'build and validate real products' },
  { label: 'Researchers', desc: 'innovate on applied AI problems' },
  { label: 'Students', desc: 'grow from theory into practice' },
  { label: 'Startups', desc: 'launch with technical backing' },
]

export default function InnovationHubSection() {
  return (
    <section className="py-24 bg-navy text-white">
      <div className="max-w-content mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
        <Reveal className="order-2 lg:order-1">
          <span className="text-xs font-semibold tracking-[0.18em] uppercase text-accent">The Innovation Hub</span>
          <h2 className="text-3xl sm:text-4xl font-bold leading-tight mt-4 mb-6">
            More than a software company
          </h2>
          <p className="text-white/70 leading-relaxed mb-8 max-w-lg">
            Netraform is a physical and digital space where technology gets made. It's where
            developers sharpen their craft, founders pressure-test ideas, and researchers work
            on problems specific to African markets — all under one roof.
          </p>
          <ul className="space-y-4">
            {pillars.map((p) => (
              <li key={p.label} className="flex items-baseline gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                <span className="text-sm">
                  <span className="font-semibold text-white">{p.label}</span>
                  <span className="text-white/60"> {p.desc}</span>
                </span>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.1} className="order-1 lg:order-2">
          {/*
            Image slot: coworking innovation hub interior, engineers at
            standing desks, whiteboards with diagrams, warm ambient lighting.
            Aspect ratio 4:5.
            Suggested prompt: "Modern African coworking innovation hub interior,
            engineers at desks, whiteboard with system diagrams, warm evening
            lighting, wide shot, editorial photography, 4:5"
          */}
          <div className="aspect-[4/5] rounded-xl2 bg-white/5 border border-white/10 flex items-center justify-center text-white/30 text-sm">
            [ Innovation Hub image, 4:5 ]
          </div>
        </Reveal>
      </div>
    </section>
  )
}
