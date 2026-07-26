import { Link } from 'react-router-dom'
import { FiArrowRight } from 'react-icons/fi'
import Button from '../ui/Button'
import Reveal from '../ui/Reveal'
import NetworkPattern from '../ui/NetworkPattern'

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy">
      <NetworkPattern className="absolute inset-0 w-full h-full opacity-70" />
      <div className="absolute inset-0 bg-gradient-to-b from-navy/40 via-navy/70 to-navy" />

      <div className="relative max-w-content mx-auto px-6 lg:px-8 pt-24 pb-28 lg:pt-32 lg:pb-36 grid lg:grid-cols-2 gap-16 items-center">
        <Reveal>

         {/*  <span className="inline-block text-xs font-semibold tracking-[0.18em] uppercase text-accent mb-6">
            AI · Software · Cloud · Innovation
          </span>
          */}
          <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] font-extrabold text-white leading-[1.08] tracking-tight mb-6">
            Building Africa's Future Through AI & Innovation
          </h1>
          <p className="text-white/70 text-lg leading-relaxed max-w-xl mb-10">
            Netraform Technologies is an AI, software engineering, cloud, and innovation hub.
            We build intelligent products, train the next generation of engineers, and back
            founders turning real African problems into working companies.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <Button as={Link} to="/community" variant="primary">
              Join the Community <FiArrowRight />
            </Button>
            <Button as={Link} to="/programs" variant="ghost">
              Explore Programs
            </Button>
          </div>
        </Reveal>

        <Reveal delay={0.15} className="relative hidden lg:block">
          {/*
            Image slot: modern African tech workspace — engineers and AI
            researchers around a large display, holographic UI overlays,
            soft cloud/network graphics. Aspect ratio 4:5, warm-lit, realistic.
            Suggested prompt: "African software engineers and AI researchers
            collaborating in a modern glass-walled office at dusk, large
            monitors with abstract data visualizations, soft blue accent
            lighting, editorial photography, shallow depth of field, 4:5"
          */}
          <div className="aspect-[4/5] rounded-xl2 bg-white/5 border border-white/10 flex items-center justify-center text-white/30 text-sm backdrop-blur-sm">
            [ Hero image: engineers + AI workspace, 4:5 ]
          </div>
          {/* 
          <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-soft px-5 py-4 hidden xl:block">
            <p className="text-2xl font-extrabold text-navy leading-none">500+</p> 
            <p className="text-xs text-muted mt-1">Innovators trained</p> 
          </div>
          */}
        </Reveal>
      </div>
    </section>
  )
}
