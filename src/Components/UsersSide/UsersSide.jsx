import React, { useEffect, useState } from 'react'

const UsersSide = () => {

    const [users, setUsers] = useState([]);

    const apiServer = import.meta.env.VITE_SERVER

    useEffect(() => {
        fetch(apiServer)
            .then(res => res.json())
            .then((data) => setUsers(data))
            .catch((err) => console.error("Xatolik:", err));
    })

    return (
        <>
            <div className="w-[500px] bg-white rounded-xl shadow-xl p-6">
                <div className="flex justify-between border-b pb-4 mb-5">
                    <button className="text-blue-600 font-semibold">Primary</button>
                </div>
                <ul className="space-y-5">
                    {users.map((user, idx) => (
                        <li key={idx} className="flex items-center space-x-4">
                            <img className='w-[50px] h-[50px] rounded-full' src={user.photoURL} alt="" />
                            <p className="text-[16px] font-medium">{user.name}</p>
                        </li>
                    ))}
                </ul>
                <div className="mt-6 text-blue-500 text-sm cursor-pointer hover:underline">View All</div>
            </div>
        </>
    )
}

export default UsersSide