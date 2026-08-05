'use client';

import Button from '@/components/ui/Button';
import { motion } from 'framer-motion';
import { FiAward, FiTarget, FiTrendingUp, FiUsers } from 'react-icons/fi';

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

const programs = [
  {
    icon: FiTarget,
    title: 'AI Bootcamp',
    duration: '12 Weeks',
    description: 'Intensive hands-on bootcamp covering machine learning, deep learning, and AI applications.',
    includes: ['Expert instructors', 'Real-world projects', 'Industry mentorship', 'Job placement'],
  },
  {
    icon: FiUsers,
    title: 'Hackathons',
    duration: 'Quarterly',
    description: 'Bi-annual 48-hour hackathons bringing together innovators, engineers, and designers.',
    includes: ['$50K+ prizes', 'Mentor support', 'Industry judges', 'Networking'],
  },
  {
    icon: FiTrendingUp,
    title: 'Startup Incubation',
    duration: '6 Months',
    description: 'Full incubation program with funding, mentorship, and access to our network.',
    includes: ['Seed funding', 'Office space', 'Mentors', 'Investor network'],
  },
  {
    icon: FiAward,
    title: 'Fellowship Program',
    duration: '3 Months',
    description: 'Exclusive fellowship for experienced professionals to lead innovation initiatives.',
    includes: ['Stipend', 'Leadership role', 'Network access', 'Publishing'],
  },
];

export default function InnovationHubClient() {
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
              Innovation Hub
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-2xl">
              Learn, build, and innovate with our world-class programs designed to accelerate your skills and career.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Programs */}
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
              Our Programs
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Choose the program that fits your goals and join hundreds of innovators.
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {programs.map((program, i) => {
              const Icon = program.icon;
              return (
                <motion.div
                  key={i}
                  className="group p-8 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 shadow-card hover:shadow-lg hover:border-electric-blue-500/50 dark:hover:border-electric-blue-400/50 transition-all duration-300"
                  variants={itemVariants}
                  whileHover={{ y: -8 }}
                >
                  <Icon className="w-14 h-14 text-electric-blue-600 dark:text-electric-blue-400 mb-6 group-hover:scale-110 transition-transform" />
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                    {program.title}
                  </h3>
                  <p className="text-sm text-electric-blue-600 dark:text-electric-blue-400 font-semibold mb-4">
                    {program.duration}
                  </p>
                  <p className="text-slate-600 dark:text-slate-400 mb-6">
                    {program.description}
                  </p>
                  <div className="mb-8 space-y-2">
                    {program.includes.map((item, j) => (
                      <div key={j} className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-electric-blue-500"></div>
                        <span className="text-slate-600 dark:text-slate-400 text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                  <Button variant="primary" size="md" href="#">
                    Learn More
                  </Button>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Campus Ambassadors */}
      <section className="section-padding bg-slate-50 dark:bg-slate-900/50">
        <div className="container-content">
          <motion.div
            className="grid md:grid-cols-2 gap-12 md:gap-16 items-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
                Campus Ambassador Program
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-6">
                Are you a student leader passionate about technology and innovation? Join our campus ambassador program to represent Netraform at your university.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  'Exclusive access to our programs',
                  'Stipend and benefits',
                  'Leadership opportunities',
                  'Mentorship from industry experts',
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-electric-blue-500 flex-shrink-0"></div>
                    <span className="text-slate-700 dark:text-slate-300">{item}</span>
                  </li>
                ))}
              </ul>
              <Button variant="primary" size="lg" href="#">
                Apply as Ambassador
              </Button>
            </motion.div>

            <motion.div
              className="h-64 md:h-80 rounded-lg bg-gradient-to-br from-deep-blue-500/10 to-electric-blue-500/10 dark:from-deep-blue-900/30 dark:to-electric-blue-900/30"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            ></motion.div>
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
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
              Why Join Our Programs?
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Transform your career and make an impact.
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              { title: 'Learn from Experts', description: 'Industry veterans and top practitioners sharing real-world insights.' },
              { title: 'Build Real Projects', description: 'Work on actual problems solving real issues for real clients.' },
              { title: 'Network & Collaborate', description: 'Connect with talented peers, mentors, and industry leaders.' },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="p-8 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-center"
                variants={itemVariants}
              >
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400">
                  {item.description}
                </p>
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
              Ready to Innovate?
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-8">
              Applications are open now. Join us and start your innovation journey.
            </p>
            <Button size="lg" variant="primary" href="#apply">
              Apply Now
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
