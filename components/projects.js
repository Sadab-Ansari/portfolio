"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    src: "/images/im1.png",
    title: "Portfolio Website",
    description:
      "A sleek personal portfolio built with modern UI/UX principles.",
    skills: ["Next.js", "Tailwind CSS", "Framer Motion"],
    link: "https://portfolio-oqdx.vercel.app",
  },
  {
    src: "/images/im2.png",
    title: "Fake Document Detector",
    description:
      "AI-powered app confidence-based document authenticity prediction.",
    skills: ["Next.js", "Tailwind CSS", "FastAPI"],
    link: "https://fake-docs-detection-ws.vercel.app",
  },
  {
    src: "/images/im3.png",
    title: "EventSphere",
    description:
      "A full-stack event management platform with real-time features.",
    skills: ["Next.js", "Express", "Framer Motion", "Tailwind CSS"],
    link: "https://event-sphere-6q0.vercel.app",
  },
];

export default function Projects() {
  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="projects" className="px-6 md:px-16 py-12 bg-transparent">
      <div className="mb-8 flex items-center gap-3 ml-0 lg:ml-10">
        <span className="h-[2px] w-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded" />

        <h2 className="text-sm uppercase tracking-widest text-gray-700 dark:text-gray-300 font-semibold">
          My Work
        </h2>
      </div>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.2 }}
        className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12"
      >
        {projects.map((p, i) => (
          <motion.div
            key={i}
            variants={cardVariants}
            whileHover={{ scale: 1.02 }}
            className="rounded-2xl bg-transparent"
          >
            <div className="relative w-full h-80 rounded-2xl overflow-hidden shadow-md">
              <Image src={p.src} alt={p.title} fill className="object-cover" />
            </div>

            <div className="mt-4 bg-transparent rounded-2xl shadow-md border border-gray-200 dark:border-gray-700 p-6 flex flex-col gap-4 transition-colors duration-300">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                  {p.title}
                </h3>
                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 text-sm font-semibold text-white bg-gradient-to-r from-indigo-500 to-blue-600 rounded-xl shadow hover:from-indigo-600 hover:to-blue-700 transition"
                >
                  Live Demo
                </a>
              </div>

              <p className="text-gray-600 dark:text-gray-400 text-sm">
                {p.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {p.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 text-gray-800 dark:text-gray-200 rounded-full transition-colors duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
