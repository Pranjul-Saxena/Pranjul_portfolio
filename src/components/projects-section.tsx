"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, ExternalLink, Github, ArrowUpRight } from "lucide-react";

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  githubUrl: string;
  demoUrl: string;
  tags: string[];
}

const projects: Project[] = [
  {
    id: "medicfusion",
    title: "MedicFusion",
    description: "SaaS Project for healthcare management",
    image: "/api/placeholder/400/240",
    githubUrl: "https://github.com/Pranjul-Saxena",
    demoUrl: "https://medicfusion.netlify.app/",
    tags: ["React", "Node.js", "Express", "MongoDB"]
  },
  {
    id: "zaptrix",
    title: "Zaptrix", 
    description: "Platform to innovate, develop, and scale products.",
    image: "/api/placeholder/400/240",
    githubUrl: "https://github.com/Pranjul-Saxena",
    demoUrl: "https://zaptrix.netlify.app/",
    tags: ["Innovation", "Development", "Productivity"]
  },
  {
    id: "linkedWorks",
    title: "LinkedWorks",
    description: "Your innovation partner for custom digital solutions.",
    image: "/api/placeholder/400/240", 
    githubUrl: "https://github.com/Pranjul-Saxena",
    demoUrl: "https://linked-works-eosin.vercel.app/",
    tags: ["Services", "Analytics", "MVPs", "Products"]
  },
  {
    id: "tmdb-clone",
    title: "TMDB Showcase Platform",
    description: "Anime, Movie, TV, and News discovery app with Redux-toolkit",
    image: "/api/placeholder/400/240",
    githubUrl: "https://github.com/Pranjul-Saxena",
    demoUrl: "https://prettierify.netlify.app/", 
    tags: ["Fun", "Enjoyment", "Global"]
  },
  {
    id: "moneyventure",
    title: "Freelance Project",
    description: "Finance Website",
    image: "/api/placeholder/400/240",
    githubUrl: "https://github.com/Pranjul-Saxena",
    demoUrl: "https://moneyventure.in/", 
    tags: ["React", "Redux-toolkit", "API Integration"]
  },
];

export const ProjectsSection = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true,
    align: "start",
    containScroll: "trimSnaps",
    dragFree: true
  });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.2], [60, 0]);

  const scrollTo = (index: number) => {
    if (emblaApi) emblaApi.scrollTo(index);
  };

  const scrollPrev = () => {
    if (emblaApi) emblaApi.scrollPrev();
  };

  const scrollNext = () => {
    if (emblaApi) emblaApi.scrollNext();
  };

  const onSelect = () => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  };

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi]);

  return (
    <section ref={sectionRef} className="section-spacing py-24 md:py-40 overflow-hidden">
      <div className="container">
        <motion.div
          style={{ opacity, y }}
          className="max-w-4xl mx-auto"
        >
          {/* Header */}
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16 gap-8">
            <div className="space-y-4">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="text-micro text-accent-green"
              >
                Selected Work
              </motion.div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="text-2xl md:text-3xl font-bold text-text-primary"
              >
                Projects that solve real problems
              </motion.h2>
            </div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="text-body-lg text-text-secondary max-w-md"
            >
              A glimpse of products I architected end-to-end.
            </motion.p>
          </div>

          {/* Carousel Controls */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-2">
              <motion.button
                onClick={scrollPrev}
                disabled={!canScrollPrev}
                className="p-2 rounded-full bg-bg-card border border-divider-gray disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 hover:bg-text-primary hover:text-bg-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ChevronLeft className="w-4 h-4" />
              </motion.button>
              <motion.button
                onClick={scrollNext}
                disabled={!canScrollNext}
                className="p-2 rounded-full bg-bg-card border border-divider-gray disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 hover:bg-text-primary hover:text-bg-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ChevronRight className="w-4 h-4" />
              </motion.button>
            </div>

            {/* Dots Indicator */}
            <div className="flex gap-2">
              {scrollSnaps.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => scrollTo(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === selectedIndex ? "bg-accent-green" : "bg-divider-gray"
                  }`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                />
              ))}
            </div>
          </div>

          {/* Carousel */}
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-6">
              {projects.map((project, index) => (
                <ProjectCard 
                  key={project.id}
                  project={project}
                  index={index}
                  isActive={index === selectedIndex}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

interface ProjectCardProps {
  project: Project;
  index: number;
  isActive: boolean;
}

const ProjectCard = ({ project, index, isActive }: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="flex-none w-full sm:w-80 md:w-96"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.1,
        ease: "easeOut"
      }}
    >
      <motion.div
        className={`card group cursor-pointer transition-all duration-500 ${
          isActive ? "opacity-100" : "opacity-75"
        }`}
        whileHover={{ 
          scale: 1.02,
          boxShadow: "0 20px 40px -4px rgba(0, 0, 0, 0.5)"
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        {/* Project Image with Overlay */}
        <div className="relative mb-6 rounded-xl overflow-hidden bg-divider-gray">
          <div className="aspect-video relative">
            <div className="absolute inset-0 bg-gradient-to-br from-accent-green/20 via-transparent to-accent-purple/20" />
            <div className="absolute inset-0 bg-gradient-to-t from-bg-card/80 via-transparent to-transparent" />
            <div className="absolute inset-4 bg-bg-primary/60 backdrop-blur-sm rounded-lg flex items-center justify-center">
              <div className="text-6xl font-bold text-text-primary/20">
                {project.title.charAt(0)}
              </div>
            </div>
          </div>
          
          {/* Glass overlay effect */}
          <div className="glass-overlay absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        {/* Project Info */}
        <div className="space-y-4">
          <div className="flex items-start justify-between">
            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-text-primary group-hover:text-accent-green transition-colors duration-300">
                {project.title}
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                {project.description}
              </p>
            </div>
            <motion.div
              className="flex-shrink-0 ml-4 opacity-0 group-hover:opacity-100 transition-all duration-300"
              whileHover={{ scale: 1.1 }}
            >
              <ArrowUpRight className="w-5 h-5 text-accent-green" />
            </motion.div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, tagIndex) => (
              <motion.span
                key={tag}
                className="px-2 py-1 text-xs font-medium text-text-secondary bg-divider-gray rounded-md"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ 
                  duration: 0.3, 
                  delay: index * 0.1 + tagIndex * 0.05 
                }}
              >
                {tag}
              </motion.span>
            ))}
          </div>

          {/* Action Links */}
          <div className="flex gap-3 pt-2">
            <motion.a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-text-secondary hover:text-text-primary bg-divider-gray hover:bg-text-primary hover:text-bg-primary rounded-full transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github className="w-4 h-4" />
              Code
            </motion.a>
            <motion.a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-text-secondary hover:text-text-primary bg-divider-gray hover:bg-accent-green hover:text-bg-primary rounded-full transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ExternalLink className="w-4 h-4" />
              Demo
            </motion.a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};