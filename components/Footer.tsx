'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { HiArrowRight } from 'react-icons/hi2';
import { FiGithub, FiLinkedin, FiTwitter, FiMail } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

// const footerLinks = {
//   company: [
//     { label: 'About Netraform', href: '/about' },
//     { label: 'Blog & News', href: '/blog' },
//     { label: 'Careers & Opportunities', href: '/careers' },
//     { label: 'Contact & Support', href: '/contact' },
//   ],
//   solutions: [
//     { label: 'AI & Machine Learning', href: '/services' },
//     { label: 'Software Engineering', href: '/services' },
//     { label: 'Robotics & Automation', href: '/services' },
//     { label: 'Cloud Infrastructure', href: '/services' },
//   ],
//   community: [
//     { label: 'Innovation Hub', href: '/innovation-hub' },
//     { label: 'Bootcamps & Courses', href: '/innovation-hub' },
//     { label: 'Hackathons & Contests', href: '/innovation-hub' },
//     { label: 'Fellowship Program', href: '/innovation-hub' },
//   ],
//   resources: [
//     { label: 'Research & Publications', href: '/research' },
//     { label: 'Project Case Studies', href: '/research' },
//     { label: 'Open-Source Tools', href: '/services' },
//     { label: 'Frequently Asked Questions', href: '/contact' },
//   ],
// };

const socialLinks = [
  { icon: FiGithub, href: 'https://github.com', label: 'GitHub' },
  { icon: FiLinkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: FiTwitter, href: 'https://twitter.com', label: 'Twitter' },
  { icon: FaWhatsapp, href: 'https://wa.me/2349063199108', label: 'WhatsApp' },
  { icon: FiMail, href: 'mailto:contact@netraform.tech', label: 'Email' },
];

export default function Footer() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [showToast, setShowToast] = useState(false);

  const handleSubscribe = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Failed to subscribe.');
      }

      setStatus('success');
      setEmail('');
      setShowToast(true);
      setTimeout(() => setShowToast(false), 4000);
    } catch (err) {
      setStatus('error');
      setErrorMessage(err instanceof Error ? err.message : 'Something went wrong.');
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <footer className="w-full border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50">
      <div className="container-content section-padding">
        {/* Newsletter Banner */}
        <motion.div
          className="grid md:grid-cols-2 gap-8 md:gap-12 mb-16 pb-16 border-b border-slate-200 dark:border-slate-800"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-3">
              Stay Connected with Netraform
            </h3>
            <p className="text-slate-600 dark:text-slate-400 max-w-md text-sm md:text-base">
              Subscribe to our monthly newsletter for research insights, program announcements, and technical tutorials.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="max-w-md">
            <form className="flex gap-2 items-start" onSubmit={handleSubscribe}>
              <div className="flex-1">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 placeholder-slate-500 dark:placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-electric-blue-500 text-sm"
                />
                {status === 'error' && (
                  <p className="mt-2 text-xs font-semibold text-red-600 dark:text-red-400">
                    {errorMessage}
                  </p>
                )}
              </div>
              <button
                type="submit"
                disabled={status === 'loading'}
                className="px-6 py-3 bg-deep-blue-600 hover:bg-deep-blue-700 disabled:opacity-60 disabled:cursor-not-allowed text-white rounded-lg font-semibold transition-colors flex items-center gap-2 text-sm shrink-0"
              >
                <span>{status === 'loading' ? 'Subscribing...' : 'Subscribe'}</span>
                {status !== 'loading' && <HiArrowRight className="w-4 h-4" />}
              </button>
            </form>
          </motion.div>
        </motion.div>

        {/* Links Grid
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16 pb-16 border-b border-slate-200 dark:border-slate-800"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {Object.entries(footerLinks).map(([category, links]) => (
            <motion.div key={category} variants={itemVariants}>
              <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-4 capitalize text-sm tracking-wider uppercase text-electric-blue-600 dark:text-electric-blue-400">
                {category}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-slate-600 dark:text-slate-400 hover:text-electric-blue-600 dark:hover:text-electric-blue-400 transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div> */}

        {/* Bottom Bar */}
        <motion.div
          className="flex flex-col md:flex-row items-center justify-between gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={itemVariants}>
            <Link
              href="/"
              className="flex items-center gap-2 font-bold text-lg text-deep-blue-600 dark:text-electric-blue-400 mb-2"
            >
              <div className="w-7 h-7 bg-gradient-to-br from-deep-blue-600 via-electric-blue-500 to-cyan-500 rounded-lg flex items-center justify-center text-white font-black text-xs">
                NT
              </div>
              Netraform Technologies
            </Link>
            <p className="text-slate-600 dark:text-slate-400 text-xs max-w-sm">
              Building the Future, Together. An innovation hub for AI, software engineering, robotics, and applied research.
            </p>
          </motion.div>

          <motion.div className="flex items-center gap-3" variants={itemVariants}>
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:text-electric-blue-600 dark:hover:text-electric-blue-400 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all"
                  aria-label={social.label}
                >
                  <Icon className="w-4 h-4" />
                </a>
              );
            })}
          </motion.div>

          <motion.div variants={itemVariants} className="text-center md:text-right text-xs text-slate-500 dark:text-slate-400">
            <p>&copy; {new Date().getFullYear()} Netraform Technologies. All rights reserved.</p>
            <p className="mt-1 font-medium text-slate-600 dark:text-slate-300">Building the Future, Together.</p>
          </motion.div>
        </motion.div>
      </div>

      {/* Subscribe Success Toast */}
      {showToast && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 px-6 py-3 rounded-lg bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-sm font-semibold shadow-lg"
        >
          You&apos;re subscribed!
        </motion.div>
      )}
    </footer>
  );
}