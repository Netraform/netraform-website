import { Link } from 'react-router-dom'
import { FiArrowRight } from 'react-icons/fi'
import { services } from '../../data/content'
import SectionHeading from '../ui/SectionHeading'
import Reveal from '../ui/Reveal'

export default function WhatWeDo() {
  return (
    <section className="py-24 bg-surface">
      <div className="max-w-content mx-auto px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="What we do"
            title="Full-stack capability, applied end to end"
            description="From first prototype to production infrastructure, our teams work across the entire technical stack so you deal with one partner, not five vendors."
          />
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
          {services.map(({ icon: Icon, title, desc }, i) => (
            <Reveal key={title} delay={(i % 3) * 0.08}>
              <div className="group bg-white rounded-xl2 border border-navy/5 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 p-7 h-full flex flex-col">
                <div className="w-11 h-11 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-white transition-colors">
                  <Icon size={20} />
                </div>
                <h3 className="font-display font-semibold text-navy text-lg mb-2">{title}</h3>
                <p className="text-sm text-muted leading-relaxed flex-1">{desc}</p>
                <Link to="/services" className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary mt-5 group-hover:gap-2.5 transition-all">
                  Learn more <FiArrowRight size={14} />
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
