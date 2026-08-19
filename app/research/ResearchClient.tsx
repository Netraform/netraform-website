'use client';

import Button from '@/components/ui/Button';
import { motion } from 'framer-motion';
import { FiBook, FiGlobe, FiTrendingUp, FiUsers } from 'react-icons/fi';

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

const researchAreas = [
  {
    icon: FiTrendingUp,
    title: 'AI & Machine Learning',
    description: 'Cutting-edge research in deep learning, natural language processing, and computer vision.',
    focus: ['Neural Architecture Design', 'Transfer Learning', 'Few-shot Learning', 'Interpretable AI'],
  },
  {
    icon: FiBook,
    title: 'Robotics & Automation',
    description: 'Advanced robotics systems combining vision, control theory, and artificial intelligence.',
    focus: ['Robot Vision', 'Motion Planning', 'Human-Robot Interaction', 'Swarm Robotics'],
  },
  {
    icon: FiGlobe,
    title: 'Cloud & Distributed Systems',
    description: 'Research into scalable, efficient, and secure distributed computing architectures.',
    focus: ['Microservices Architecture', 'Edge Computing', 'Container Orchestration', 'Service Mesh'],
  },
  {
    icon: FiUsers,
    title: 'Cybersecurity & Privacy',
    description: 'Innovations in security, encryption, and privacy-preserving technologies.',
    focus: ['Zero Trust Architecture', 'Differential Privacy', 'Blockchain Security', 'Threat Detection'],
  },
];

const publications = [
  {
    title: 'Deep Learning for African Language Processing',
    authors: 'Dr. Amara Okonkwo, Chisom Ikechukwu',
    venue: 'NeurIPS 2024',
    impact: '45 citations',
  },
  {
    title: 'Scalable Microservices Patterns in Cloud-Native Applications',
    authors: 'Zainab Hassan, Kwame Asante',
    venue: 'CloudConf 2024',
    impact: '28 citations',
  },
  {
    title: 'Vision-Based Quality Control in Manufacturing Using Real-time CNN',
    authors: 'Ade Oluwaseun, Sarah Mensah',
    venue: 'RoboVision 2024',
    impact: '32 citations',
  },
];

export default function ResearchClient() {
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
              Research & Innovation
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-2xl">
              Advancing the frontier of technology through rigorous research and collaborative innovation in AI, robotics, cloud computing, and cybersecurity.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Research Areas */}
      <section className="section-padding">
        <div className="container-content">
          <motion.div
            className="max-w-3xl mx-auto text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
              Research Areas
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Our research spans critical areas shaping the future of technology.
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {researchAreas.map((area, i) => {
              const Icon = area.icon;
              return (
                <motion.div
                  key={i}
                  className="group p-8 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 shadow-card hover:shadow-lg hover:border-electric-blue-500/50 dark:hover:border-electric-blue-400/50 transition-all duration-300"
                  variants={itemVariants}
                  whileHover={{ y: -8 }}
                >
                  <Icon className="w-14 h-14 text-electric-blue-600 dark:text-electric-blue-400 mb-6 group-hover:scale-110 transition-transform" />
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
                    {area.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 mb-6">
                    {area.description}
                  </p>
                  <div>
                    <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-3">
                      Focus Areas
                    </p>
                    <div className="space-y-2">
                      {area.focus.map((focus, j) => (
                        <div key={j} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-electric-blue-500"></div>
                          <span className="text-sm text-slate-600 dark:text-slate-400">{focus}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Publications
      <section className="section-padding bg-slate-50 dark:bg-slate-900/50">
        <div className="container-content">
          <motion.div
            className="max-w-3xl mx-auto text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
              Recent Publications
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Our research published in top-tier venues and conferences.
            </p>
          </motion.div>

          <motion.div
            className="space-y-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {publications.map((pub, i) => (
              <motion.a
                key={i}
                href="#"
                className="p-6 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 shadow-card hover:shadow-lg hover:border-electric-blue-500/50 transition-all duration-300 group flex items-start justify-between"
                variants={itemVariants}
                whileHover={{ x: 8 }}
              >
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-electric-blue-600 dark:group-hover:text-electric-blue-400 transition-colors">
                    {pub.title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">
                    {pub.authors}
                  </p>
                  <div className="flex items-center gap-4 text-sm">
                    <span className="text-electric-blue-600 dark:text-electric-blue-400 font-semibold">
                      {pub.venue}
                    </span>
                    <span className="text-slate-500 dark:text-slate-500">•</span>
                    <span className="text-slate-600 dark:text-slate-400">{pub.impact}</span>
                  </div>
                </div>
                <Button variant="ghost" size="sm" className="ml-4 flex-shrink-0">
                  Read
                </Button>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </section> */}

      {/* Collaborations */}
      {/* <section className="section-padding">
        <div className="container-content">
          <motion.div
            className="max-w-3xl mx-auto text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
              Academic Partnerships
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Collaborating with leading universities and research institutions globally.
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              'MIT',
              'Stanford University',
              'University of Tokyo',
              'Imperial College London',
              'ETH Zurich',
              'University of Toronto',
              'Carnegie Mellon',
              'Oxford University',
            ].map((uni, i) => (
              <motion.div
                key={i}
                className="p-6 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-center"
                variants={itemVariants}
              >
                <p className="font-semibold text-slate-900 dark:text-white">{uni}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section> */}

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
              Interested in Research?
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-8">
              Join us in advancing the frontier of technology. Contact us to explore research opportunities and collaborations.
            </p>
            <Button size="lg" variant="primary" href="/contact">
              Get In Touch
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
