'use client';

import React from 'react';
import { motion } from 'framer-motion';

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

const services = [
  { name: 'AI & Machine Learning', description: 'Intelligent solutions' },
  { name: 'Web Development', description: 'Modern platforms' },
  { name: 'Mobile Development', description: 'App experiences' },
  { name: 'Cloud Solutions', description: 'Scalable infrastructure' },
  { name: 'Data Science', description: 'Insights from data' },
  { name: 'UI/UX Design', description: 'Beautiful interfaces' },
];

export default function ServicesPreview() {
  return (
    <section className="section-padding bg-gradient-to-br from-deep-blue-600/5 to-electric-blue-500/5 dark:from-deep-blue-900/20 dark:to-electric-blue-900/20">
      <div className="container-content">
        <motion.div
          className="max-w-2xl mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white">
            Services Overview
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 mt-4">
            Comprehensive solutions for your technology challenges.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, i) => (
            <motion.a
              key={i}
              href="#"
              className="group p-6 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/50 shadow-card hover:shadow-lg hover:border-electric-blue-500/50 dark:hover:border-electric-blue-400/50 transition-all duration-300"
              variants={itemVariants}
              whileHover={{ y: -4 }}
            >
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-bold text-slate-900 dark:text-white group-hover:text-electric-blue-600 dark:group-hover:text-electric-blue-400 transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                    {service.description}
                  </p>
                </div>
                <div className="w-8 h-8 rounded-lg bg-electric-blue-500/10 group-hover:bg-electric-blue-500/20 flex items-center justify-center transition-colors">
                  <svg
                    className="w-5 h-5 text-electric-blue-600 dark:text-electric-blue-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 16l-4-4m0 0l4-4m-4 4h18"
                    />
                  </svg>
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
