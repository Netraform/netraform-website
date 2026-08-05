'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Button from '../ui/Button';

export default function InnovationHighlight() {
  return (
    <section className="section-padding bg-gradient-to-r from-deep-blue-600 to-electric-blue-600 dark:from-deep-blue-900 dark:to-electric-blue-900 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="container-content relative z-10">
        <motion.div
          className="max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Innovation Hub
          </h2>
          <p className="text-lg opacity-90 mb-8">
            We&apos;re not just a technology company. We&apos;re a hub for innovation, learning, and transformation. Join a community of innovators, entrepreneurs, and engineers building the future.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {[
              { title: 'Bootcamps', desc: '12-week intensive programs' },
              { title: 'Fellowships', desc: 'Mentorship & networking' },
              { title: 'Hackathons', desc: 'Community challenges' },
              { title: 'Incubation', desc: 'Startup support' },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="p-4 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-300"
                whileHover={{ x: 8 }}
              >
                <h3 className="font-bold mb-1">{item.title}</h3>
                <p className="opacity-80 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <Button variant="secondary" size="lg">
            Explore Innovation Hub
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
