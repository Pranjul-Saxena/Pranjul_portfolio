"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

export const AboutSection = () => {
  const cards = [
    {
      title: "Craft",
      description: "From UX to code, I obsess over every detail for a seamless user experience.",
      image:
        "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/d229509b-7e54-4182-a2c2-33833e0b867b/generated_images/3d-layered-ui-panel-stack-icon%2c-dark-m-9d3545ad-20250603171757.jpg",
      delay: 0.1,
    },
    {
      title: "Velocity",
      description: "Speeding up development with modern tools and CI/CD.",
      image:
        "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/d229509b-7e54-4182-a2c2-33833e0b867b/generated_images/diagonal-speed-lines-3d-card-icon%2c-sub-29b3d33a-20250603171806.jpg",
      delay: 0.2,
    },
    {
      title: "Quality",
      description: "Building scalable codebases: maintainable, tested, and future-ready.",
      image: "https://v3.fal.media/files/tiger/UWDbi10BghstSPCQlPxDt.png",
      delay: 0.3,
    },
  ];

  return (
    <section className="section-spacing">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-16 items-start mb-24">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h2 className="text-2xl md:text-2xl font-semibold leading-tight tracking-tight text-white mb-0">
              Driven by curiosity, focused on impact
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          >
            <p className="text-body-lg">
              My process blends rapid prototyping, meticulous attention to
              detail, and continuous optimization to create impactful solutions.{" "}
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: card.delay,
              }}
              whileHover={{
                y: -8,
                transition: { duration: 0.2, ease: "easeOut" },
              }}
              className="group relative"
            >
              <div className="card relative overflow-hidden h-[400px] flex flex-col">
                <div className="flex-1 flex items-center justify-center p-8">
                  <div className="relative w-32 h-32 mb-8">
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {card.title}
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    {card.description}
                  </p>
                </div>

                <motion.div
                  className="absolute bottom-6 right-6 w-8 h-8 rounded-full bg-divider-gray flex items-center justify-center"
                  whileHover={{
                    backgroundColor: "rgb(255, 255, 255)",
                    transition: { duration: 0.2 },
                  }}
                >
                  <motion.div
                    whileHover={{
                      x: 2,
                      y: -2,
                      transition: { duration: 0.2 },
                    }}
                  >
                    <ArrowUpRight
                      size={14}
                      className="text-white group-hover:text-bg-primary transition-colors duration-200"
                    />
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
