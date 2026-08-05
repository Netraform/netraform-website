'use client';

import Button from '@/components/ui/Button';
import { motion } from 'framer-motion';
import { FiAward, FiGithub, FiLinkedin, FiTarget, FiTrendingUp, FiUsers } from 'react-icons/fi';

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

const timeline = [
  {
    year: '2026',
    title: 'Foundation & Ecosystem Launch',
    description: 'Established Netraform Technologies in Kano, Nigeria. Launched core research labs in AI & Robotics, community platform, and open-source starter kits.',
    milestones: ['Web platform launch', 'Core research labs established', 'First cohort of campus ambassadors'],
  },
  {
    year: '2027',
    title: 'Fellowships & Applied Research Expansion',
    description: 'Scaling the AI Bootcamp, launching the quarterly African Tech Hackathon, and publishing applied research papers on natural language processing and computer vision.',
    milestones: ['Quarterly Hackathons', 'Open datasets release', 'Academic research partnerships'],
  },
  {
    year: '2028+',
    title: 'Global Innovation & Product Scaling',
    description: 'Expanding software incubation programs, releasing enterprise open-source tooling, and fostering global technology partnerships across Africa and beyond.',
    milestones: ['Enterprise open-source tools', 'Startup incubation fund', 'International tech exchange'],
  },
];

const teamMembers = [
  {
    name: 'Abdulrazaq Isah Dikko',
    role: 'Co-Founder & Managing Director',
    bio: 'AI and Robotics Engineer.',
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
  },
  {
    name: 'Ukashatu Idris Sulaiman',
    role: 'Head of Technology.',
    bio: 'Specialist in Web development.',
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
  },
  {
    name: 'Khalid Isah',
    role: 'Director of Community & Bootcamps',
    bio: 'Education strategist leading Netraform mentorship programs, hackathons, and university ambassador networks.',
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
  },
  {
    name: 'Rachel Rolake',
    role: 'Lead Robotics and Embedded System.',
    bio: 'An expert in Robotics, IoT and Embedded System.',
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
  },
];

const partners = [
  { name: 'Academic Partners', desc: 'Collaborating on AI research and university innovation labs.' },
  { name: 'Industry Collaborators', desc: 'Partnering on real-world engineering challenges and cloud deployments.' },
  { name: 'Community Networks', desc: 'Empowering grass-roots developer communities and student groups.' },
  { name: 'Innovation Hubs', desc: 'Cross-sharing resources with startup incubators across Africa.' },
];

export default function AboutClient() {
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
              About Netraform Technologies
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-6">
              Building the Future Through Innovation
            </h1>
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-2xl leading-relaxed">
              Netraform Technologies is an innovation hub and technology company dedicated to solving real-world challenges through artificial intelligence, software engineering, robotics, and digital transformation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-slate-50 dark:bg-slate-900/50">
        <div className="container-content">
          <motion.div
            className="grid md:grid-cols-2 gap-12 md:gap-16"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={itemVariants} className="p-8 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/80">
              <div className="inline-block px-3 py-1 rounded-full bg-electric-blue-500/10 border border-electric-blue-500/30 text-electric-blue-600 dark:text-electric-blue-400 text-xs font-semibold mb-4">
                Our Mission
              </div>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
                Empowering Innovation & Excellence
              </h2>
              <p className="text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
                We believe that technology should solve meaningful problems. Our mission is to bridge the gap between innovation and real-world impact by building intelligent software, advancing applied research, and nurturing the next generation of technology leaders.
              </p>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                We operate at the intersection of AI, software engineering, robotics, and digital transformation—creating opportunities for innovators to learn, collaborate, and build solutions that matter.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="p-8 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/80">
              <div className="inline-block px-3 py-1 rounded-full bg-electric-blue-500/10 border border-electric-blue-500/30 text-electric-blue-600 dark:text-electric-blue-400 text-xs font-semibold mb-4">
                Our Vision
              </div>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
                Global Standards, Local Relevance
              </h2>
              <p className="text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
                We envision a future where technological democratisation enables individuals and institutions across Africa to create software and systems of global quality.
              </p>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Our motto captures our commitment: <span className="font-bold text-electric-blue-600 dark:text-electric-blue-400">Building the Future, Together.</span> Together as a community, together across disciplines, and together toward sustainable development.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding">
        <div className="container-content">
          <motion.div
            className="text-center max-w-2xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Our Guiding Principles
            </h2>
            <p className="text-slate-600 dark:text-slate-400">
              The values that drive our engineering, research, and community efforts every day.
            </p>
          </motion.div>

          <motion.div
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              { icon: FiTarget, title: 'Impact First', description: 'We measure success by practical utility and tangible positive change.' },
              { icon: FiUsers, title: 'Community', description: 'We foster peer collaboration, open source, and mutual growth.' },
              { icon: FiAward, title: 'Technical Mastery', description: 'We pursue rigorous standards in code, architecture, and documentation.' },
              { icon: FiTrendingUp, title: 'Applied Innovation', description: 'We transform theoretical research into accessible software and tools.' },
            ].map((value, i) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={i}
                  className="p-6 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800/60 shadow-sm hover:shadow-md transition-all duration-300 group hover:border-electric-blue-500/50"
                  variants={itemVariants}
                  whileHover={{ y: -4 }}
                >
                  <Icon className="w-10 h-10 text-electric-blue-600 dark:text-electric-blue-400 mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                    {value.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Honest Impact Timeline */}
      <section className="section-padding bg-slate-50 dark:bg-slate-900/50">
        <div className="container-content">
          <motion.div
            className="max-w-3xl mx-auto text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Our Strategic Roadmap
            </h2>
            <p className="text-slate-600 dark:text-slate-400">
              A transparent view of Netraform&apos;s growth milestones as we expand our ecosystem.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-8">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                className="p-8 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800 relative overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                  <span className="text-3xl font-black text-electric-blue-600 dark:text-electric-blue-400">
                    {item.year}
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white md:text-right">
                    {item.title}
                  </h3>
                </div>
                <p className="text-slate-600 dark:text-slate-300 text-sm md:text-base mb-6 leading-relaxed">
                  {item.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {item.milestones.map((m, j) => (
                    <span
                      key={j}
                      className="px-3 py-1 text-xs font-semibold rounded-full bg-electric-blue-500/10 text-electric-blue-600 dark:text-electric-blue-400 border border-electric-blue-500/20"
                    >
                      ✓ {m}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="section-padding">
        <div className="container-content">
          <motion.div
            className="max-w-3xl mx-auto text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Team & Contributors
            </h2>
            <p className="text-slate-600 dark:text-slate-400">
              The engineers, researchers, and community leads driving Netraform.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, i) => (
              <motion.div
                key={i}
                className="p-6 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800/80 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div>
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-deep-blue-600 to-electric-blue-500 mb-4 flex items-center justify-center text-white text-xl font-bold">
                    {member.name.charAt(0)}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    {member.name}
                  </h3>
                  <p className="text-xs font-semibold text-electric-blue-600 dark:text-electric-blue-400 mb-3">
                    {member.role}
                  </p>
                  <p className="text-slate-600 dark:text-slate-400 text-xs mb-6 leading-relaxed">
                    {member.bio}
                  </p>
                </div>
                <div className="flex items-center gap-3 pt-4 border-t border-slate-200 dark:border-slate-700/50">
                  <a href={member.github} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors">
                    <FiGithub className="w-4 h-4" />
                  </a>
                  <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-electric-blue-500 transition-colors">
                    <FiLinkedin className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Ecosystem */}
      <section className="section-padding bg-slate-50 dark:bg-slate-900/50 border-t border-slate-200 dark:border-slate-800">
        <div className="container-content">
          <motion.div
            className="max-w-3xl mx-auto text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Partnership & Collaboration Network
            </h2>
            <p className="text-slate-600 dark:text-slate-400">
              We collaborate with academic institutions, technology companies, and non-profits to amplify impact.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {partners.map((p, i) => (
              <div key={i} className="p-6 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800 text-center">
                <h3 className="font-bold text-slate-900 dark:text-white text-base mb-2">{p.name}</h3>
                <p className="text-slate-600 dark:text-slate-400 text-xs">{p.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button variant="primary" size="md" href="/contact">
              Partner With Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
