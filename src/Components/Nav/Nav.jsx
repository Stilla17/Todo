import React, { useState } from "react";
import Button from "../Button/Button";
import { Link } from "react-router";
import { FaFlagCheckered, FaBook } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { useAuth } from "../AuthContext/AuthProvider";
import { IoGameController, IoHomeSharp } from "react-icons/io5";
import { FaChevronDown } from "react-icons/fa6";

const link = [
  {
    link: "Home",
    path: "",
    icon: <IoHomeSharp />
  },
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
    link: "Cars",
    path: "cars",
    icon: <FaFlagCheckered />
  },
  {
    link: "Chat",
    path: "Chat",
    icon: <IoGameController />
  },
  {
    link: "Settings",
    path: "settings",
    icon: <IoMdSettings />
  }
];

// Список игр
const gamesList = [
  { name: "Combat", path: "games/combat" },
  { name: "Casino", path: "games/casino" },
  { name: "Calculator", path: "games/calc" }
];

const Nav = () => {
  const { user } = useAuth();
  const [showGames, setShowGames] = useState(false);

  return (
    <nav className="shadow-2xl w-[25%] rounded-2xl h-[100vh] fixed overflow-auto no-scrollbar">
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
                <div className="w-[50px] text-center">
                  <h2 className="font-bold">100+</h2>
                  <p className="text-gray-500">Post</p>
                </div>
                <div className="w-[50px] text-center">
                  <h2 className="font-bold">200+</h2>
                  <p className="text-gray-500">Follow</p>
                </div>
                <div className="w-[50px] text-center">
                  <h2 className="font-bold">infinity+</h2>
                  <p className="text-gray-500">Folloers</p>
                </div>
              </div>
              <Button
                className="text-sm bg-accent rounded-full px-4 py-2 text-white"
                text="Freelancer"
              />
            </>
          )}
        </div>

        <div className="theme-preview bg-accent h-auto rounded-b-2xl rounded-tr-[100px] flex flex-col p-6 mb-6 text-white">
          <ul className="flex flex-col gap-4">
            {link.map((item, index) => (
              <li key={index} className="flex items-center gap-2 hover:text-gray-200 transition-colors">
                {item.icon}
                <Link to={item.path}>{item.link}</Link>
              </li>
            ))}

            {/* Games list с красивым подменю */}
            <li className="flex flex-col gap-2">
              <div
                className="flex items-center justify-between cursor-pointer hover:text-gray-200 transition-colors"
                onClick={() => setShowGames(!showGames)}
              >
                <div className="flex items-center gap-2">
                  <IoGameController />
                  <span>Games list</span>
                </div>
                <FaChevronDown
                  className={`transition-transform duration-300 ${showGames ? "rotate-180" : ""
                    }`}
                />
              </div>
              {showGames && (
                <ul className="ml-6 mt-2 flex flex-col gap-2 bg-purple-700/30 p-2 rounded-lg">
                  {gamesList.map((game, i) => (
                    <li key={i} className="text-sm hover:underline">
                      <Link to={game.path}>{game.name}</Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
