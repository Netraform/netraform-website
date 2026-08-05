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

const stats = [
  { number: '4 Key Domains', label: 'Technology Pillars', description: 'AI, Software, Robotics, and Cloud' },
  { number: '100%', label: 'Applied Innovation', description: 'Real-world problem solving & research' },
  { number: 'Hands-On', label: 'Cohort Learning', description: 'Bootcamps, hackathons & fellowships' },
  { number: 'Collaborative', label: 'Partner Ecosystem', description: 'Universities, enterprise & communities' },
];

export default function StatsSection() {
  return (
    <section className="section-padding bg-slate-50 dark:bg-slate-900/50">
      <div className="container-content">
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              className="p-8 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800/80 shadow-sm hover:shadow-md transition-all duration-300 group hover:border-electric-blue-500/50 dark:hover:border-electric-blue-400/50"
              variants={itemVariants}
              whileHover={{ y: -4 }}
            >
              <div className="text-3xl md:text-4xl font-bold text-electric-blue-600 dark:text-electric-blue-400 mb-2 group-hover:scale-105 transition-transform duration-300">
                {stat.number}
              </div>
              <h3 className="text-base font-semibold text-slate-900 dark:text-white mb-1">
                {stat.label}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-xs md:text-sm">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
