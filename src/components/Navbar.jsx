import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FiMenu, FiX } from 'react-icons/fi'
import { nav } from '../data/content'
import Button from './ui/Button'
import Netraform_logo from '../assets/Netraform_logo.png'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => setOpen(false), [pathname])

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/90 backdrop-blur-md shadow-card' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-content mx-auto flex items-center justify-between px-6 lg:px-8 h-20" aria-label="Primary">
        <Link to="/" className="flex items-center">
          <img src={Netraform_logo} alt="Netraform Technologies" className="h-10 w-auto" />
        </Link>

        <ul className="hidden lg:flex items-center gap-8">
          {nav.map((item) => (
            <li key={item.href}>
              <Link
                to={item.href}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  pathname === item.href ? 'text-primary' : 'text-navy/80'
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex items-center gap-3">
          <Button as={Link} to="/community" variant="primary" className="!px-5 !py-2.5">
            Join the Community
          </Button>
        </div>

        <button
          className="lg:hidden text-navy text-2xl"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
      </nav>

      {open && (
        <div className="lg:hidden bg-white border-t border-navy/10 px-6 py-6">
          <ul className="flex flex-col gap-4">
            {nav.map((item) => (
              <li key={item.href}>
                <Link to={item.href} className="text-base font-medium text-navy/80 hover:text-primary">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex flex-col gap-3 mt-6">
            
            <Button as={Link} to="/community" variant="primary">Join the Community</Button>
          </div>
        </div>
      )}
    </header>
  )
}