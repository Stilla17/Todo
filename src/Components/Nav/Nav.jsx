import React, { useState } from "react";
import Button from "../Button/Button";
import { Link } from "react-router";
import { FaFlagCheckered, FaBook } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { useAuth } from "../AuthContext/AuthProvider";
import { IoGameController } from "react-icons/io5";
import { IoHomeSharp } from "react-icons/io5";

const link = [
  {
    link: "Home",
    path: "",
    icon: <IoHomeSharp />,
  },
  {
    link: "Todo",
    path: "plans",
    icon: <FaFlagCheckered />,
  },
  {
    link: "Movies",
    path: "movies",
    icon: <FaBook />,
  },
  {
    link: "Cars",
    path: "cars",
    icon: <FaFlagCheckered />,
  },
  {
    link: "game",
    path: "game",
    icon: <IoGameController />
  },
    {
    link: "Chat",
    path: "Chat",
    icon: <IoGameController />,
  },
  {
    link: "Settings",
    path: "settings",
    icon: <IoMdSettings />,
  },
];

// Список игр
const gamesList = [
  { name: "Combat", path: "games/combat" }
];

const Nav = () => {
  const { user } = useAuth();

  return (
    <nav className="shadow-2xl w-[25%] rounded-2xl h-[100vh] fixed">
      <div className="w-[90%] mx-auto">
        <div className="flex flex-col items-center gap-4 h-[400px] bg-gray-100 mb-[20px] rounded-md w-[350px] mt-[10px]">
          {user && (
            <>
              <div
                className="w-[100%] h-[200px] bg-cover bg-center rounded-t-md flex items-center justify-center"
                style={{ backgroundImage: `url(${user.photoURL})` }}
              >
                <img
                  src={user.photoURL}
                  alt="User avatar"
                  className="w-24 h-24 rounded-full border-2 border-white mt-[60px]"
                />
              </div>
              <h2 className="text-2xl font-semibold">{user.displayName}</h2>
              <div className="bg-gray-300 w-[250px] h-[70px] px-[20px] rounded-[10px] flex justify-between items-center">
                <div className="w-[50px] text-center"><h2 className="font-bold">100+</h2> <p className="text-gray-500">Post</p></div> 
                <div className="border-r-1 h-[45px]"></div>
                <div className="w-[50px] text-center"><h2 className="font-bold">200+</h2> <p className="text-gray-500">Follow</p></div> 
                <div className="border-r-1 h-[45px]"></div>
                <div className="w-[50px] text-center"><h2 className="font-bold">infinity+</h2> <p className="text-gray-500">Folloers</p></div>
              </div>
              <Button
                className="text-sm bg-accent rounded-full px-4 py-2 text-white"
                text="Freelancer"
              />
            </>
          )}
        </div>



        <div className="theme-preview bg-accent h-[330px] rounded-b-2xl rounded-tr-[100px] flex flex-col p-6 mb-6">
          <ul className="flex flex-col gap-4">
            {link.map((item, index) => (
              <li key={index} className="flex items-center gap-2">
                {item.icon}
                <Link to={item.path}>{item.link}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
