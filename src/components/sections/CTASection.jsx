import { Link } from 'react-router-dom'
import Button from '../ui/Button'
import Reveal from '../ui/Reveal'
import NetworkPattern from '../ui/NetworkPattern'

export default function CTASection() {
  return (
    <section className="relative overflow-hidden bg-navy">
      <NetworkPattern className="absolute inset-0 w-full h-full opacity-40" />
      <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/80 to-navy/60" />
      <div className="relative max-w-content mx-auto px-6 lg:px-8 py-24 text-center flex flex-col items-center">
        <Reveal>
          <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight max-w-2xl mx-auto">
            Ready to build the future?
          </h2>
          <p className="text-white/70 mt-5 max-w-xl mx-auto leading-relaxed">
            Whether you're a developer, student, founder, researcher, or organisation —
            there's a place for you at Netraform.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 mt-9">
            <Button as={Link} to="/community" variant="on-navy">Join Community</Button>
            <Button as={Link} to="/contact" variant="ghost">Contact Us</Button>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
