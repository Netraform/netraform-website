'use client';

import React, { useState } from 'react';
import Button from '@/components/ui/Button';
import { motion } from 'framer-motion';
import {
  FiActivity,
  FiBarChart2,
  FiCloud,
  FiCode,
  FiCpu,
  FiGlobe,
  FiLock,
  FiMonitor,
  FiRefreshCw,
  FiZap,
  FiTerminal,
  FiPackage,
} from 'react-icons/fi';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const services = [
  {
    type: 'services',
    icon: FiActivity,
    title: 'Artificial Intelligence & ML',
    description: 'Custom AI solutions including machine learning models, natural language processing, computer vision, and predictive analytics.',
    features: ['Custom ML Models', 'NLP & African Language Processing', 'Computer Vision Pipelines', 'AI Strategy & Audits'],
    technologies: ['PyTorch', 'TensorFlow', 'Python', 'FastAPI'],
    industries: ['Finance', 'Healthcare', 'Agritech', 'Enterprise'],
  },
  {
    type: 'services',
    icon: FiCode,
    title: 'Full-Stack Software Engineering',
    description: 'Scalable custom web applications, APIs, and microservices engineered using modern frameworks and best practices.',
    features: ['High-Performance Web Apps', 'REST & GraphQL APIs', 'Microservices Architecture', 'Legacy Modernization'],
    technologies: ['TypeScript', 'Next.js', 'Node.js', 'Go', 'PostgreSQL'],
    industries: ['SaaS', 'Fintech', 'GovTech', 'E-commerce'],
  },
  {
    type: 'services',
    icon: FiCpu,
    title: 'Robotics & Embedded Systems',
    description: 'Intelligent hardware integration, sensor networks, and computer-vision powered automation for industrial and agricultural use.',
    features: ['Industrial IoT Integration', 'Vision-guided Controllers', 'Sensor Node Networks', 'Edge Micro-controllers'],
    technologies: ['C++', 'Python', 'OpenCV', 'ROS2', 'MQTT', 'Docker'],
    industries: ['Manufacturing', 'Agriculture', 'Logistics', 'Robotics Labs'],
  },
  {
    type: 'services',
    icon: FiCloud,
    title: 'Cloud Computing & DevOps',
    description: 'Cloud-native infrastructure design, CI/CD automation, serverless deployments, and Kubernetes orchestration.',
    features: ['Cloud Migrations', 'Infrastructure as Code', 'Kubernetes Orchestration', 'Automated CI/CD Pipelines'],
    technologies: ['AWS', 'Docker', 'Kubernetes', 'Terraform', 'GitHub Actions'],
    industries: ['Cloud-Native', 'Fintech', 'Enterprise', 'Media'],
  },
  {
    type: 'services',
    icon: FiMonitor,
    title: 'Web & Mobile App Development',
    description: 'Responsive web apps and cross-platform mobile applications optimized for performance and exceptional user experience.',
    features: ['Cross-Platform Mobile Apps', 'Progressive Web Apps (PWAs)', 'Offline-First Architectures', 'Design Systems'],
    technologies: ['React Native', 'Flutter', 'Tailwind CSS', 'TypeScript'],
    industries: ['EdTech', 'HealthTech', 'Consumer Apps', 'E-commerce'],
  },
  {
    type: 'services',
    icon: FiLock,
    title: 'Cybersecurity & Data Privacy',
    description: 'End-to-end security audits, threat detection, penetration testing, and privacy-preserving data architectures.',
    features: ['Vulnerability Assessment', 'Data Encryption Standards', 'Identity & Access Management', 'Compliance Audits'],
    technologies: ['OAuth2', 'Zero-Trust Architecture', 'OWASP Standards', 'OpenSSL'],
    industries: ['Fintech', 'Healthcare', 'Government', 'Enterprise'],
  },
  {
    type: 'services',
    icon: FiBarChart2,
    title: 'Data Science & BI Analytics',
    description: 'Extracting actionable intelligence from raw structured and unstructured data using modern ETL and interactive dashboards.',
    features: ['ETL Data Pipelines', 'Custom BI Dashboards', 'Predictive Trend Analysis', 'Data Governance'],
    technologies: ['Python', 'Pandas', 'PostgreSQL', 'Metabase', 'Apache Superset'],
    industries: ['Retail', 'Finance', 'Research', 'Logistics'],
  },
  {
    type: 'services',
    icon: FiRefreshCw,
    title: 'Digital Transformation Consulting',
    description: 'Guiding organizations through digital adoption, process automation, cloud transition, and tech stack modernization.',
    features: ['Tech Audit & Roadmap', 'Workflow Automation', 'Change Management', 'Executive Briefings'],
    technologies: ['Cloud Platforms', 'API Architectures', 'Low-Code Tools'],
    industries: ['Enterprise', 'Public Sector', 'NGOs', 'SMEs'],
  },
  {
    type: 'services',
    icon: FiZap,
    title: 'UI/UX & Product Design',
    description: 'Human-centered UI/UX design, wireframing, interactive prototyping, and accessible design systems.',
    features: ['User Research & Testing', 'Interactive Wireframes', 'Tailored Design Systems', 'Accessibility Audits'],
    technologies: ['Figma', 'Tailwind CSS', 'Design Systems'],
    industries: ['All Digital Products', 'Mobile', 'Web Apps'],
  },
  {
    type: 'services',
    icon: FiGlobe,
    title: 'Corporate & Technical Training',
    description: 'Empowering engineering teams with structured workshops in AI, cloud computing, modern frontend, and security.',
    features: ['Custom Corporate Bootcamps', 'Technical Workshops', 'Hands-On Labs', 'Skill Certifications'],
    technologies: ['AI/ML', 'Cloud Native', 'DevOps', 'TypeScript'],
    industries: ['Corporate Teams', 'Gov Agencies', 'University Faculty'],
  },
];

const products = [
  {
    icon: FiPackage,
    title: 'NetraAI Studio',
    tagline: 'Developer AI Tooling',
    description: 'An open toolkit for fine-tuning, evaluating, and deploying lightweight LLMs and computer vision models on edge hardware.',
    tech: ['Python', 'PyTorch', 'ONNX', 'Docker'],
    status: 'Open Source / In Development',
  },
  {
    icon: FiTerminal,
    title: 'RoboCore Framework',
    tagline: 'Robotics Integration SDK',
    description: 'C++ & Python micro-libraries for communicating with sensor arrays, motor controllers, and vision cameras over MQTT.',
    tech: ['C++', 'Python', 'MQTT', 'ROS2'],
    status: 'Open Source Starter Kit',
  },
  {
    icon: FiPackage,
    title: 'CivicPulse Engine',
    tagline: 'GovTech & Civic Analytics',
    description: 'A modular data aggregation engine designed for transparent public policy research, open datasets, and civic dashboards.',
    tech: ['Next.js', 'PostgreSQL', 'FastAPI'],
    status: 'Open Project',
  },
];

export default function ServicesClient() {
  const [filter, setFilter] = useState<'all' | 'services' | 'products'>('all');

  const displayedServices = services.filter(s => filter === 'all' || filter === s.type);

  return (
    <div className="w-full">
      {/* Hero Section */}
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
            <div className="inline-block px-4 py-1.5 rounded-full bg-electric-blue-500/10 border border-electric-blue-500/30 text-electric-blue-600 dark:text-electric-blue-400 text-xs md:text-sm font-semibold mb-6">
              Services & Developer Tools
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-6">
              Solutions Engineered for Excellence
            </h1>
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-2xl leading-relaxed">
              We deliver end-to-end software engineering, artificial intelligence, cloud architecture, and open-source developer tooling tailored for modern organizations.
            </p>

            {/* Filter Buttons */}
            <div className="flex flex-wrap gap-3 pt-4">
              <button
                onClick={() => setFilter('all')}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all ${
                  filter === 'all'
                    ? 'bg-deep-blue-600 text-white dark:bg-electric-blue-500'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                }`}
              >
                All Offerings
              </button>
              <button
                onClick={() => setFilter('services')}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all ${
                  filter === 'services'
                    ? 'bg-deep-blue-600 text-white dark:bg-electric-blue-500'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                }`}
              >
                Technology Services
              </button>
              <button
                onClick={() => setFilter('products')}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all ${
                  filter === 'products'
                    ? 'bg-deep-blue-600 text-white dark:bg-electric-blue-500'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                }`}
              >
                Developer Products & Tools
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      {(filter === 'all' || filter === 'services') && (
        <section className="section-padding">
          <div className="container-content">
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-2">
                Engineering Services
              </h2>
              <p className="text-slate-600 dark:text-slate-400 text-sm">
                Tailored technology solutions designed and implemented by expert engineers.
              </p>
            </div>

            <motion.div
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {displayedServices.map((service, i) => {
                const Icon = service.icon;
                return (
                  <motion.div
                    key={i}
                    className="group p-8 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800/80 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between hover:border-electric-blue-500/50"
                    variants={itemVariants}
                    whileHover={{ y: -4 }}
                  >
                    <div>
                      <div className="w-12 h-12 rounded-xl bg-electric-blue-500/10 dark:bg-electric-blue-400/10 flex items-center justify-center mb-6 text-electric-blue-600 dark:text-electric-blue-400 group-hover:scale-110 transition-transform">
                        <Icon className="w-6 h-6" />
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                        {service.title}
                      </h3>
                      <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 leading-relaxed">
                        {service.description}
                      </p>

                      {/* Features */}
                      <div className="mb-6 space-y-2">
                        <p className="text-xs font-semibold text-slate-900 dark:text-white uppercase tracking-wider">
                          Key Capabilities:
                        </p>
                        {service.features.map((feature, j) => (
                          <div key={j} className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-400">
                            <span className="w-1.5 h-1.5 rounded-full bg-electric-blue-500"></span>
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-6 border-t border-slate-200 dark:border-slate-700/60">
                      <div className="flex flex-wrap gap-1.5">
                        {service.technologies.map((tech, k) => (
                          <span
                            key={k}
                            className="px-2.5 py-1 text-[11px] font-medium rounded-full bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>
      )}

      {/* Developer Products & Open Source Section */}
      {(filter === 'all' || filter === 'products') && (
        <section className="section-padding bg-slate-50 dark:bg-slate-900/50 border-t border-slate-200 dark:border-slate-800">
          <div className="container-content">
            <div className="max-w-3xl mb-12">
              <div className="inline-block px-3 py-1 rounded-full bg-electric-blue-500/10 border border-electric-blue-500/30 text-electric-blue-600 dark:text-electric-blue-400 text-xs font-semibold mb-3">
                Products & Open Source
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-2">
                Developer Tools & Starter Kits
              </h2>
              <p className="text-slate-600 dark:text-slate-400 text-sm">
                Open-source software, micro-frameworks, and developer tools built by Netraform engineers.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {products.map((prod, i) => {
                const Icon = prod.icon;
                return (
                  <div
                    key={i}
                    className="p-8 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-10 h-10 rounded-lg bg-deep-blue-600/10 dark:bg-electric-blue-500/10 flex items-center justify-center text-electric-blue-600 dark:text-electric-blue-400">
                          <Icon className="w-5 h-5" />
                        </div>
                        <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                          {prod.status}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">
                        {prod.title}
                      </h3>
                      <p className="text-xs font-semibold text-electric-blue-600 dark:text-electric-blue-400 mb-3">
                        {prod.tagline}
                      </p>
                      <p className="text-slate-600 dark:text-slate-400 text-xs leading-relaxed mb-6">
                        {prod.description}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-200 dark:border-slate-700/60">
                      {prod.tech.map((t, j) => (
                        <span key={j} className="px-2 py-0.5 text-[10px] font-medium rounded bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="section-padding">
        <div className="container-content">
          <div className="p-10 md:p-14 rounded-3xl bg-gradient-to-r from-deep-blue-600 via-deep-blue-700 to-electric-blue-600 text-white text-center max-w-4xl mx-auto shadow-xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Have a Project or Engineering Challenge?
            </h2>
            <p className="text-slate-200 text-base md:text-lg mb-8 max-w-xl mx-auto">
              Our engineering and research team is ready to collaborate with you to build scalable, high-impact software solutions.
            </p>
            <Button size="lg" variant="secondary" href="/contact">
              Discuss Your Project
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
