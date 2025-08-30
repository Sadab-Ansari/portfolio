"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Hero() {
  const skills = [
    "web Developer",
    "ML Enthusiast",
    "Creative Designer",
    "Tech Enthusiast",
  ];
  const [displayedText, setDisplayedText] = useState("");
  const [skillIndex, setSkillIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentSkill = skills[skillIndex];
    let typingSpeed = isDeleting ? 70 : 120; // speed control

    const handleTyping = () => {
      if (!isDeleting && displayedText.length < currentSkill.length) {
        // Typing forward
        setDisplayedText(currentSkill.slice(0, displayedText.length + 1));
      } else if (isDeleting && displayedText.length > 0) {
        // Deleting backward
        setDisplayedText(currentSkill.slice(0, displayedText.length - 1));
      } else if (!isDeleting && displayedText.length === currentSkill.length) {
        // Finished typing -> wait before deleting
        setTimeout(() => setIsDeleting(true), 1000);
        return;
      } else if (isDeleting && displayedText.length === 0) {
        // Finished deleting -> move to next word
        setIsDeleting(false);
        setSkillIndex((prev) => (prev + 1) % skills.length);
        return;
      }
    };

    const typingInterval = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(typingInterval);
  }, [displayedText, isDeleting, skillIndex, skills]);

  return (
    <section id="home" className="w-full flex justify-center mt-12 pt-52 mb-52">
      <div className="w-[90%] max-w-5xl text-center">
        {/* Name */}
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-gray-900"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Hi, my name is <span className="text-blue-500">Sadab Ansari</span>
        </motion.h1>

        {/* Typing Skills */}
        <motion.p
          className="mt-4 text-xl md:text-3xl font-medium text-gray-700 h-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          {displayedText}
          <span className="animate-pulse">|</span> {/* blinking cursor */}
        </motion.p>

        {/* Quote */}
        <motion.p
          className="mt-6 text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          "I design interactive and user-friendly experiences, blending
          creativity with technology to bring ideas to life."
        </motion.p>
      </div>
    </section>
  );
}
