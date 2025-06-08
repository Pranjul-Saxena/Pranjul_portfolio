"use client";

import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

export const SkillsSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });
  const [hoveredItem, setHoveredItem] = useState(0);

  const skills = [
    "JavaScript / TypeScript",
    "React, Next.js, Remix", 
    "Node, GraphQL, MongoDB",
    "AWS & Vercel Deploy"
  ];

  const progressBars = [
    { name: "React", value: 95, color: "#3DF77F" },
    { name: "JavaScript", value: 90, color: "#F5C84C" },
    { name: "Node.js", value: 90, color: "#9F7BFF" },
    { name: "GraphQL", value: 80, color: "#3DF77F" },
    { name: "AWS", value: 75, color: "#F5C84C" }
  ];

  return (
    <section ref={sectionRef} className="section-spacing bg-bg-primary">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-24 lg:gap-32 items-center">
          {/* Left Column - Skills List */}
          <div className="space-y-8">
            <motion.h3 
              className="text-2xl lg:text-3xl font-semibold text-text-primary"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              Toolkit & Mastery
            </motion.h3>
            
            <div className="space-y-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill}
                  className="flex items-center gap-4 group cursor-pointer"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ 
                    duration: 0.5, 
                    delay: index * 0.1,
                    ease: "easeOut" 
                  }}
                  onMouseEnter={() => setHoveredItem(index)}
                  onMouseLeave={() => setHoveredItem(0)}
                >
                  <div className={`
                    w-6 h-6 rounded-full border-2 flex items-center justify-center
                    transition-all duration-300 ease-out
                    ${(index === 0 && hoveredItem === 0) || hoveredItem === index
                      ? 'border-accent-green bg-accent-green/20' 
                      : 'border-divider-gray'
                    }
                  `}>
                    <ChevronRight 
                      className={`
                        w-3 h-3 transition-all duration-300 ease-out
                        ${(index === 0 && hoveredItem === 0) || hoveredItem === index
                          ? 'text-accent-green translate-x-0.5' 
                          : 'text-text-secondary'
                        }
                      `}
                    />
                  </div>
                  <span className={`
                    text-lg font-medium transition-colors duration-300
                    ${(index === 0 && hoveredItem === 0) || hoveredItem === index
                      ? 'text-accent-green' 
                      : 'text-text-primary'
                    }
                  `}>
                    {skill}
                  </span>
                </motion.div>
              ))}
            </div>

            <motion.p 
              className="text-sm text-text-secondary font-medium"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              Always exploring the bleeding edge.
            </motion.p>
          </div>

          {/* Right Column - Dashboard Image with Animated Progress Bars */}
          <div className="relative">
            <motion.div
              className="relative bg-bg-card rounded-2xl p-8 shadow-card"
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            >
              {/* Dashboard Background */}
              <div className="relative overflow-hidden rounded-xl">
                <img 
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/d229509b-7e54-4182-a2c2-33833e0b867b/generated_images/dark-ui-dashboard-displaying-animated-ci-f6440c86-20250603171825.jpg"
                  alt="Skills Dashboard"
                  className="w-full h-96 object-cover"
                />
                
                {/* Overlay with animated progress bars */}
                <div className="absolute inset-0 bg-bg-primary/60 backdrop-blur-sm flex flex-col justify-center p-8 space-y-6">
                  {progressBars.map((bar, index) => (
                    <motion.div
                      key={bar.name}
                      className="space-y-2"
                      initial={{ opacity: 0, x: 20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ 
                        duration: 0.6, 
                        delay: 0.6 + index * 0.1,
                        ease: "easeOut" 
                      }}
                    >
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-text-primary">
                          {bar.name}
                        </span>
                        <span className="text-xs text-text-secondary">
                          {bar.value}%
                        </span>
                      </div>
                      <div className="progress-bar h-2">
                        <motion.div 
                          className="progress-fill h-full rounded-full"
                          style={{ backgroundColor: bar.color }}
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${bar.value}%` } : {}}
                          transition={{ 
                            duration: 1.2,
                            delay: 0.8 + index * 0.1,
                            ease: "easeOut"
                          }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Floating accent elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-8 h-8 bg-accent-green rounded-full opacity-60"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.6, 0.8, 0.6]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              <motion.div
                className="absolute -bottom-2 -left-2 w-6 h-6 bg-accent-purple rounded-full opacity-40"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.4, 0.6, 0.4]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};