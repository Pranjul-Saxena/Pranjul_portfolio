"use client";

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Send, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log('Form submitted:', data);
    setIsSubmitting(false);
    reset();
  };

  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com/Pranjul-Saxena',
      color: 'hover:text-accent-green'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://www.linkedin.com/in/pranjul-saxena-070a051b7/',
      color: 'hover:text-accent-yellow'
    },
    {
      name: 'Twitter',
      icon: Twitter,
      url: 'https://x.com/_PranjulSaxena',
      color: 'hover:text-accent-purple'
    }
  ];

  return (
    <section className="section-spacing border-t border-divider-gray">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-semibold mb-4">
                Let's build something amazing
              </h3>
              <p className="text-text-secondary text-lg leading-relaxed">
                Have an idea? Let's discuss how we can bring it to life with 
                cutting-edge technology and thoughtful design.
              </p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-sm font-medium text-text-primary">
                  Name
                </Label>
                <Input
                  id="name"
                  {...register('name', { 
                    required: 'Name is required',
                    minLength: { value: 2, message: 'Name must be at least 2 characters' }
                  })}
                  placeholder="Your full name"
                  className={`bg-bg-card border-divider-gray focus:border-accent-purple transition-all duration-200 ${
                    errors.name ? 'border-red-400 focus:border-red-400' : ''
                  }`}
                />
                {errors.name && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-400 text-xs"
                  >
                    {errors.name.message}
                  </motion.p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium text-text-primary">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  {...register('email', { 
                    required: 'Email is required',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Invalid email address'
                    }
                  })}
                  placeholder="your.email@example.com"
                  className={`bg-bg-card border-divider-gray focus:border-accent-purple transition-all duration-200 ${
                    errors.email ? 'border-red-400 focus:border-red-400' : ''
                  }`}
                />
                {errors.email && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-400 text-xs"
                  >
                    {errors.email.message}
                  </motion.p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-sm font-medium text-text-primary">
                  Message
                </Label>
                <Textarea
                  id="message"
                  {...register('message', { 
                    required: 'Message is required',
                    minLength: { value: 10, message: 'Message must be at least 10 characters' }
                  })}
                  placeholder="Tell me about your project..."
                  rows={5}
                  className={`bg-bg-card border-divider-gray focus:border-accent-purple resize-none transition-all duration-200 ${
                    errors.message ? 'border-red-400 focus:border-red-400' : ''
                  }`}
                />
                {errors.message && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-400 text-xs"
                  >
                    {errors.message.message}
                  </motion.p>
                )}
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-bg-card border border-divider-gray hover:bg-text-primary hover:text-bg-primary focus:outline-none focus:ring-2 focus:ring-accent-purple focus:ring-offset-2 focus:ring-offset-bg-primary transition-all duration-200 group"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                  </>
                )}
              </Button>
            </form>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <p className="text-micro mb-4">Connect with me</p>
              <h4 className="text-xl font-semibold mb-4">
                Let's stay in touch
              </h4>
              <p className="text-text-secondary text-lg leading-relaxed">
                Follow my journey as I explore new technologies, share insights, 
                and contribute to the developer community.
              </p>
            </div>

            <div className="space-y-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ 
                    duration: 0.4, 
                    ease: "easeOut", 
                    delay: 0.3 + index * 0.1 
                  }}
                  viewport={{ once: true }}
                  whileHover={{ x: 8 }}
                  className={`flex items-center space-x-4 p-4 rounded-xl bg-bg-card border border-divider-gray transition-all duration-200 hover:border-opacity-50 group ${social.color}`}
                >
                  <social.icon className="w-5 h-5 transition-colors" />
                  <div>
                    <span className="font-medium transition-colors">
                      {social.name}
                    </span>
                    <p className="text-sm text-text-secondary group-hover:text-text-primary transition-colors">
                      @pranjulsaxena
                    </p>
                  </div>
                  <motion.div
                    className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity"
                    whileHover={{ rotate: 45 }}
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </motion.div>
                </motion.a>
              ))}
            </div>

            {/* Additional Info */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
              viewport={{ once: true }}
              className="p-6 rounded-xl bg-bg-card border border-divider-gray"
            >
              <p className="text-micro mb-2">Response Time</p>
              <p className="font-medium mb-2">Usually within 24 hours</p>
              <p className="text-sm text-text-secondary">
                I read every message personally and respond as quickly as possible.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};