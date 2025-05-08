import React from "react";
// import user_img from "./../../assets/img/user_img.png";
import Button from "../Button/Button";
import { Link, useNavigate } from "react-router"
import { FaFlagCheckered, FaBook, FaSignOutAlt } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { useAuth } from "../AuthContext/AuthProvider";

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
    link: "Cars",
    path: "cars",
    icon: <FaFlagCheckered /> 
  },
  {
    link: "Settings",
    path: "settings",
    icon: <IoMdSettings />
  },

]

const Nav = () => {

  const { user, logOut } = useAuth()
  const navigate = useNavigate()

  const handleLogout = () => {
    logOut()
    navigate('/signin')
  }

  return (
    <nav className="shadow-2xl w-[25%] rounded-2xl h-[100vh] fixed">
      <div className="w-[90%] mx-auto">
        <div className="flex flex-col items-center justify-center gap-4 h-[300px]">
          {user ? (
            <>
              <img src={user.photoURL} alt="User avatar" className="w-24 h-24 rounded-full" />
              <h2 className="text-2xl font-semibold">{user.displayName}</h2>
              <Button className="text-sm bg-accent rounded-full px-4 py-2 text-white" text="Freelancer" />
            </>
          ) : (
            <>
              {/* <img src={user_img} alt="Default avatar" className="w-24 h-24 rounded-full" />
              <h2 className="text-2xl font-semibold">Guest</h2>
              <Button className="text-sm bg-gray-400 rounded-full px-4 py-2 text-white" text="Not Signed In" /> */}
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

          <div className="mt-auto flex items-center justify-end gap-4">
            <Button
              onClick={handleLogout}
              className="text-sm bg-accent rounded-full px-4 py-2 text-white"
              text="Logout"
            />
            <FaSignOutAlt />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
