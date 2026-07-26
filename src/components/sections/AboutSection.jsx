import { Link } from 'react-router-dom'
import { FiArrowRight } from 'react-icons/fi'
import Button from '../ui/Button'
import Reveal from '../ui/Reveal'

export default function AboutSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-content mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
        <Reveal>
          {/*
            Image slot: African software engineers collaborating around a
            large digital display. Aspect ratio 1:1 or 4:5, natural daylight,
            realistic editorial photography.
            Suggested prompt: "Team of African software engineers reviewing
            code on a large wall-mounted display in a bright modern office,
            candid collaborative moment, natural light, editorial style, 1:1"
          */}
          <div className="aspect-square rounded-xl2 bg-surface border border-navy/5 flex items-center justify-center text-muted/50 text-sm">
            [ About image: team collaborating, 1:1 ]
          </div>
        </Reveal>

        <Reveal delay={0.1} className="flex flex-col gap-6">
          <span className="text-xs font-semibold tracking-[0.18em] uppercase text-primary">About Netraform</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-navy leading-tight">
            An innovation hub built for African builders
          </h2>
          <p className="text-muted leading-relaxed">
            Netraform Technologies exists at the intersection of engineering and opportunity.
            We are a team of software engineers, AI researchers, and product strategists who
            believe the next generation of world-class technology companies will be built here,
            by people who understand the problems worth solving.
          </p>
          <div className="grid sm:grid-cols-2 gap-6 pt-2">
            <div>
              <h3 className="font-display font-semibold text-navy mb-1.5">Our mission</h3>
              <p className="text-sm text-muted leading-relaxed">
                Empower African innovators by building intelligent solutions, nurturing
                startups, and solving real-world problems with technology.
              </p>
            </div>
            <div>
              <h3 className="font-display font-semibold text-navy mb-1.5">Our vision</h3>
              <p className="text-sm text-muted leading-relaxed">
                A continent where world-class technology is designed, built, and owned
                by African engineers and founders.
              </p>
            </div>
          </div>
          {/* 
          <p className="text-sm text-muted leading-relaxed">
            <span className="font-semibold text-navy">Our impact:</span> over 500 engineers
            trained, 100+ products shipped, and a growing network of startups building on
            the foundation we help lay.
          </p>
          <Button as={Link} to="/about" variant="secondary" className="w-fit mt-2">
            Learn more about us <FiArrowRight />
          </Button>
          */}
        </Reveal>
      </div>
    </section>
  )
}
