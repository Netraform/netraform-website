'use client';

import Button from '@/components/ui/Button';
import { motion } from 'framer-motion';
import { HiArrowRight } from 'react-icons/hi2';

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
    category: 'AI & Analytics',
    description: 'Real-time data visualization and predictive analytics platform serving 50,000+ users.',
    impact: '3x faster insights, 40% cost reduction',
    technologies: ['Python', 'TensorFlow', 'React', 'PostgreSQL', 'Kubernetes'],
    industry: 'Finance',
  },
  {
    title: 'Mobile Learning Ecosystem',
    category: 'Mobile & EdTech',
    description: 'Cross-platform mobile app connecting educators and learners across Africa.',
    impact: '100,000+ active learners, 15+ countries',
    technologies: ['React Native', 'Firebase', 'Node.js', 'GraphQL'],
    industry: 'Education',
  },
  {
    title: 'Industrial Automation System',
    category: 'Robotics & IoT',
    description: 'Computer vision-powered quality control for manufacturing with 99.8% accuracy.',
    impact: '50% reduction in defects, 24/7 monitoring',
    technologies: ['OpenCV', 'RaspberryPi', 'Python', 'MQTT', 'Docker'],
    industry: 'Manufacturing',
  },
  {
    title: 'Enterprise Cloud Migration',
    category: 'Cloud & DevOps',
    description: 'Zero-downtime migration of legacy monolithic system to microservices on Kubernetes.',
    impact: '60% infrastructure cost savings, 99.99% uptime',
    technologies: ['Kubernetes', 'Docker', 'AWS', 'Terraform', 'Jenkins'],
    industry: 'Enterprise',
  },
  {
    title: 'Healthcare Data Security Platform',
    category: 'Security & Healthcare',
    description: 'HIPAA-compliant data management and encryption solution for healthcare providers.',
    impact: 'Secured 10M+ patient records, 100% compliance',
    technologies: ['Go', 'Encryption', 'FHIR', 'PostgreSQL', 'AWS'],
    industry: 'Healthcare',
  },
  {
    title: 'E-Commerce Transformation',
    category: 'Web & E-Commerce',
    description: 'Modern headless e-commerce platform with 99.9% uptime and custom integrations.',
    impact: '200% increase in sales, 50% faster checkout',
    technologies: ['Next.js', 'TypeScript', 'Stripe', 'Redis', 'Elasticsearch'],
    industry: 'Retail',
  },
];

export default function ProjectsClient() {
  return (
    <div className="w-full">
      {/* Hero */}
      <section className="pt-32 md:pt-40 pb-16 md:pb-24 overflow-hidden relative">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-electric-blue-500/20 rounded-full blur-3xl"></div>
        </div>
        <div className="container-content">
          <motion.div
            className="max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 dark:text-white mb-6">
              Our Project Portfolio
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-2xl">
              Showcasing innovative solutions we&apos;ve built across industries, from AI and robotics to cloud infrastructure and digital transformation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-padding">
        <div className="container-content">
          <motion.div
            className="grid md:grid-cols-2 gap-8"
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
                {/* Header Image Placeholder */}
                <div className="h-48 bg-gradient-to-br from-deep-blue-500/10 to-electric-blue-500/10 dark:from-deep-blue-900/30 dark:to-electric-blue-900/30 group-hover:from-deep-blue-500/20 group-hover:to-electric-blue-500/20 transition-all duration-300"></div>

                {/* Content */}
                <div className="p-8">
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-electric-blue-500/10 text-electric-blue-600 dark:text-electric-blue-400 border border-electric-blue-500/30">
                      {project.category}
                    </span>
                    <span className="ml-2 inline-block px-3 py-1 text-xs font-medium rounded-full bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300">
                      {project.industry}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
                    {project.title}
                  </h3>

                  <p className="text-slate-600 dark:text-slate-400 mb-4">
                    {project.description}
                  </p>

                  <div className="mb-6 p-4 bg-slate-50 dark:bg-slate-900/50 rounded-lg border border-slate-200 dark:border-slate-700">
                    <p className="text-sm font-semibold text-slate-900 dark:text-white mb-1">
                      Impact:
                    </p>
                    <p className="text-sm text-electric-blue-600 dark:text-electric-blue-400 font-medium">
                      {project.impact}
                    </p>
                  </div>

                  <div className="mb-6">
                    <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-3">
                      Technologies
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, j) => (
                        <span
                          key={j}
                          className="px-2 py-1 text-xs rounded bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <a
                    href="#"
                    className="inline-flex items-center gap-2 text-electric-blue-600 dark:text-electric-blue-400 font-semibold hover:gap-3 transition-all group/link"
                  >
                    View Case Study
                    <HiArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="section-padding bg-gradient-to-r from-deep-blue-600 to-electric-blue-600 dark:from-deep-blue-900 dark:to-electric-blue-900 text-white">
        <div className="container-content">
          <motion.div
            className="grid md:grid-cols-4 gap-8 text-center"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              { number: '50+', label: 'Projects Completed' },
              { number: '20+', label: 'Industries Served' },
              { number: '$50M+', label: 'Client Value Created' },
              { number: '100%', label: 'Client Satisfaction' },
            ].map((stat, i) => (
              <motion.div key={i} variants={itemVariants}>
                <div className="text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-white/80">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container-content">
          <motion.div
            className="max-w-2xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-8">
              Let&apos;s discuss how we can build something amazing together.
            </p>
            <Button size="lg" variant="primary" href="/contact">
              Start a Project
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
