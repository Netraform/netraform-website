'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Button from '../ui/Button';
import { HiArrowRight } from 'react-icons/hi2';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const floatingVariants = {
  hidden: { opacity: 0, y: 100 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 1, delay: 0.4 }
  },
};

export default function Hero() {
  return (
    <section className="relative min-h-screen pt-24 md:pt-32 pb-16 md:pb-24 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-electric-blue-500/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-deep-blue-600/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container-content relative z-10">
        <motion.div
          className="max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Badge */}
          <motion.div
            className="flex justify-center mb-8 md:mb-12"
            variants={itemVariants}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-electric-blue-500/10 border border-electric-blue-500/30 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-electric-blue-500 animate-pulse"></span>
              <span className="text-sm font-semibold text-electric-blue-600 dark:text-electric-blue-400">
                Now Open to Everyone
              </span>
            </div>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-center leading-tight mb-6 md:mb-8 text-slate-900 dark:text-white"
            variants={itemVariants}
          >
            Building{' '}
            <span className="bg-gradient-to-r from-deep-blue-600 via-electric-blue-500 to-cyan-500 bg-clip-text text-transparent">
              the Future
            </span>
            <br />
            <span>Together</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-lg md:text-xl text-slate-600 dark:text-slate-300 text-center max-w-2xl mx-auto mb-8 md:mb-12"
            variants={itemVariants}
          >
           Empowering the next generation through AI, software engineering, robotics, and digital transformation — building intelligent solutions that matter.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 mb-16 md:mb-24"
            variants={itemVariants}
          >
            <Button size="lg" variant="primary" className="group">
              Explore Services
              <HiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline">
              Learn More
            </Button>
          </motion.div>

          {/* Stats Preview */}
          <motion.div
            className="grid md:grid-cols-3 gap-6 md:gap-8 mb-16"
            variants={floatingVariants}
          >
            {[
              { number: '500+', label: 'Innovators' },
              { number: '50+', label: 'Projects' },
              { number: '15+', label: 'Countries' },
            ].map((stat, i) => (
              <motion.div
                key={i}
                className="text-center p-6 rounded-lg backdrop-blur-md bg-white/10 dark:bg-slate-900/10 border border-white/20 dark:border-slate-700/20 hover:bg-white/20 dark:hover:bg-slate-900/20 transition-all duration-300"
                whileHover={{ y: -5 }}
              >
                <div className="text-3xl md:text-4xl font-bold text-electric-blue-600 dark:text-electric-blue-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-slate-600 dark:text-slate-400 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="fixed bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-slate-300 dark:border-slate-700 rounded-full flex justify-center">
          <span className="w-1 h-2 bg-slate-300 dark:bg-slate-700 rounded-full mt-2"></span>
        </div>
      </motion.div>
    </section>
  );
}
