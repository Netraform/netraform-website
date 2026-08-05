'use client';

import Button from '@/components/ui/Button';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { FiChevronDown } from 'react-icons/fi';

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const faqs = [
  {
    category: 'General',
    questions: [
      {
        q: 'What is Netraform?',
        a: 'Netraform Technologies is an innovation hub dedicated to solving real-world challenges through artificial intelligence, software engineering, robotics, and digital transformation. We help businesses innovate and individuals develop cutting-edge skills.',
      },
      {
        q: 'Where is Netraform based?',
        a: 'We are based in Lagos, Nigeria, but we operate globally with remote teams and partnerships across multiple continents.',
      },
      {
        q: 'How can I get in touch?',
        a: 'You can reach us via email at contact@netraform.tech, phone at +234 (0) 803 123 4567, or visit our contact page to send a message.',
      },
    ],
  },
  {
    category: 'Services',
    questions: [
      {
        q: 'What services does Netraform offer?',
        a: 'We offer AI solutions, software development, robotics & automation, cloud & DevOps, web & mobile development, cybersecurity, data science, digital transformation, UI/UX design, and corporate training.',
      },
      {
        q: 'How much does a project cost?',
        a: 'Project costs vary based on scope, complexity, and timeline. Contact us for a custom quote tailored to your specific needs.',
      },
      {
        q: 'Can you work with startups?',
        a: 'Absolutely! We work with startups of all stages and have special programs to support early-stage companies.',
      },
      {
        q: 'Do you offer maintenance support?',
        a: 'Yes, we provide ongoing maintenance, support, and optimization services to ensure your solutions continue to perform optimally.',
      },
    ],
  },
  {
    category: 'Programs',
    questions: [
      {
        q: 'How long is the AI Bootcamp?',
        a: 'The AI Bootcamp is a 12-week intensive program covering machine learning, deep learning, and AI applications with hands-on projects.',
      },
      {
        q: 'When are hackathons held?',
        a: 'We host hackathons quarterly, typically lasting 48 hours with prize pools exceeding $50,000.',
      },
      {
        q: 'What is the startup incubation program?',
        a: 'Our 6-month startup incubation program provides seed funding, office space, mentorship, and access to our investor network.',
      },
      {
        q: 'Who can apply for the fellowship?',
        a: 'The fellowship program is designed for experienced professionals wanting to lead innovation initiatives. Interested applicants should contact us for eligibility details.',
      },
    ],
  },
  {
    category: 'Careers',
    questions: [
      {
        q: 'How do I apply for a job at Netraform?',
        a: 'Visit our careers page to see open positions. You can apply directly through our application portal or send your resume to careers@netraform.tech.',
      },
      {
        q: 'Do you offer remote positions?',
        a: 'Yes, many of our positions are remote. We hire talented individuals from around the world.',
      },
      {
        q: 'What is the internship program like?',
        a: 'Our internships provide real-world experience working on actual projects, mentorship from experienced professionals, and the opportunity to learn cutting-edge technologies.',
      },
    ],
  },
];

export default function FAQClient() {
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
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-2xl">
              Find answers to common questions about Netraform, our services, and programs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="section-padding">
        <div className="container-content">
          <div className="space-y-12">
            {faqs.map((section, sectionIndex) => (
              <motion.div
                key={sectionIndex}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">
                  {section.category}
                </h2>
                <div className="space-y-4">
                  {section.questions.map((item, itemIndex) => (
                    <FAQItem key={itemIndex} question={item.q} answer={item.a} />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-slate-50 dark:bg-slate-900/50">
        <div className="container-content">
          <motion.div
            className="max-w-2xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              Didn&apos;t find your answer?
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-8">
              Get in touch with our team and we&apos;ll be happy to help.
            </p>
            <Button size="lg" variant="primary" href="/contact">
              Contact Us
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      className="border border-slate-200 dark:border-slate-700 rounded-lg bg-white dark:bg-slate-800 overflow-hidden"
      variants={itemVariants}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 flex items-center justify-between hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors"
      >
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white text-left">
          {question}
        </h3>
        <FiChevronDown
          className={`w-5 h-5 text-electric-blue-600 dark:text-electric-blue-400 transition-transform ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          className="px-6 py-4 border-t border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/30"
        >
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
            {answer}
          </p>
        </motion.div>
      )}
    </motion.div>
  );
}
