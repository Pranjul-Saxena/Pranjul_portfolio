"use client";

import { Navigation } from "@/components/navigation";
import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { SkillsSection } from "@/components/skills-section";
import { ProjectsSection } from "@/components/projects-section";
import { ExperienceSection } from "@/components/experience-section";
import { AchievementsSpotlight } from "@/components/achievements-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";
import { motion } from "framer-motion";

const pageVariants = {
  initial: { opacity: 0 },
  enter: { opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
  exit: { opacity: 0, transition: { duration: 0.4 } }
};

export default function Home() {
  return (
    <motion.main
      initial="initial"
      animate="enter"
      exit="exit"
      variants={pageVariants}
      className="min-h-screen bg-bg-primary text-text-primary"
    >
      {/* Fixed Navigation */}
      <Navigation />
      
      {/* Hero Section */}
      <section id="home">
        <HeroSection />
      </section>

      {/* About Section */}
      <section id="about">
        <AboutSection />
      </section>

      {/* Skills Section */}
      <section id="skills">
        <SkillsSection />
      </section>

      {/* Projects Section */}
      <section id="projects">
        <ProjectsSection />
      </section>

      {/* Experience Section */}
      <section id="experience">
        <ExperienceSection />
      </section>

      {/* Achievements Section */}
      <section id="achievements">
        <AchievementsSpotlight />
      </section>

      {/* Contact Section */}
      <section id="contact">
        <ContactSection />
      </section>

      {/* Footer */}
      <Footer />

      {/* Background Decorative Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 -left-48 w-96 h-96 bg-accent-green/5 rounded-full blur-3xl" />
        <div className="absolute top-2/3 -right-48 w-96 h-96 bg-accent-purple/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-accent-yellow/5 rounded-full blur-3xl" />
      </div>
    </motion.main>
  );
}