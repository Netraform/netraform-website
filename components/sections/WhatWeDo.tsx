'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { HiArrowRight } from 'react-icons/hi2';
import { FiCode, FiCpu, FiCloud, FiActivity, FiLayers, FiLock } from 'react-icons/fi';

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
  {
    icon: FiActivity,
    title: 'Artificial Intelligence',
    description: 'Machine learning, NLP, and AI solutions tailored to your business needs.',
  },
  {
    icon: FiCode,
    title: 'Software Development',
    description: 'Full-stack development with modern technologies and best practices.',
  },
  {
    icon: FiCpu,
    title: 'Robotics & Automation',
    description: 'Intelligent automation and robotic systems for industrial solutions.',
  },
  {
    icon: FiCloud,
    title: 'Cloud & DevOps',
    description: 'Scalable cloud infrastructure and DevOps optimization.',
  },
  {
    icon: FiLayers,
    title: 'Web & Mobile',
    description: 'Modern web applications and mobile experiences.',
  },
  {
    icon: FiLock,
    title: 'Cybersecurity',
    description: 'Comprehensive security solutions and threat protection.',
  },
];

export default function WhatWeDo() {
  return (
    <section className="section-padding">
      <div className="container-content">
        {/* Header */}
        <motion.div
          className="max-w-2xl mb-16 md:mb-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block px-4 py-2 rounded-full bg-electric-blue-500/10 border border-electric-blue-500/30 text-electric-blue-600 dark:text-electric-blue-400 text-sm font-semibold mb-4">
            Our Services
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            What We Do
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            We specialize in transforming complex challenges into innovative solutions through cutting-edge technology and creative problem-solving.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={i}
                className="p-8 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 shadow-card hover:shadow-lg transition-all duration-300 group hover:border-electric-blue-500/50 dark:hover:border-electric-blue-400/50 hover:bg-electric-blue-50/50 dark:hover:bg-slate-800/50"
                variants={itemVariants}
                whileHover={{ y: -8 }}
              >
                <Icon className="w-12 h-12 text-electric-blue-600 dark:text-electric-blue-400 mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 mb-4">
                  {service.description}
                </p>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-electric-blue-600 dark:text-electric-blue-400 font-semibold hover:gap-3 transition-all"
                >
                  Learn More
                  <HiArrowRight className="w-4 h-4" />
                </a>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
