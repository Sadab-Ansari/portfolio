"use client";

import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      title: "Portfolio Website",
      description:
        "A modern portfolio built with Next.js and Tailwind CSS to showcase my skills, projects, and experience.",
      tech: ["Next.js", "Tailwind", "Framer Motion"],
      link: "https://portfolio-oqdx.vercel.app",
    },
    {
      title: "Fake Document Detector",
      description:
        "An AI + Blockchain-powered project to detect fake documents with PDF/IMG OCR, ML, and secure verification.",
      tech: ["Python", "FastAPI", "ML", "Blockchain"],
      link: "https://fake-docs-detection-ws.vercel.app",
    },
    {
      title: "EventSphere",
      description:
        "A full-stack event management platform with authentication, event creation, and real-time updates.",
      tech: ["Next.js", "Firebase", "Node.js"],
      link: "https://event-sphere-6q0.vercel.app",
    },
  ];

  return (
    <section
      id="projects"
      className="w-full flex justify-center py-20 bg-gray-50"
    >
      <div className="w-[90%] max-w-6xl">
        {/* Heading */}
        <div className="mb-16 text-center">
          <h2 className="text-sm uppercase tracking-widest text-gray-500">
            My Work
          </h2>
          <p className="text-3xl font-bold text-gray-900">Projects</p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg border p-6 flex flex-col justify-between hover:shadow-xl transition"
            >
              {/* Title */}
              <h3 className="text-xl font-semibold text-gray-800">
                {project.title}
              </h3>

              {/* Description */}
              <p className="mt-3 text-gray-600 flex-grow">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mt-4">
                {project.tech.map((t, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-700"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Button */}
              <div className="mt-6">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center px-4 py-2 rounded-xl bg-blue-500 text-white font-medium hover:bg-blue-600 transition"
                >
                  Live Demo
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
