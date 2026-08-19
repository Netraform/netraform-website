'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Button from '../ui/Button';

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

const projects = [
  {
    title: 'AI-Powered Analytics Platform',
    description: 'Real-time data visualization and predictive analytics',
    tags: ['AI', 'Python', 'React'],
  },
  {
    title: 'Mobile Education App',
    description: 'Learning platform reaching 10,000+ students',
    tags: ['Mobile', 'React Native', 'Firebase'],
  },
  {
    title: 'Robotics Automation System',
    description: 'Industrial automation with computer vision',
    tags: ['Robotics', 'Python', 'OpenCV'],
  },
  {
    title: 'Cloud Microservices Architecture',
    description: 'Scalable backend for enterprise applications',
    tags: ['Cloud', 'Kubernetes', 'Docker'],
  },
  {
    title: 'Cybersecurity Platform',
    description: 'Advanced threat detection and response',
    tags: ['Security', 'Machine Learning', 'Linux'],
  },
  {
    title: 'Digital Transformation Suite',
    description: 'Business process automation and optimization',
    tags: ['Enterprise', 'Integration', 'DevOps'],
  },
];

 export default function FeaturedProjects() {
  return (
    <section className="section-padding">
      <div className="container-content">
        {/* Header */}
        <motion.div
          className="max-w-2xl mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Showcasing our latest and greatest innovations across industries.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project, i) => (
            <motion.div
              key={i}
              className="group rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 shadow-card hover:shadow-lg hover:border-electric-blue-500/50 dark:hover:border-electric-blue-400/50 overflow-hidden transition-all duration-300"
              variants={itemVariants}
              whileHover={{ y: -8 }}
            >
              <div className="h-40 bg-gradient-to-br from-deep-blue-500/10 to-electric-blue-500/10 dark:from-deep-blue-900/30 dark:to-electric-blue-900/30 group-hover:from-deep-blue-500/20 group-hover:to-electric-blue-500/20 transition-all duration-300"></div>
              <div className="p-6">
                <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, j) => (
                    <span
                      key={j}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-electric-blue-500/10 text-electric-blue-600 dark:text-electric-blue-400 border border-electric-blue-500/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        

        {/* CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Button variant="outline" size="lg" href="/projects">
            View All Projects
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
