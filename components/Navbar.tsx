'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { HiMenu, HiX } from 'react-icons/hi';
import { IoMoon, IoSunny } from 'react-icons/io5';
import Button from './ui/Button';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services & Products', href: '/services' },
  //{ name: 'Innovation Hub', href: '/innovation-hub' },
  { name: 'Research & Projects', href: '/research' },
 // { name: 'Blog', href: '/blog' },
  { name: 'Contact & FAQ', href: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains('dark');
    setIsDark(isDarkMode);
  }, []);

  const toggleDarkMode = () => {
    const html = document.documentElement;
    if (html.classList.contains('dark')) {
      html.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setIsDark(false);
    } else {
      html.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setIsDark(true);
    }
  };

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 dark:bg-slate-950/90 backdrop-blur-md shadow-sm border-b border-slate-200/50 dark:border-slate-800/50' : 'bg-white dark:bg-slate-950'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container-content">
        <div className="flex items-center justify-between h-16 md:h-20 gap-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 font-bold text-xl md:text-2xl text-deep-blue-600 dark:text-electric-blue-400 shrink-0">
            <Image
              src="/NT.png"
              alt="Netraform Logo"
              width={36}
              height={36}
              className="w-8 h-8 md:w-9 md:h-9 rounded-lg object-contain"
            />
            <span className="font-extrabold tracking-tight text-slate-900 dark:text-white">Netraform</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-3 py-2 text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-electric-blue-600 dark:hover:text-electric-blue-400 transition-colors whitespace-nowrap"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2 md:gap-3 shrink-0">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label="Toggle dark mode"
            >
              {isDark ? (
                <IoSunny className="w-5 h-5 text-electric-blue-400" />
              ) : (
                <IoMoon className="w-5 h-5 text-slate-600" />
              )}
            </button>

            <Button variant="primary" size="sm" href="/contact" className="hidden md:inline-flex whitespace-nowrap">
              Get In Touch
            </Button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 lg:hidden hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <HiX className="w-6 h-6 text-slate-600 dark:text-slate-300" />
              ) : (
                <HiMenu className="w-6 h-6 text-slate-600 dark:text-slate-300" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <motion.div
        className="lg:hidden overflow-hidden border-t border-slate-200 dark:border-slate-800"
        initial={{ height: 0 }}
        animate={{ height: isOpen ? 'auto' : 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="px-4 py-4 space-y-2">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="px-3.5 py-2 text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-electric-blue-600 dark:hover:text-electric-blue-400 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <Button variant="primary" href="/contact" className="w-full justify-center" onClick={() => setIsOpen(false)}>
            Get In Touch
          </Button>
        </div>
      </motion.div>
    </motion.nav>
  );
}
