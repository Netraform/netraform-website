import { Link } from 'react-router-dom'
import { FiGithub, FiLinkedin, FiFacebook, FiTwitter, FiInstagram, FiArrowRight } from 'react-icons/fi'

const columns = [
  {
    title: 'Company',
    links: [
      { label: 'About', href: '/about' },
    //  { label: 'Programs', href: '/programs' },
      { label: 'Services', href: '/services' },
    //  { label: 'Projects', href: '/projects' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Blog', href: '/blog' },
    //  { label: 'Events', href: '/community' },
      { label: 'Community', href: '/community' },
      { label: 'FAQ', href: '/faq' },
    ],
  },
  {
    title: 'Contact',
    links: [
      { label: 'hello@netraform.tech', href: 'mailto:hello@netraform.tech' },
      { label: '+234 800 000 0000', href: 'tel:+2348000000000' },
      { label: 'Dutse, Jigawa State, Nigeria', href: '/contact' },
    ],
  },
]

const socials = [
  { icon: FiGithub, href: '#', label: 'GitHub' },
  { icon: FiLinkedin, href: 'https://www.linkedin.com/posts/netraform-ai-innovationhub-share-7486186750361415680-pltN/?utm_source=share&utm_medium=member_android&rcm=ACoAAFGIPnYBHrfF76Us3Lo7AM4voC2hqHhT4lI', label: 'LinkedIn' },
  { icon: FiFacebook, href: '#', label: 'Facebook' },
  { icon: FiTwitter, href: '#', label: 'Twitter / X' },
  { icon: FiInstagram, href: '#', label: 'Instagram' },
]

export default function Footer() {
  return (
    <footer className="bg-navy text-white/70">
      <div className="max-w-content mx-auto px-6 lg:px-8 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
        <div className="lg:col-span-2 flex flex-col gap-5">
       {/*     <Link to="/" className="flex items-center gap-2 font-display font-extrabold text-xl text-white">
           <span className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-white text-sm">N</span>
            Netraform
          </Link>
          <p className="text-sm leading-relaxed max-w-xs">
            Building Africa's future through AI & innovation.
          </p>
           
          <form className="flex items-center gap-2 max-w-xs" onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="footer-email" className="sr-only">Email address</label>
            <input
              id="footer-email"
              type="email"
              required
              placeholder="you@email.com"
              className="flex-1 rounded-full bg-white/10 border border-white/15 px-4 py-2.5 text-sm text-white placeholder:text-white/40 focus-visible:outline-2 focus-visible:outline-accent"
            />
            <button
              type="submit"
              aria-label="Subscribe to newsletter"
              className="w-10 h-10 shrink-0 rounded-full bg-primary flex items-center justify-center hover:bg-blue-600 transition-colors"
            >
              <FiArrowRight />
            </button>
          </form>
          */}
          <div className="flex items-center gap-4 pt-2">
            {socials.map(({ icon: Icon, href, label }) => (
              <a key={label} href={href} aria-label={label} className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <Icon size={15} />
              </a>
            ))}
          </div>
        </div>

        {columns.map((col) => (
          <div key={col.title} className="flex flex-col gap-3">
            <h3 className="text-white text-sm font-semibold tracking-wide">{col.title}</h3>
            {col.links.map((link) => (
              <Link key={link.label} to={link.href} className="text-sm hover:text-accent transition-colors">
                {link.label}
              </Link>
            ))}
          </div>
        ))}
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-content mx-auto px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/50">
          <span>© {new Date().getFullYear()} Netraform Technologies. All rights reserved.</span>
          
        </div>
      </div>
    </footer>
  )
}
