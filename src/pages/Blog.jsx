import PageHeader from '../components/ui/PageHeader'
import { blogPosts } from '../data/content'
import Reveal from '../components/ui/Reveal'
import { FiArrowRight } from 'react-icons/fi'

export default function Blog() {
  return (
    <>
      <PageHeader
        eyebrow="Blog"
        title="Ideas worth building on"
        description="Notes on AI, engineering practice, and building technology companies from Africa."
      />
      <section className="py-24 bg-white">
        <div className="max-w-content mx-auto px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post, i) => (
              <Reveal key={post.title} delay={(i % 3) * 0.08}>
                <a href="#" className="group block bg-surface rounded-xl2 border border-navy/5 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 overflow-hidden h-full">
                  <div className="aspect-video bg-navy/5 flex items-center justify-center text-muted/40 text-xs">
                    [ Article cover, 16:9 ]
                  </div>
                  <div className="p-6">
                    <p className="text-xs text-muted mb-2">{post.date}</p>
                    <h3 className="font-display font-semibold text-navy text-lg mb-2 group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-sm text-muted leading-relaxed">{post.excerpt}</p>
                    <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary mt-4">
                      Read more <FiArrowRight size={14} />
                    </span>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
