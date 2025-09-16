"use client";
import { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { Menu, X } from "lucide-react"; // hamburger + close icons

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);


  return (
    <nav
      className="
        fixed top-6 left-1/2 -translate-x-1/2 
        flex items-center justify-between w-11/12 max-w-6xl h-14
        bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100
        px-6 md:px-8 rounded-full shadow-xl z-50 
        border border-gray-200 dark:border-gray-700
        transition-colors duration-300
      "
    >
      <div className="text-xl font-bold tracking-wide">
        My<span className="text-blue-500">Portfolio</span>
      </div>

      <div className="hidden md:flex gap-8 text-md font-medium absolute left-1/2 -translate-x-1/2">
        {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="relative group transition-colors"
          >
            {item}
            <span
              className="absolute left-1/2 -translate-x-1/2 -bottom-1
                w-full h-[2px] bg-blue-500
                transform scale-x-0
                transition-transform duration-500 ease-in-out
                origin-left
                group-hover:scale-x-100"
            ></span>
          </a>
        ))}
      </div>

      <div className="flex items-center gap-4">
        <a
          href="https://github.com/Sadab-Ansari"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
        >
          <FaGithub size={24} />
        </a>

        <button
          className="md:hidden text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {menuOpen && (
        <div className="absolute top-16 right-6 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg shadow-lg flex flex-col items-start p-4 gap-4 md:hidden transition-colors duration-300">
          {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}

// testing the scaling
