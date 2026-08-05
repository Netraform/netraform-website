'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FiStar } from 'react-icons/fi';

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

const testimonials = [
  {
    quote: 'Netraform helped us transform our entire infrastructure and cut operational costs by 40%.',
    author: 'Sarah Johnson',
    role: 'CTO, TechCorp Africa',
    avatar: '🚀',
  },
  {
    quote: 'The bootcamp program accelerated my career development by years. Highly recommended!',
    author: 'Chisom Obi',
    role: 'Software Engineer, StartupXYZ',
    avatar: '💡',
  },
  {
    quote: 'Best innovation partner we could ask for. Their team delivers quality and innovation.',
    author: 'Amara Mensah',
    role: 'Founder, InnovateLabs',
    avatar: '⭐',
  },
];

export default function TestimonialSection() {
  return (
    <section className="section-padding bg-slate-50 dark:bg-slate-900/50">
      <div className="container-content">
        <motion.div
          className="max-w-2xl mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            What People Say
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Hear from innovators, entrepreneurs, and industry leaders who trust us.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={i}
              className="p-8 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 shadow-card hover:shadow-lg transition-all duration-300"
              variants={itemVariants}
              whileHover={{ y: -8 }}
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <FiStar
                    key={j}
                    className="w-5 h-5 text-electric-blue-500 fill-electric-blue-500"
                  />
                ))}
              </div>
              <p className="text-slate-700 dark:text-slate-300 mb-6 italic">
                &quot;{testimonial.quote}&quot;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-electric-blue-500 to-deep-blue-600 flex items-center justify-center text-xl">
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="font-bold text-slate-900 dark:text-white">
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
