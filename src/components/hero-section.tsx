"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const HeroSection = () => {
  const scrollToProjects = () => {
    const projectsSection = document.querySelector('#projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center bg-bg-primary overflow-hidden">
      <div className="container mx-auto px-4 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Text Content */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h1 className="text-4xl lg:text-6xl font-bold text-text-primary leading-tight tracking-tight">
                Building elegant digital experiences.
              </h1>
            </motion.div>

            <motion.p
              className="text-lg lg:text-xl text-text-secondary leading-relaxed max-w-lg"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              I'm Pranjul Saxena, a full-stack developer crafting performant, delightful web products.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Button 
                size="lg"
                onClick={scrollToProjects}
                className="bg-text-primary text-bg-primary hover:bg-text-primary/90 font-medium px-8 py-3 rounded-full transition-all duration-300"
              >
                View Projects
              </Button>

              <motion.a
                href="#contact"
                className="inline-flex items-center gap-2 text-text-primary hover:text-accent-green transition-colors duration-300 font-medium px-4 py-3"
                whileHover={{ x: 4 }}
                transition={{ duration: 0.2 }}
              >
                Get in touch
                <motion.div
                  initial={{ x: 0 }}
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                >
                  <ArrowRight className="w-5 h-5" />
                </motion.div>
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Column - Code Editor Mock */}
          <motion.div
            className="relative lg:ml-8"
            initial={{ opacity: 0, y: 48 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            <div className="relative">
              {/* Glass overlay effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/5 to-white/10 rounded-2xl z-10 pointer-events-none" />
              
              {/* Code editor image */}
              <motion.div
                className="relative rounded-2xl overflow-hidden shadow-2xl"
                initial={{ y: 16, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                whileHover={{ 
                  y: -8,
                  transition: { duration: 0.3 }
                }}
              >
                <img
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/d229509b-7e54-4182-a2c2-33833e0b867b/generated_images/high-resolution-dark-mode-code-editor-wi-98fab047-20250603171733.jpg"
                  alt="Code editor with React TypeScript component"
                  className="w-full h-auto object-cover rounded-2xl"
                  style={{
                    filter: "brightness(1.1) contrast(1.05)",
                  }}
                />
                
                {/* Subtle glow effect */}
                <div className="absolute inset-0 shadow-[0_0_80px_rgba(61,247,127,0.1)] rounded-2xl" />
              </motion.div>

              {/* Background blur decoration */}
              <div className="absolute -inset-4 bg-gradient-to-br from-accent-green/5 via-accent-purple/5 to-accent-yellow/5 rounded-3xl blur-2xl -z-10" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-accent-green/5 via-transparent to-transparent blur-3xl -z-10" />
    </section>
  );
};