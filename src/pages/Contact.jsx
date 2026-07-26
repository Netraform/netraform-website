import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi'
import PageHeader from '../components/ui/PageHeader'
import Reveal from '../components/ui/Reveal'
import Button from '../components/ui/Button'

const details = [
  { icon: FiMail, label: 'Email', value: 'netraformtech@gmail.com' },
  { icon: FiPhone, label: 'Phone', value: '+234 800 000 0000' },
//  { icon: FiMapPin, label: 'Address', value: 'Dutse, Jigawa State, Nigeria' },
]

export default function Contact() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Let's talk about what you're building"
        description="Whether it's a project, a partnership, or a question about our programs — we read every message."
      />
      <section className="py-24 bg-white">
        <div className="max-w-content mx-auto px-6 lg:px-8 grid lg:grid-cols-5 gap-14">
          <Reveal className="lg:col-span-2 flex flex-col gap-8">
            {details.map(({ icon: Icon, label, value }) => (
              <div key={label} className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <Icon size={18} />
                </div>
                <div>
                  <p className="text-sm font-semibold text-navy">{label}</p>
                  <p className="text-sm text-muted mt-0.5">{value}</p>
                </div>
              </div>
            ))}
          
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-3">
            <form className="grid sm:grid-cols-2 gap-5" onSubmit={(e) => e.preventDefault()}>
              <div className="flex flex-col gap-1.5">
                <label htmlFor="name" className="text-sm font-medium text-navy">Full name</label>
                <input id="name" required className="rounded-lg border border-navy/10 px-4 py-3 text-sm focus-visible:outline-2 focus-visible:outline-primary" />
              </div>
              <div className="flex flex-col gap-1.5">
                <label htmlFor="email" className="text-sm font-medium text-navy">Email</label>
                <input id="email" type="email" required className="rounded-lg border border-navy/10 px-4 py-3 text-sm focus-visible:outline-2 focus-visible:outline-primary" />
              </div>
              <div className="flex flex-col gap-1.5 sm:col-span-2">
                <label htmlFor="subject" className="text-sm font-medium text-navy">Subject</label>
                <input id="subject" required className="rounded-lg border border-navy/10 px-4 py-3 text-sm focus-visible:outline-2 focus-visible:outline-primary" />
              </div>
              <div className="flex flex-col gap-1.5 sm:col-span-2">
                <label htmlFor="message" className="text-sm font-medium text-navy">Message</label>
                <textarea id="message" rows={5} required className="rounded-lg border border-navy/10 px-4 py-3 text-sm resize-none focus-visible:outline-2 focus-visible:outline-primary" />
              </div>
              <Button type="submit" as="button" variant="primary" className="w-fit sm:col-span-2">Send message</Button>
            </form>
          </Reveal>
        </div>
      </section>
    </>
  )
}
