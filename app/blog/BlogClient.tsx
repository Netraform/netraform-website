'use client';

import { motion } from 'framer-motion';
import { FiCalendar, FiArrowRight } from 'react-icons/fi';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const articles = [
  {
    title: 'The Future of AI in Africa',
    excerpt: 'Exploring how artificial intelligence is transforming businesses, healthcare, agriculture, and education across the African continent.',
    date: 'July 25, 2024',
    author: 'Dr. Amara Okonkwo',
    category: 'AI & ML',
    readTime: '8 min read',
  },
  {
    title: 'Building Scalable Systems with Kubernetes',
    excerpt: 'A comprehensive guide to containerization, orchestration, and scaling applications in production environments.',
    date: 'July 20, 2024',
    author: 'Chisom Ikechukwu',
    category: 'DevOps',
    readTime: '12 min read',
  },
  {
    title: 'Cybersecurity Best Practices for Startups',
    excerpt: 'Essential security measures every startup should implement from day one to protect data, infrastructure, and customer trust.',
    date: 'July 15, 2024',
    author: 'Sarah Mensah',
    category: 'Security',
    readTime: '10 min read',
  },
  {
    title: 'Machine Learning Model Deployment Strategies',
    excerpt: 'Practical approaches to deploying ML models in production, including A/B testing, monitoring, and continuous improvement.',
    date: 'July 10, 2024',
    author: 'Kwame Asante',
    category: 'AI & ML',
    readTime: '9 min read',
  },
  {
    title: 'Cloud Migration Strategies for Legacy Systems',
    excerpt: 'How to successfully migrate monolithic applications to cloud infrastructure with minimal downtime and maximum reliability.',
    date: 'July 5, 2024',
    author: 'Zainab Hassan',
    category: 'Cloud',
    readTime: '11 min read',
  },
  {
    title: 'The Rise of Intelligent Robotics',
    excerpt: 'Exploring the convergence of AI, computer vision, and robotics in manufacturing, logistics, and service industries.',
    date: 'June 30, 2024',
    author: 'Ade Oluwaseun',
    category: 'Robotics',
    readTime: '7 min read',
  },
];

export default function BlogClient() {
  return (
    <div className="w-full">
      {/* Hero */}
      <section className="pt-32 md:pt-40 pb-16 md:pb-24 overflow-hidden relative">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-electric-blue-500/20 rounded-full blur-3xl"></div>
        </div>
        <div className="container-content">
          <motion.div
            className="max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 dark:text-white mb-6">
              Insights & Knowledge
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-2xl">
              Stay updated on the latest trends, tutorials, and insights in AI, software engineering, robotics, and digital innovation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="section-padding-sm border-b border-slate-200 dark:border-slate-700">
        <div className="container-content">
          <motion.div
            className="flex flex-wrap gap-3"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {['All Articles', 'AI & ML', 'Software Engineering', 'Cloud & DevOps', 'Security', 'Robotics', 'Career'].map((cat, i) => (
              <motion.button
                key={i}
                className={`px-4 py-2 rounded-full font-semibold transition-all ${
                  i === 0
                    ? 'bg-deep-blue-600 text-white'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-slate-100 hover:bg-slate-200 dark:hover:bg-slate-700'
                }`}
                variants={itemVariants}
              >
                {cat}
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Articles */}
      <section className="section-padding">
        <div className="container-content">
          <motion.div
            className="grid md:grid-cols-2 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {articles.map((article, i) => (
              <motion.a
                key={i}
                href="#"
                className="group rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 shadow-card hover:shadow-lg hover:border-electric-blue-500/50 dark:hover:border-electric-blue-400/50 overflow-hidden transition-all duration-300 flex flex-col"
                variants={itemVariants}
                whileHover={{ y: -8 }}
              >
                {/* Image Placeholder */}
                <div className="h-48 bg-gradient-to-br from-deep-blue-500/10 to-electric-blue-500/10 dark:from-deep-blue-900/30 dark:to-electric-blue-900/30 group-hover:from-deep-blue-500/20 group-hover:to-electric-blue-500/20 transition-all duration-300"></div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <div className="mb-3">
                    <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-electric-blue-500/10 text-electric-blue-600 dark:text-electric-blue-400 border border-electric-blue-500/30">
                      {article.category}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-electric-blue-600 dark:group-hover:text-electric-blue-400 transition-colors line-clamp-2">
                    {article.title}
                  </h3>

                  <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 flex-1 line-clamp-3">
                    {article.excerpt}
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t border-slate-200 dark:border-slate-700">
                    <div className="flex items-center gap-4 text-xs text-slate-500 dark:text-slate-500">
                      <div className="flex items-center gap-1">
                        <FiCalendar className="w-3 h-3" />
                        {article.date}
                      </div>
                    </div>
                    <span className="text-xs font-medium text-slate-600 dark:text-slate-400">
                      {article.readTime}
                    </span>
                  </div>

                  <div className="mt-4 flex items-center gap-1 text-electric-blue-600 dark:text-electric-blue-400 font-semibold text-sm group-hover:gap-3 transition-all">
                    Read More
                    <FiArrowRight className="w-3 h-3" />
                  </div>
                </div>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="section-padding bg-gradient-to-r from-deep-blue-600 to-electric-blue-600 dark:from-deep-blue-900 dark:to-electric-blue-900 text-white">
        <div className="container-content">
          <motion.div
            className="max-w-2xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Subscribe to Our Newsletter
            </h2>
            <p className="text-lg opacity-90 mb-8">
              Get the latest insights, tutorials, and industry news delivered to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="your@email.com"
                required
                className="flex-1 px-4 py-3 rounded-lg text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-electric-blue-600 focus:ring-white"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-white text-electric-blue-600 rounded-lg font-semibold hover:bg-slate-100 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
