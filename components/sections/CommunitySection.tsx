'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FiUsers, FiBook, FiTarget, FiTrendingUp } from 'react-icons/fi';

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

const community = [
  {
    icon: FiUsers,
    title: 'Vibrant Community',
    description: '500+ active members collaborating and networking',
  },
  {
    icon: FiBook,
    title: 'Learning Resources',
    description: 'Courses, workshops, and tutorials for all levels',
  },
  {
    icon: FiTarget,
    title: 'Innovation Projects',
    description: 'Work on real-world challenges and problems',
  },
  {
    icon: FiTrendingUp,
    title: 'Career Growth',
    description: 'Opportunities with leading tech companies',
  },
];

export default function CommunitySection() {
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
          <span className="inline-block px-4 py-2 rounded-full bg-electric-blue-500/10 border border-electric-blue-500/30 text-electric-blue-600 dark:text-electric-blue-400 text-sm font-semibold mb-4">
            Community First
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            Join Our Community
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Be part of a growing movement of innovators, creators, and problem-solvers transforming Africa and beyond through technology.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {community.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                className="p-8 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 shadow-card hover:shadow-lg transition-all duration-300 group hover:border-electric-blue-500/50"
                variants={itemVariants}
                whileHover={{ y: -8 }}
              >
                <Icon className="w-12 h-12 text-electric-blue-600 dark:text-electric-blue-400 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-bold text-slate-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
