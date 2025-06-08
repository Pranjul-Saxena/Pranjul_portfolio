"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Star, Code, BookOpen, Target, Users, Award, Zap, Heart, Lightbulb, Cpu, Rocket, Shield, Globe, Database, Terminal, Layers, Settings, User, Coffee } from 'lucide-react';

const AchievementsSection = () => {
  const gridIcons = [
    Code, Star, BookOpen, Target, Users,
    Award, Zap, Heart, Lightbulb, Cpu,
    Rocket, Shield, Globe, Database, Terminal,
    Layers, Settings, User, Coffee, Code
  ];

  const achievements = [
    { value: "8.45", unit: "CGPA", label: "Academic Excellence", position: "top-left" },
    { value: "5+", unit: "", label: "Live Projects", position: "top-right" },
    { value: "NCC", unit: "Grade B", label: "Leadership", position: "bottom-left" },
    { value: "2nd", unit: "Prize", label: "Essay Competition", position: "bottom-right" }
  ];

  return (
    <section className="section-spacing overflow-hidden">
      <div className="container relative">
        {/* Background Grid */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="grid grid-cols-5 gap-6 md:gap-8 opacity-20">
            {gridIcons.map((Icon, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 0.3 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center"
              >
                <motion.div
                  animate={{ 
                    opacity: [0.2, 0.4, 0.2],
                    scale: [1, 1.05, 1]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: index * 0.2,
                    ease: "easeInOut"
                  }}
                >
                  <Icon 
                    size={24} 
                    className="text-text-secondary"
                  />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Central Content */}
        <div className="relative z-10 text-center">
          {/* Central Trophy Icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mb-8 md:mb-12 flex justify-center"
          >
            <div className="relative">
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="w-20 h-20 md:w-24 md:h-24 bg-accent-yellow rounded-2xl flex items-center justify-center shadow-lg"
              >
                <Trophy size={40} className="text-bg-primary" />
              </motion.div>

              {/* Floating Achievement Stats */}
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8 + index * 0.2, duration: 0.5 }}
                  className={`absolute bg-bg-card border border-divider-gray rounded-lg p-3 shadow-md ${
                    achievement.position === 'top-left' ? '-top-4 -left-20 md:-left-32' :
                    achievement.position === 'top-right' ? '-top-4 -right-20 md:-right-32' :
                    achievement.position === 'bottom-left' ? '-bottom-4 -left-20 md:-left-32' :
                    '-bottom-4 -right-20 md:-right-32'
                  }`}
                >
                  <motion.div
                    animate={{ y: [0, -3, 0] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.5,
                      ease: "easeInOut"
                    }}
                    className="text-center"
                  >
                    <div className="flex items-baseline justify-center space-x-1">
                      <span className="text-lg md:text-xl font-bold text-accent-green">
                        {achievement.value}
                      </span>
                      {achievement.unit && (
                        <span className="text-sm text-text-secondary font-medium">
                          {achievement.unit}
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-text-secondary mt-1 whitespace-nowrap">
                      {achievement.label}
                    </p>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="max-w-2xl mx-auto"
          >
            <div className="text-micro mb-4">Highlights</div>
            
            <h2 className="text-2xl md:text-2xl font-bold text-text-primary mb-6 leading-tight">
              A journey of continuous excellence
            </h2>
            
            <p className="text-body-lg text-text-secondary max-w-lg mx-auto">
              From hackathons to production launches, recognition fuels my passion.
            </p>
          </motion.div>

          {/* Additional Decorative Elements */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 pointer-events-none">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
              className="w-full h-full border border-divider-gray rounded-full opacity-10"
            />
          </div>
          
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 pointer-events-none">
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              className="w-full h-full border border-accent-purple rounded-full opacity-5"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export const AchievementsSpotlight = AchievementsSection;