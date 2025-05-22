import React from "react";
import Button from "../Button/Button";
import { Link } from "react-router";
import { FaFlagCheckered, FaBook } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { useAuth } from "../AuthContext/AuthProvider";
import { IoGameController } from "react-icons/io5";
import { IoHomeSharp } from "react-icons/io5";
import { MdCasino } from "react-icons/md";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";

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
    link: "Game",
    path: "game",
    icon: <IoGameController />,
    expended: true,
    children: [
      {
        link: "Hamster",
        path: "game/hamster",
        icon: "🐹",
      },
      { 
        link: "Casino", 
        path: "game/casino",
        icon: <MdCasino />
      },
      { 
        link: "Froggy", 
        path: "game/Frog",
        icon: "🐸"
      },
    ],
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

const Nav = () => {
  const { user } = useAuth();

  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <nav className="shadow-2xl w-[25%] rounded-2xl h-[100vh] fixed">
      <div className="w-[90%] mx-auto">
        <div className="flex flex-col items-center gap-4 h-[400px] bg-gray-100 mb-[20px] rounded-md w-[350px] mt-[10px]">
          {user ? (
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
                  <h2 className="font-bold">100+</h2>{" "}
                  <p className="text-gray-500">Post</p>
                </div>
                <div className="border-r-1 h-[45px]"></div>
                <div className="w-[50px] text-center">
                  <h2 className="font-bold">200+</h2>{" "}
                  <p className="text-gray-500">Follow</p>
                </div>
                <div className="border-r-1 h-[45px]"></div>
                <div className="w-[50px] text-center">
                  <h2 className="font-bold">infinity+</h2>{" "}
                  <p className="text-gray-500">Folloers</p>
                </div>
              </div>
              <Button
                className="text-sm bg-accent rounded-full px-4 py-2 text-white"
                text="Freelancer"
              />
            </>
          ) : (
            ""
          )}
        </div>

        <div className="theme-preview bg-accent py-[20px] rounded-b-2xl rounded-tr-[100px] flex flex-col p-6 mb-6">
      <ul className="flex flex-col gap-2">
  {link.map((item, index) => (
    <div key={index}>
      {!item.children ? (
        <li className="flex items-center gap-2 text-black">
          {item.icon}
          <Link to={item.path}>{item.link}</Link>
        </li>
      ) : (
        <>
          <ListItemButton onClick={() => setOpen((prev) => !prev)}>
            {item.icon}
            <ListItemText primary={item.link} />
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
           <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {item.children.map((child, childIndex) => (
                <ListItemButton sx={{ pl: 4 }} key={childIndex}>
                  {child.icon}
                  <Link to={child.path}>{child.link}</Link>
                </ListItemButton>
              ))}
            </List>
          </Collapse>
        </>
      )}
    </div>
  ))}
</ul>

        </div>
      </div>
    </nav>
  );
};

export default Nav;
