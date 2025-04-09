import React from "react";
import user_img from "./../../assets/img/user_img.png";
import Button from "../Button/Button";
import { Link } from "react-router"
import { FaFlagCheckered, FaBook, FaSignOutAlt } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";

const link = [
  {
    link: "Todo",
    path: "plans",
    icon: <FaFlagCheckered />
  },
  {
    link: "Movies",
    path: "movies",
    icon: <FaBook />
  },
  {
    link: "Settings",
    path: "settings",
    icon: <IoMdSettings />
  },

]


const Nav = () => {
  return (
    <nav className="shadow-2xl w-[25%] rounded-2xl h-[100vh] fixed">
      <div className="w-[90%] mx-auto">
        <div className="flex flex-col items-center justify-center gap-4 h-[300px]">
          <img src={user_img} alt="User avatar" className="w-24 h-24 rounded-full" />
          <h2 className="text-2xl font-semibold">Melissa Tommo</h2>
          <Button className="text-sm bg-accent rounded-full px-4 py-2 text-white" text="Freelancer" />
        </div>

        <div className="theme-preview bg-accent h-[330px] rounded-b-2xl rounded-tr-[100px] flex flex-col p-6 mb-6">
          <ul className="flex flex-col gap-4">
            {
              link.map((item, index) => (
                <li key={index} className="flex items-center gap-2">
                  {item.icon}
                  <Link to={item.path}>{item.link}</Link>
                </li>
              ))
            }

          </ul>

          <div className="mt-auto flex items-center justify-end gap-4 text-gray-700">
            <Link to='signin'>Log Out</Link>
            <FaSignOutAlt />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
