import React, { useEffect, useState } from 'react'
import { GoInfo } from "react-icons/go";
import { FiLogOut } from "react-icons/fi";
import { IoIosSend } from "react-icons/io";
import { ImFilePicture } from "react-icons/im";
import background from './../assets/Img/183.png';
import { Link } from 'react-router';
import { io } from "socket.io-client";
import { useAuth } from './../Components/AuthContext/AuthProvider.jsx';

const socket = io("http://localhost:5000");

const Chat = () => {

    const [message, setMessage] = useState("")
    const [chat, setChat] = useState([])
    const { user } = useAuth();

    const [selectedUser, setSelectedUser] = useState(null);

    const [users, setUsers] = useState([]);

    const apiServer = import.meta.env.VITE_SERVER

    useEffect(() => {

        if (selectedUser && user) {
            const roomId =
                user.uid < selectedUser.uid
                    ? `${user.uid}_${selectedUser.uid}`
                    : `${selectedUser.uid}_${user.uid}`;

            socket.emit("join_room", roomId);
            console.log("Roomga qo‘shildik:", roomId);
        }
    }, [selectedUser, user]);

    useEffect(() => {
        socket.on("receive_message", (data) => {
            setChat(prev => [...prev, data])
        })

        return () => socket.off("receive_message")
    }, [])

    useEffect(() => {
        fetch(apiServer)
            .then(res => res.json())
            .then((data) => setUsers(data))
            .catch((err) => console.error("Xatolik:", err));
    })

    const sendMessage = (event) => {
        event.preventDefault()
        if (message.trim() && selectedUser) {
            const roomId =
                user.id < selectedUser.uid
                    ? `${user.uid}_${selectedUser.uid}`
                    : `${selectedUser.uid}_${user.uid}`;

            const data = {
                room: roomId,
                from: user.uid,
                to: selectedUser.uid,
                text: message,
                time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            };
            socket.emit("send_message", data);
            setChat((prev) => [...prev, data]);
            setMessage("");
        }
    }

    return (
        <>
            <div className="bg-cover bg-center" style={{ backgroundImage: `url(${background})` }}>
                <div className="w-full flex gap-[10px] h-screen backdrop-blur-md bg-black/5">

                    <div className="w-[500px] overflow-auto rounded-[16px] bg-white/10 backdrop-blur-md border-b border-white/10 shadow-sm pl-[30px] py-[20px]">

                        <h1 className="text-white font-semibold text-[50px] mb-[10px] font-[Inter]">💎 Quit Chat</h1>
                        <Link to="/plans">
                            <h2 className='font-[Inter] font-bold text-[20px] flex gap-[10px] mb-[20px] items-center text-white'>back <FiLogOut /></h2>
                        </Link>
                        <input type="text" className='text-white border-0 bg-violet-900/40 w-[300px] h-[50px] rounded-[20px] pl-[40px] mb-[50px] focus:outline-0' placeholder='Search here...' />

                        <div className='flex flex-wrap gap-[20px] '>

                            <ul className="space-y-5">
                                {users.map((user, idx) => (
                                    <li key={idx} onClick={() => setSelectedUser(users[idx])} className="flex items-center space-x-4 hover:bg-[#ffffff5d] w-full rounded-2xl cursor-pointer">
                                        <img className='w-[50px] h-[50px] rounded-full' src={user.photoURL} alt="" />
                                        <p className="text-[16px] font-medium">{user.name}</p>
                                    </li>
                                ))}
                            </ul>

                        </div>

                    </div>

                    <div className='border-white w-[100%] px-[20px]'>
                        <nav className='w-[100%] h-[90px] flex justify-between items-center px-[50px] mb-[50px] border-b border-gray-300'>
                            {
                                selectedUser ? (
                                    <div className="text-white w-[100%] rounded-[16px] flex gap-[10px] items-center h-[90px] hover:bg-white/10 hover:backdrop-blur-md">
                                        <img className='w-[50px] h-[50px] rounded-full' src={selectedUser.photoURL} alt="" />
                                        <div>
                                            <h2 className='font-bold text-[20px] flex gap-[10px] items-center'>{selectedUser.name} <div className='w-[15px] h-[15px] bg-green-400 rounded-full'></div></h2>
                                        </div>
                                    </div>
                                ) : ""
                            }
                            <GoInfo className='w-[50px] h-[50px] text-white' />
                        </nav>

                        <div className='flex  flex-col justify-between h-[80%]'>
                            <div className=' overflow-auto'>

                                {chat
                                    .filter(
                                        (msg) =>
                                            (msg.from === user.uid && msg.to === selectedUser?.uid) ||
                                            (msg.from === selectedUser?.uid && msg.to === user.uid)
                                    )
                                    .map((msg, index) => (
                                        <div
                                            key={index}
                                            className={`flex ${msg.from === user.uid ? "justify-end" : "justify-start"
                                                }`}
                                        >
                                            <div className="max-w-md p-3 rounded-t-2xl bg-white/10 text-white text-sm shadow-inner border border-white/10 m-2">
                                                <p>{msg.text}</p>
                                                <span className="text-xs opacity-70">{msg.time}</span>
                                            </div>
                                        </div>
                                    ))}
                            </div>

                            <form onSubmit={sendMessage} className='h-[80px] w-[90%] flex gap-[20px] relative'>
                                <ImFilePicture className='absolute top-[15px] right-[100px] text-[20px] text-white' />
                                <input value={message} onChange={(e) => setMessage(e.target.value)} type="text" className='text-white border-0 bg-white/20 w-[100%] h-[50px] rounded-[20px] pl-[40px] mb-[50px] focus:outline-0' placeholder='Send a message...' />
                                <button className='bg-violet-500 text-white w-[50px] h-[50px] rounded-full flex justify-center items-center text-[24px]'><IoIosSend /></button>
                            </form>
                        </div>

                    </div>



                </div>
            </div>

        </>
    )
}

export default Chat
