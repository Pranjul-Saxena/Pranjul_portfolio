"use client";

import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Award, Building } from "lucide-react";
import { useInView } from "framer-motion";
import { useRef } from "react";

const experienceData = [
  {
    period: "Jan 2025 – Present",
    title: "SDE Intern, Intelliatech Solutions Pvt. Ltd.",
    description:
      "Building responsive React applications and working on MedicFusion healthcare SaaS.",
    icon: Briefcase,
    accent: "accent-yellow",
    type: "work",
  },
  {
    period: "2023 – Present",
    title: "Master of Computer Applications, SGSITS Indore",
    description:
      "Pursuing advanced computer science with 8.45 CGPA, focusing on software engineering and AI.",
    icon: GraduationCap,
    accent: "accent-green",
    type: "education",
  },
  {
    period: "2021-2023",
    title: "Bachelor of Computer Applications, Jiwaji University Gwalior",
    description:
      "Graduated with 77.66% focusing on programming fundamentals and web development.",
    icon: Building,
    accent: "accent-purple",
    type: "education",
  },
  {
    period: "2021",
    title: "NCC Cadet Achievement",
    description:
      "Earned 'C' Certificate with Grade B, demonstrating leadership and disciplinary excellence.",
    icon: Award,
    accent: "accent-green",
    type: "achievement",
  },
];

export const ExperienceSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section ref={sectionRef} className="section-spacing">
      <div className="container">
        <div className="mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="text-micro mb-4"
          >
            Experience
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-2xl font-bold mb-6"
          >
            Journey of continuous growth
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-body-lg max-w-2xl mx-auto"
          >
            From academic excellence to professional impact, each step builds
            upon the last.
          </motion.p>
        </div>

        <div className="relative">
          {/* Timeline Connector Line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-divider-gray transform -translate-x-1/2" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
            {experienceData.map((item, index) => {
              const Icon = item.icon;
              const isLeft = index % 2 === 0;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  animate={
                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }
                  }
                  transition={{
                    duration: 0.6,
                    delay: 0.1 * index,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                  className={`relative ${isLeft ? "lg:pr-8" : "lg:pl-8"} ${
                    index % 2 === 0 ? "" : "lg:mt-16"
                  }`}
                >
                  {/* Timeline Dot */}
                  <div
                    className={`hidden lg:block absolute top-8 w-4 h-4 rounded-full border-2 border-bg-primary z-10 ${
                      isLeft
                        ? "right-0 transform translate-x-1/2"
                        : "left-0 transform -translate-x-1/2"
                    }`}
                  >
                    <div
                      className={`w-full h-full rounded-full ${item.accent} opacity-80`}
                    />
                  </div>

                  <div className="card group cursor-pointer relative overflow-hidden">
                    {/* Accent Corner Icon */}
                    <div
                      className={`absolute top-6 left-6 w-8 h-8 rounded-lg flex items-center justify-center ${
                        item.accent === "accent-green"
                          ? "bg-accent-green/10 text-accent-green"
                          : item.accent === "accent-yellow"
                          ? "bg-accent-yellow/10 text-accent-yellow"
                          : "bg-accent-purple/10 text-accent-purple"
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                    </div>

                    {/* Arrow Bottom Right */}
                    <div className="absolute bottom-6 right-6 w-6 h-6 opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        className="w-full h-full"
                      >
                        <path
                          d="M7 17L17 7M17 7H7M17 7V17"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>

                    <div className="pt-16 pb-8">
                      <div
                        className={`text-sm font-medium mb-3 ${item.accent}`}
                      >
                        {item.period}
                      </div>
                      <h3 className="text-lg font-semibold mb-3 text-text-primary leading-tight">
                        {item.title}
                      </h3>
                      <p className="text-text-secondary leading-relaxed">
                        {item.description}
                      </p>
                    </div>

                    {/* Decorative Element */}
                    <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-divider-gray to-transparent opacity-50" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <motion.a
            href="https://drive.google.com/file/d/176gBZbIQOxcXkORutLLYMNPq8bPuskEY/view?usp=sharing" // Update this path accordingly
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center gap-2 group"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            View Full Resume
            <svg
              viewBox="0 0 24 24"
              fill="none"
              className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200"
            >
              <path
                d="M7 17L17 7M17 7H7M17 7V17"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};
