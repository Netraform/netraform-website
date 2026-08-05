'use client';

import React from 'react';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
};

const partners = [
  'Google Cloud',
  'AWS',
  'Microsoft Azure',
  'GitHub',
  'Vercel',
  'Stripe',
  'Slack',
  'Figma',
];

export default function TrustedBy() {
  return (
    <section className="section-padding-sm">
      <div className="container-content">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-slate-600 dark:text-slate-400 font-semibold mb-8">
            TRUSTED BY INDUSTRY LEADERS
          </h3>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {partners.map((partner, i) => (
            <motion.div
              key={i}
              className="h-12 flex items-center justify-center p-4 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors opacity-60 hover:opacity-100"
              variants={itemVariants}
            >
              <p className="font-semibold text-slate-600 dark:text-slate-400 text-center text-sm md:text-base">
                {partner}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
