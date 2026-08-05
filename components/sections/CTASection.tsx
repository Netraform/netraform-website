'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Button from '../ui/Button';

export default function CTASection() {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-electric-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-deep-blue-600/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container-content">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-6">
            Ready to Transform Your Future?
          </h2>
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 mb-12 max-w-2xl mx-auto">
            Join thousands of innovators, entrepreneurs, and organizations using Netraform to build intelligent solutions that matter.
          </p>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Button size="lg" variant="primary">
              Get Started Today
            </Button>
            <Button size="lg" variant="outline">
              Schedule a Demo
            </Button>
          </motion.div>

          <motion.p
            className="text-slate-600 dark:text-slate-400 mt-8 text-sm"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            No credit card required. Get access to our full platform in minutes.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
