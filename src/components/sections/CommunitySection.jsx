import { Link } from 'react-router-dom'
import { FiBookOpen, FiUsers, FiCompass, FiCalendar, FiGitBranch } from 'react-icons/fi'
import Button from '../ui/Button'
import Reveal from '../ui/Reveal'

const benefits = [
  { icon: FiBookOpen, label: 'Learning', desc: 'Workshops, resources, and code reviews' },
  { icon: FiUsers, label: 'Networking', desc: 'Connect with engineers across Africa' },
  { icon: FiCompass, label: 'Mentorship', desc: 'Guidance from working professionals' },
  { icon: FiCalendar, label: 'Events', desc: 'Meetups, hackathons, and demo days' },
  { icon: FiGitBranch, label: 'Open Source', desc: 'Contribute to real, active projects' },
]

export default function CommunitySection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-content mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
        <Reveal>
          {/*
            Image slot: developers networking at an event, candid shot,
            aspect ratio 4:5.
            Suggested prompt: "African developers networking at a tech meetup,
            candid conversation, laptops and badges visible, warm indoor
            lighting, editorial photography, 4:5"
          */}
          <div className="aspect-[4/5] rounded-xl2 bg-surface border border-navy/5 flex items-center justify-center text-muted/40 text-sm">
            [ Community image: developers networking, 4:5 ]
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <span className="text-xs font-semibold tracking-[0.18em] uppercase text-primary">Community</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-navy leading-tight mt-4 mb-6">
            You don't build a career alone
          </h2>
          <p className="text-muted leading-relaxed mb-8 max-w-lg">
            Join a growing network of developers, founders, and researchers across Discord,
            Slack, and GitHub — built for people who want to keep learning after the tutorial ends.
          </p>
          <div className="grid sm:grid-cols-2 gap-5 mb-9">
            {benefits.map(({ icon: Icon, label, desc }) => (
              <div key={label} className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <Icon size={16} />
                </div>
                <div>
                  <p className="font-semibold text-navy text-sm">{label}</p>
                  <p className="text-xs text-muted mt-0.5">{desc}</p>
                </div>
              </div>
            ))}
          </div>
{/**Add whatsApp community Link here */}         <Button as={Link} to="/community" variant="primary" className="w-fit">Join Community</Button>
        </Reveal>
      </div>
    </section>
  )
}
