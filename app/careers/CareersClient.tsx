'use client';

import Button from '@/components/ui/Button';
import { motion } from 'framer-motion';
import { FiBriefcase, FiMapPin, FiUsers } from 'react-icons/fi';

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

const openings = [
  {
    title: 'Senior Machine Learning Engineer',
    department: 'Engineering',
    location: 'Lagos, Nigeria',
    type: 'Full-time',
    level: 'Senior',
    description: 'Lead ML initiatives and build scalable AI solutions.',
  },
  {
    title: 'Full-Stack Software Engineer',
    department: 'Engineering',
    location: 'Remote',
    type: 'Full-time',
    level: 'Mid-level',
    description: 'Build web and mobile applications using modern technologies.',
  },
  {
    title: 'Robotics Systems Engineer',
    department: 'Robotics',
    location: 'Lagos, Nigeria',
    type: 'Full-time',
    level: 'Mid-level',
    description: 'Design and implement intelligent robotic systems.',
  },
  {
    title: 'Cloud Infrastructure Specialist',
    department: 'DevOps',
    location: 'Remote',
    type: 'Full-time',
    level: 'Mid-level',
    description: 'Build and maintain scalable cloud infrastructure.',
  },
  {
    title: 'Data Science Intern',
    department: 'Engineering',
    location: 'Lagos, Nigeria',
    type: 'Internship',
    level: 'Junior',
    description: 'Learn data science and work on real-world projects.',
  },
  {
    title: 'Product Manager',
    department: 'Product',
    location: 'Lagos, Nigeria',
    type: 'Full-time',
    level: 'Mid-level',
    description: 'Drive product vision and strategy.',
  },
];

export default function CareersClient() {
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
              Build the Future With Us
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-2xl">
              Join a team of innovators, engineers, and visionaries working to transform the world through technology.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Join */}
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
              Why Join Netraform?
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              We offer more than just a job - we offer a platform to grow, innovate, and make an impact.
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
              { icon: FiUsers, title: 'Talented Team', description: 'Work alongside passionate engineers, designers, and product experts.' },
              { icon: FiBriefcase, title: 'Growth Opportunities', description: 'Continuous learning, mentorship, and career development.' },
              { icon: FiUsers, title: 'Inclusive Culture', description: 'Diverse, welcoming environment where everyone can thrive.' },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={i}
                  className="p-8 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-center"
                  variants={itemVariants}
                >
                  <Icon className="w-12 h-12 text-electric-blue-600 dark:text-electric-blue-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Open Positions */}
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
              Open Positions
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              We&apos;re always looking for talented people to join our team.
            </p>
          </motion.div>

          <motion.div
            className="space-y-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {openings.map((position, i) => (
              <motion.a
                key={i}
                href="#"
                className="group p-6 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 shadow-card hover:shadow-lg hover:border-electric-blue-500/50 dark:hover:border-electric-blue-400/50 transition-all duration-300 flex flex-col md:flex-row items-start md:items-center justify-between"
                variants={itemVariants}
                whileHover={{ x: 8 }}
              >
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-electric-blue-600 dark:group-hover:text-electric-blue-400 transition-colors">
                    {position.title}
                  </h3>
                  <div className="flex flex-wrap gap-4 text-sm text-slate-600 dark:text-slate-400">
                    <div className="flex items-center gap-1">
                      <FiBriefcase className="w-4 h-4" />
                      {position.department}
                    </div>
                    <div className="flex items-center gap-1">
                      <FiMapPin className="w-4 h-4" />
                      {position.location}
                    </div>
                    <div className="px-2 py-1 rounded bg-electric-blue-500/10 text-electric-blue-600 dark:text-electric-blue-400 text-xs font-semibold">
                      {position.type}
                    </div>
                  </div>
                </div>
                <Button variant="ghost" size="sm" className="mt-4 md:mt-0">
                  Apply Now
                </Button>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-r from-deep-blue-600 to-electric-blue-600 dark:from-deep-blue-900 dark:to-electric-blue-900 text-white">
        <div className="container-content">
          <motion.div
            className="max-w-2xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Don&apos;t see your perfect fit?
            </h2>
            <p className="text-lg opacity-90 mb-8">
              Send us your resume and tell us what you&apos;d like to do.
            </p>
            <Button variant="secondary" size="lg">
              Send Your CV
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
