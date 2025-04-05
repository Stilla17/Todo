<<<<<<< HEAD
import React, { useEffect, useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "valentine"
  );

  useEffect(() => {
    const theme = darkMode ? "valentine" : "light";
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [darkMode]);

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="relative w-16 h-8 bg-gray-200 rounded-full flex items-center transition-all"
    >
      <div
        className={`w-6 h-6 bg-white rounded-full shadow-md absolute transition-all ${darkMode ? "translate-x-9" : "translate-x-1"
          }`}
      />
      <FaSun className="text-gray-500 absolute left-2 text-sm" />
      <FaMoon className="text-gray-500 absolute right-2 text-sm" />
    </button>
  );
};

export default ThemeToggle;
=======
import React from "react";
import user_img from "./../../assets/img/user_img.png";
import Button from "../Button/Button";
import { FaFlagCheckered, FaEnvelope, FaBook, FaCalendarAlt, FaSignOutAlt } from "react-icons/fa";
import { Link } from "react-router";

const Nav = () => {
  return (
    <nav className="shadow-2xl w-[25%] rounded-2xl">
      <div className="w-[90%] mx-auto">
        <div className="flex flex-col items-center justify-center gap-4 h-[300px]">
          <img src={user_img} alt="User avatar" className="w-24 h-24 rounded-full" />
          <h2 className="text-2xl font-semibold">Melissa Tommo</h2>
          <Button className="text-sm bg-[#5A5DF5] rounded-full px-4 py-2 text-white" text="Freelancer" />
        </div>

        <div className="bg-[#D9D9D9] h-[330px] rounded-b-2xl rounded-tr-[100px] flex flex-col p-6 mb-6">
          <ul className="flex flex-col gap-4">
            <li className="flex items-center gap-2">
              <FaFlagCheckered />
              <Link to='plans'>Plans</Link>
            </li>
            <li className="flex items-center gap-2">
              <FaFlagCheckered />
              <a href="#">Sport</a>
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope />
              <a href="#">Mail</a>
            </li>
            <li className="flex items-center gap-2">
              <FaBook />
              <a href="#">Table Books</a>
            </li>
            <li className="flex items-center gap-2">
              <FaCalendarAlt />
              <Link to='calendar'>Calendar</Link>
            </li>
          </ul>

          <div className="mt-auto flex items-center justify-end gap-4 text-gray-700">
            <a href="#">Log out</a>
            <FaSignOutAlt />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
>>>>>>> d18dd791e6626a45538999d1a7c370003f011b11
