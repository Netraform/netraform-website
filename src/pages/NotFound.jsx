import { Link } from 'react-router-dom'
import Button from '../components/ui/Button'
import NetworkPattern from '../components/ui/NetworkPattern'
import Reveal from '../components/ui/Reveal'

export default function NotFound() {
  return (
    <section className="relative overflow-hidden bg-navy min-h-[80vh] flex items-center">
      <NetworkPattern className="absolute inset-0 w-full h-full opacity-40" />
      <div className="absolute inset-0 bg-gradient-to-b from-navy/40 to-navy" />
      <div className="relative max-w-content mx-auto px-6 lg:px-8 text-center w-full">
        <Reveal>
          <p className="font-display font-extrabold text-primary text-7xl sm:text-8xl">404</p>
          <h1 className="text-2xl sm:text-3xl font-bold text-white mt-4">This path hasn't been built yet</h1>
          <p className="text-white/70 mt-3 max-w-md mx-auto">
            The page you're looking for doesn't exist, or may have moved.
            Let's get you back to solid ground.
          </p>
          <Button as={Link} to="/" variant="on-navy" className="mt-8 w-fit mx-auto">
            Back to Home
          </Button>
        </Reveal>
      </div>
    </section>
  )
}
