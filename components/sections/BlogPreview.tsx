'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Button from '../ui/Button';
import { FiCalendar, FiUser } from 'react-icons/fi';

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
    excerpt: 'Exploring how artificial intelligence is transforming businesses across the continent.',
    date: 'March 15, 2024',
    author: 'Dr. Amara Okonkwo',
    category: 'AI & ML',
  },
  {
    title: 'Building Scalable Systems with Kubernetes',
    excerpt: 'A comprehensive guide to containerization and orchestration for modern applications.',
    date: 'March 10, 2024',
    author: 'Chisom Ikechukwu',
    category: 'DevOps',
  },
  {
    title: 'Cybersecurity Best Practices for Startups',
    excerpt: 'Essential security measures every startup should implement from day one.',
    date: 'March 5, 2024',
    author: 'Sarah Mensah',
    category: 'Security',
  },
];

export default function BlogPreview() {
  return (
    <section className="section-padding">
      <div className="container-content">
        <motion.div
          className="max-w-2xl mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Latest Articles
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Insights, tutorials, and deep dives into technology, innovation, and industry trends.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-8 mb-12"
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
              <div className="h-48 bg-gradient-to-br from-deep-blue-500/10 to-electric-blue-500/10 dark:from-deep-blue-900/30 dark:to-electric-blue-900/30 group-hover:from-deep-blue-500/20 group-hover:to-electric-blue-500/20 transition-all duration-300"></div>
              <div className="p-6 flex-1 flex flex-col">
                <div className="mb-3">
                  <span className="px-3 py-1 text-xs font-medium rounded-full bg-electric-blue-500/10 text-electric-blue-600 dark:text-electric-blue-400 border border-electric-blue-500/30">
                    {article.category}
                  </span>
                </div>
                <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-2 group-hover:text-electric-blue-600 dark:group-hover:text-electric-blue-400 transition-colors line-clamp-2">
                  {article.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 flex-1 line-clamp-2">
                  {article.excerpt}
                </p>
                <div className="flex items-center gap-4 text-xs text-slate-500 dark:text-slate-500 border-t border-slate-200 dark:border-slate-700 pt-4">
                  <div className="flex items-center gap-1">
                    <FiCalendar className="w-3 h-3" />
                    {article.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <FiUser className="w-3 h-3" />
                    {article.author}
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Button variant="outline" size="lg" href="/blog">
            Read All Articles
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
