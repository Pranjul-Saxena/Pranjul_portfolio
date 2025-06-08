"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Download } from 'lucide-react';

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  const handleDownloadCV = () => {
    // Replace with actual CV download logic
    const link = document.createElement('a');
    link.href = 'https://drive.usercontent.google.com/u/0/uc?id=176gBZbIQOxcXkORutLLYMNPq8bPuskEY&export=download';
    link.download = 'PranjulSaxena_CV.pdf';
    link.click();
  };

  return (
    <>
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 h-16"
        style={{
          backgroundColor: 'rgba(14, 15, 17, 0.7)',
          backdropFilter: 'blur(12px)',
          borderBottom: '1px solid #202125',
        }}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="container mx-auto h-full flex items-center justify-between px-4 lg:px-18">
          {/* Logo */}
          <motion.div
            className="flex items-center"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <div className="w-30 h-10 p-1 rounded-full bg-white flex items-center justify-center">
              <span className="text-sm font-bold text-black">Pranjul Saxena</span>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.button
                key={item.name}
                className="relative text-white text-sm font-medium group py-2"
                onClick={() => scrollToSection(item.href)}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                whileHover={{ scale: 1.05 }}
              >
                {item.name}
                <motion.div
                  className="absolute bottom-0 left-0 h-0.5 bg-green-400 origin-left"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  style={{ width: '100%' }}
                />
              </motion.button>
            ))}
          </div>

          {/* CTA Button & Mobile Menu */}
          <div className="flex items-center space-x-4">
            {/* Desktop CTA */}
            <motion.button
              className="hidden lg:flex items-center space-x-2 bg-card text-white border border-divider-gray rounded-full px-6 py-3 text-sm font-medium transition-all duration-200 hover:bg-white hover:text-black focus:outline-none focus:ring-2 focus:ring-purple-500"
              onClick={handleDownloadCV}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 0.4 }}
            >
              <Download size={16} />
              <span>Download CV</span>
            </motion.button>

            {/* Mobile Menu Button */}
            <motion.button
              className="lg:hidden text-white p-2"
              onClick={() => setIsOpen(!isOpen)}
              whileTap={{ scale: 0.95 }}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              className="fixed top-16 left-0 right-0 bg-card border-b border-divider-gray z-50 lg:hidden"
              style={{
                backgroundColor: 'rgba(19, 20, 23, 0.95)',
                backdropFilter: 'blur(12px)',
              }}
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <div className="container mx-auto py-6 px-4">
                <div className="flex flex-col space-y-6">
                  {navItems.map((item, index) => (
                    <motion.button
                      key={item.name}
                      className="text-white text-lg font-medium text-left py-2 border-b border-divider-gray last:border-b-0 relative group"
                      onClick={() => scrollToSection(item.href)}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.3 }}
                      whileHover={{ x: 10 }}
                    >
                      {item.name}
                      <motion.div
                        className="absolute left-0 top-1/2 transform -translate-y-1/2 w-1 h-0 bg-green-400"
                        whileHover={{ height: '100%' }}
                        transition={{ duration: 0.2 }}
                      />
                    </motion.button>
                  ))}
                  
                  <motion.button
                    className="flex items-center justify-center space-x-2 bg-card text-white border border-divider-gray rounded-full px-6 py-3 text-sm font-medium mt-6 transition-all duration-200 hover:bg-white hover:text-black"
                    onClick={handleDownloadCV}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.3 }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Download size={16} />
                    <span>Download CV</span>
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};