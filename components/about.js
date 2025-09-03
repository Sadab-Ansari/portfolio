"use client";
import { motion } from "framer-motion";
import { Karla } from "next/font/google";

const karla = Karla({ subsets: ["latin"], weight: ["400", "500", "700"] });

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
    <section id="about" className="w-full flex justify-center py-20 px-4">
      {/* Match navbar container size (max-w-7xl + px-6) */}
      <div className="relative w-full max-w-6xl">
        {/* Vertical Line */}
        <div className="absolute left-1/2 top-0 h-full w-[2px] bg-gradient-to-b from-blue-400 to-blue-600 hidden md:block" />

        <div className="mb-4 flex items-center gap-3">
          <span className="h-[2px] w-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded" />

          <h2 className="text-sm uppercase tracking-widest text-gray-700 font-semibold">
            About Me
          </h2>
        </div>

        <p className="text-left text-gray-700 mb-12">
          Blending creativity with code & intelligence with data
        </p>

        <div className="space-y-12 md:space-y-16">
          {timeline.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: false, amount: 0.3 }}
              className={`relative w-full flex ${
                index % 2 === 0 ? "md:justify-start" : "md:justify-end"
              }`}
            >
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full shadow-md" />

              <div
                className={`w-full md:w-[46%] bg-white border border-gray-200 shadow-md rounded-2xl p-6`}
              >
                <p className="text-base md:text-lg font-medium text-gray-800">
                  {item.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
