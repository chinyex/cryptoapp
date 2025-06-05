"use client";

import React, { useEffect, useState } from "react";
import { SunMedium, Moon } from "lucide-react";

const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  // Check saved preference or system
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

  // Toggle dark class on <html>
  useEffect(() => {
    const html = document.documentElement;
    if (darkMode) {
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
    }
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  return (
    <div className="pl-12">
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="p-5 bg-[#C5FF4A] text-black rounded-full hover:bg-green-400 transition-colors"
      >
        {darkMode ? <SunMedium size={20} /> : <Moon size={20} />}
      </button>
    </div>
  );
};

export default ThemeToggle;
