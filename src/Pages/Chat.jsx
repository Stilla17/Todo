import React from 'react';
import { GoInfo } from "react-icons/go";
import { FiLogOut } from "react-icons/fi";
import { IoIosSend } from "react-icons/io";
import { ImFilePicture } from "react-icons/im";
import background from './../assets/Img/183.png';
import { Link } from 'react-router';

const Chat = () => {
  return (
    <div
      className="bg-cover bg-center"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="w-full flex h-screen backdrop-blur-md bg-black/5">

        {/* Sidebar */}
        <div className="w-[500px] rounded-[16px] bg-white/10 backdrop-blur-md border-b border-white/10 shadow-sm pl-[30px] py-[20px]">
          <h1 className="text-white font-semibold text-[50px] mb-[10px] font-[Inter]">💎 Quit Chat</h1>

          <Link to="/plans">
            <h2 className="font-[Inter] font-bold text-[20px] flex gap-[10px] mb-[20px] items-center text-white">
              back <FiLogOut />
            </h2>
          </Link>

          <input
            type="text"
            className="text-white border-0 bg-violet-900/40 w-[300px] h-[50px] rounded-[20px] pl-[20px] mb-[30px] focus:outline-0"
            placeholder="Search here..."
          />

          <div className="flex flex-col gap-[20px] overflow-y-auto max-h-[calc(100vh-300px)] pr-[10px]">
            {[1, 2].map((_, i) => (
              <div key={i} className="text-white w-[100%] rounded-[16px] flex gap-[10px] items-center pl-[10px] h-[90px] hover:bg-white/10 hover:backdrop-blur-md cursor-pointer">
                <div className="w-[80px] h-[80px] rounded-full bg-gray-500"></div>
                <div>
                  <h2 className="font-bold text-[20px]">Сабинина Мама</h2>
                  <p className="text-green-400 flex gap-[10px] items-center">
                    Online <div className="w-[10px] h-[10px] bg-green-400 rounded-full"></div>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col w-full px-[20px]">
          <nav className="w-full h-[90px] flex justify-between items-center px-[50px] border-b border-gray-300">
            <div className="flex gap-[10px] items-center">
              <div className="w-[50px] h-[50px] rounded-full bg-gray-500"></div>
              <h2 className="font-bold text-[20px] flex gap-[10px] items-center text-white">
                Сабинина Мама <div className="w-[15px] h-[15px] bg-green-400 rounded-full"></div>
              </h2>
            </div>
            <GoInfo className="w-[30px] h-[30px] text-white" />
          </nav>

          <div className="flex-1 overflow-auto py-5 px-5 space-y-5">

            <div className="flex items-end gap-3">
              <div className="w-[40px] h-[40px] rounded-full bg-gray-500"></div>
              <div className="max-w-md p-3 rounded-t-2xl rounded-br-2xl bg-white/10 backdrop-blur-md text-white text-sm shadow-inner border border-white/10">
                Я Сабинина Мама 💀
              </div>
            </div>

            <div className="flex items-end gap-3 justify-end">
              <div className="max-w-md p-3 rounded-t-2xl rounded-bl-2xl bg-white/10 backdrop-blur-md text-white text-sm shadow-inner border border-white/10">
                Я тоже 💀
              </div>
              <div className="w-[40px] h-[40px] rounded-full bg-gray-500"></div>
            </div>
          </div>

          <div className="w-full px-5 py-3 relative flex items-center gap-3 border-t border-white/10">
            <label>
              <ImFilePicture className="absolute top-[25px] right-[100px] text-[20px] text-white" />
              <input
                type="file"
                className="opacity-0 w-[30px] h-[30px] absolute top-0 left-0 cursor-pointer"
              />
            </label>
            <input
              type="text"
              placeholder="Send a message..."
              className="flex-1 h-[50px] rounded-[20px] bg-white/20 text-white pl-[50px] pr-[10px] focus:outline-0"
            />
            <button className="w-[50px] h-[50px] rounded-full bg-violet-500 text-white flex items-center justify-center text-[24px]">
              <IoIosSend />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
