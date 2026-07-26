import { stats } from '../../data/content'
import Counter from '../ui/Counter'
import Reveal from '../ui/Reveal'

export default function StatsSection() {
  return (
    <section className="py-20 bg-navy">
      <div className="max-w-content mx-auto px-6 lg:px-8 grid grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.08} className="text-center">
            <p className="text-4xl sm:text-5xl font-extrabold text-white font-display">
              <Counter value={s.value} suffix={s.suffix} />
            </p>
            <p className="text-sm text-white/60 mt-2">{s.label}</p>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
