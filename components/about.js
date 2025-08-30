"use client";
import { motion } from "framer-motion";

export default function AboutMe() {
  const timeline = [
    {
      text: "Plenty of people can build a website. Fewer make it feel effortless.",
    },
    {
      text: "I design and develop clean, modern interfaces that not only look great but work seamlessly.",
    },
    {
      text: "Blending creativity with code & intelligence with data in ML projects.",
    },
    {
      text: "Turning ideas into memorable experiences with performance in mind.",
    },
  ];

  return (
    <section id="about" className="w-full flex justify-center py-20">
      {/* Match navbar container size (max-w-7xl + px-6) */}
      <div className="relative w-full max-w-6xl">
        {/* Vertical Line */}
        <div className="absolute left-1/2 top-0 h-full w-[2px] bg-gradient-to-b from-blue-400 to-blue-600" />

        {/* Heading aligned left */}
        <div className="mb-16">
          <h2 className="text-left text-sm uppercase tracking-widest text-gray-500">
            About Me
          </h2>
          <p className="text-left text-gray-600">
            Blending creativity with code & intelligence with data
          </p>
        </div>

        {/* Timeline */}
        <div className="space-y-16">
          {timeline.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: false, amount: 0.3 }} // 🔥 animate every scroll
              className={`relative w-full flex ${
                index % 2 === 0 ? "justify-start" : "justify-end"
              }`}
            >
              {/* Dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full shadow-md" />

              {/* Card: stretch same as navbar container (about 50% width each side) */}
              <div className="w-[46%] bg-white/80 border border-gray-200 shadow-md rounded-2xl p-6 backdrop-blur-sm">
                <p className="text-lg font-medium text-gray-800">{item.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
