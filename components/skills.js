"use client";
import { motion } from "framer-motion";
import { Karla } from "next/font/google";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiDjango,
  SiMongodb,
  SiMysql,
  SiPython,
  SiNumpy,
  SiPandas,
  SiScikitlearn,
  SiGit,
  SiGithub,
  SiVercel,
  SiNetlify,
  SiFastapi,
  SiRender,
  SiRailway,
} from "react-icons/si";
import { FaAws } from "react-icons/fa";

// Import Karla font
const karla = Karla({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export default function Skills() {
  const categories = [
    {
      title: "Web Development",
      percentage: 65,
      skills: [
        { name: "HTML", icon: <SiHtml5 className="text-orange-500" /> },
        { name: "CSS", icon: <SiCss3 className="text-blue-500" /> },
        {
          name: "JavaScript",
          icon: <SiJavascript className="text-yellow-500" />,
        },
        { name: "React.js", icon: <SiReact className="text-blue-500" /> },
        { name: "Next.js", icon: <SiNextdotjs className="text-gray-900" /> },
        {
          name: "Tailwind CSS",
          icon: <SiTailwindcss className="text-teal-500" />,
        },
        { name: "Node.js", icon: <SiNodedotjs className="text-green-600" /> },
        { name: "Express.js", icon: <SiExpress className="text-gray-800" /> },
        { name: "Django", icon: <SiDjango className="text-green-700" /> },
        { name: "FastAPI", icon: <SiFastapi className="text-teal-600" /> },
        { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
        { name: "MySQL", icon: <SiMysql className="text-blue-600" /> },
      ],
    },
    {
      title: "AI / ML",
      percentage: 52,
      skills: [
        { name: "Python", icon: <SiPython className="text-yellow-600" /> },
        { name: "NumPy", icon: <SiNumpy className="text-blue-500" /> },
        { name: "Pandas", icon: <SiPandas className="text-green-500" /> },
        {
          name: "Scikit-learn",
          icon: <SiScikitlearn className="text-blue-400" />,
        },
      ],
    },
    {
      title: "Dev Tools",
      percentage: 85,
      skills: [
        { name: "Git", icon: <SiGit className="text-red-500" /> },
        { name: "GitHub", icon: <SiGithub className="text-gray-900" /> },
      ],
    },
    {
      title: "Deployment",
      percentage: 75,
      skills: [
        { name: "Vercel", icon: <SiVercel className="text-gray-900" /> },
        { name: "Netlify", icon: <SiNetlify className="text-green-500" /> },
        { name: "Render", icon: <SiRender className="text-blue-500" /> },
        { name: "Railway", icon: <SiRailway className="text-purple-600" /> },
        { name: "AWS", icon: <FaAws className="text-orange-500" /> },
      ],
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="skills" className="w-full flex justify-center mt-24">
      <div className="w-[90%] max-w-6xl">
        {/* Section Heading */}
        <div className="flex flex-col items-start mb-10">
          <div className="flex items-center gap-3 mb-2">
            <span className="h-[2px] w-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded" />
            <h2
              className={`text-sm tracking-[0.25em] text-gray-700 uppercase ${karla.className}`}
            >
              Skills
            </h2>
          </div>
          <p className={`text-lg text-gray-700 italic ${karla.className}`}>
            Tools & technologies I work with
          </p>
        </div>

        {/* Categories */}
        {categories.map((cat, i) => (
          <div key={i} className="mb-16">
            {/* Top Center Progress */}
            <div className="flex flex-col items-center justify-center mb-8">
              <p
                className={`text-xl font-semibold text-gray-900 mb-2 ${karla.className}`}
              >
                {cat.title} {cat.percentage}%
              </p>
              <div className="w-64 h-3 bg-gray-200 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${cat.percentage}%` }}
                  transition={{ duration: 1 }}
                  className="h-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
                />
              </div>
            </div>

            {/* Skills Grid */}
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.2 }}
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6"
            >
              {cat.skills.map((skill, j) => (
                <motion.div
                  key={j}
                  variants={cardVariants}
                  whileHover={{ scale: 1.05 }}
                  className="flex flex-col items-center justify-center p-6 rounded-2xl border border-gray-200 bg-white/10 backdrop-blur-sm shadow-lg cursor-default"
                >
                  <div className="text-4xl mb-3">{skill.icon}</div>
                  <p
                    className={`text-lg font-semibold text-gray-900 ${karla.className}`}
                  >
                    {skill.name}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
}
