"use client";

import React, { useEffect, useState } from "react";
import { SunMedium, Moon } from "lucide-react";

const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  // On component mount, check if dark mode is saved in localStorage or system preference
  useEffect(() => {
    const saved = localStorage.getItem("darkMode");
    if (saved === "true") {
      setDarkMode(true);
    } else if (saved === "false") {
      setDarkMode(false);
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setDarkMode(true);
    }
  }, []);

  // When darkMode changes, toggle the 'dark' class on <html> element and save preference
  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  return (
    <div className="pl-12">
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="p-5 bg-[#C5FF4A] dark:text-white text-black rounded-full hover:bg-green-400 dark:hover:bg-white transition-colors"
      >
        {/* Toggle icon */}
        {darkMode ? <SunMedium size={20} /> : <Moon size={20} />}
      </button>
    </div>
  );
};

export default ThemeToggle;
