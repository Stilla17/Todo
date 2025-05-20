import React from 'react'
import { GoInfo } from "react-icons/go";
import { FiLogOut } from "react-icons/fi";
import { IoIosSend } from "react-icons/io";
import { ImFilePicture } from "react-icons/im";
import background  from './../assets/Img/183.png';
import { Link } from 'react-router';
const Chat = () => {
  return (
    <>
        <div className="bg-cover bg-center" style={{ backgroundImage: `url(${background})` }}>
        <div className="w-full flex gap-[10px] h-screen backdrop-blur-md bg-black/5">

        <div className="w-[500px] h-[100vh] rounded-[16px] bg-white/10 backdrop-blur-md border-b border-white/10 shadow-sm pl-[30px] py-[20px]">

            <h1 className="text-white font-semibold text-[50px] mb-[10px] font-[Inter]">💎 Quit Chat</h1>
            <Link to="/plans">
                <h2 className='font-[Inter] font-bold text-[20px] flex gap-[10px] mb-[20px] items-center text-white'>back <FiLogOut /></h2>
            </Link>
            <input type="text" className='text-white border-0 bg-violet-900/40 w-[300px] h-[50px] rounded-[20px] pl-[40px] mb-[50px] focus:outline-0' placeholder='Search here...'/>

                <div className='flex flex-wrap gap-[20px]'>
                    
                    <div className="text-white w-[100%] rounded-[16px] flex gap-[10px] items-center pl-[10px] h-[90px] hover:bg-white/10 hover:backdrop-blur-md">
                        <div className='w-[80px] h-[80px] rounded-[50%] bg-gray-500'></div>
                        <div>
                            <h2 className='font-bold text-[20px]'>Сабинина Мама</h2>
                            <p className='text-green-400 flex gap-[10px] items-center'>Online <div className='w-[10px] h-[10px] bg-green-400 rounded-full'></div></p>
                        </div>
                    </div>
                    <div className="text-white w-[100%] rounded-[16px] flex gap-[10px] items-center pl-[10px] h-[90px] hover:bg-white/10 hover:backdrop-blur-md">
                        <div className='w-[80px] h-[80px] rounded-[50%] bg-gray-500'></div>
                        <div>
                            <h2 className='font-bold text-[20px]'>Сабинина Мама</h2>
                            <p className='text-green-400 flex gap-[10px] items-center'>Online <div className='w-[10px] h-[10px] bg-green-400 rounded-full'></div></p>
                        </div>
                    </div>

                </div>
            
        </div>

        <div className='border-white w-[100%] px-[20px]'>
            <nav className='w-[100%] h-[90px] flex justify-between items-center px-[50px] mb-[50px] border-b border-gray-300'>
                <div className="text-white w-[100%] rounded-[16px] flex gap-[10px] items-center h-[90px] hover:bg-white/10 hover:backdrop-blur-md">
                    <div className='w-[50px] h-[50px] rounded-[50%] bg-gray-500'></div>
                        <div>
                            <h2 className='font-bold text-[20px] flex gap-[10px] items-center'>Сабинина Мама <div className='w-[15px] h-[15px] bg-green-400 rounded-full'></div></h2>
                        </div>
                    </div>
                <GoInfo className='w-[50px] h-[50px] text-white'/>
            </nav>

            <div className=' h-[650px] scroll-auto'>
                <div>
                    <div className="max-w-md p-3 ml-[50px] rounded-t-2xl rounded-br-2xl bg-white/10 backdrop-blur-md text-white text-sm shadow-inner border border-white/10">
                      Я Сабинина Мама 💀
                     </div>  
                    <div className='w-[50px] h-[50px] bg-gray-500 rounded-full'></div>
                </div>

                <div className='flex justify-end'>
                    <div className='content-end'>
                    <div className="max-w-md p-3 mr-[50px] rounded-t-2xl rounded-bl-2xl bg-white/10 backdrop-blur-md text-white text-sm shadow-inner border border-white/10">
                      Я тоже  💀
                     </div>  
                    <div className='w-[50px] h-[50px] ml-[170px] bg-gray-500 rounded-full'></div>
                </div>
                </div>
            </div>

            <div className=' h-[80px] w-[90%] flex gap-[20px] relative'>
                <ImFilePicture className='absolute top-[15px] right-[100px] text-[20px] text-white'/>
                <input type="text" className='text-white border-0 bg-white/20 w-[100%] h-[50px] rounded-[20px] pl-[40px] mb-[50px] focus:outline-0' placeholder='Send a message...'/>
                <button className='bg-violet-500 text-white w-[50px] h-[50px] rounded-full flex justify-center items-center text-[24px]'><IoIosSend /></button>
            </div>

        </div>        



        </div>
        </div>

    </>
  )
}

export default Chat
