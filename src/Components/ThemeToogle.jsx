import React, { useState, useEffect } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="relative w-16 h-8 bg-gray-200 rounded-full flex items-center transition-all"
    >
      <div
        className={`w-6 h-6 bg-white rounded-full shadow-md absolute transition-all ${
          darkMode ? "translate-x-9" : "translate-x-1"
        }`}
      />
      <FaSun className="text-gray-500 absolute left-2 text-sm" />
      <FaMoon className="text-gray-500 absolute right-2 text-sm" />
    </button>
  );
};

export default ThemeToggle;
