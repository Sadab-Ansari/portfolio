"use client";

import { motion } from "framer-motion";
import { Karla } from "next/font/google";
import { SiLinkedin, SiGithub } from "react-icons/si";

const karla = Karla({ subsets: ["latin"], weight: ["400", "500", "700"] });

export default function Contact() {
  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="contact" className="px-6 md:px-16 py-16 bg-transparent">
      <div className="mb-8 flex items-center gap-3 ml-0 lg:ml-10">
        {/* Gradient Line before heading */}
        <span className="h-[2px] w-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded" />

        <h2 className="text-sm uppercase tracking-widest text-gray-700 font-semibold">
          About Me
        </h2>
      </div>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.2 }}
        className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        {/* Contact Card: Email */}
        <motion.div
          variants={cardVariants}
          className="flex flex-col items-center justify-center p-8 bg-white/10 backdrop-blur-md border border-gray-200 rounded-2xl shadow-lg text-center"
        >
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Email</h3>
          <p className="text-gray-700">
            <a
              href="mailto:sadabansari451@gmail.com"
              className="hover:underline"
            >
              sadabansari451@gmail.com
            </a>
          </p>
        </motion.div>

        {/* Contact Card: Socials */}
        <motion.div
          variants={cardVariants}
          className="flex flex-col items-center justify-center p-8 bg-white/10 backdrop-blur-md border border-gray-200 rounded-2xl shadow-lg text-center"
        >
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Socials</h3>
          <div className="flex gap-6 text-2xl text-gray-900">
            <a
              href="https://linkedin.com/in/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiLinkedin className="hover:text-blue-600 transition" />
            </a>
            <a
              href="https://github.com/Sadab-Ansari"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiGithub className="hover:text-gray-800 transition" />
            </a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
