// import { useEffect, useState } from 'react';
// import { collection, getDocs } from 'firebase/firestore';
// import { db } from '../firebase';

// const Dashboard = () => {
//     const [users, setUsers] = useState([]);

//     useEffect(() => {
//         const fetchUsers = async () => {
//             const querySnapshot = await getDocs(collection(db, 'users'));
//             const usersData = querySnapshot.docs.map(doc => doc.data());
//             setUsers(usersData);
//         };
//         console.log(users);

//         fetchUsers();
//     }, []);

//     return (
//         <>
//             {users.map((user, idx) => (
//                 <div key={idx} style={{ marginBottom: '1rem' }}>
//                     {user.photoURL && <img src={user.photoURL} width="80" alt="avatar" />}
//                     <p>{user.displayName || user.email}</p>
//                 </div>
//             ))}
//         </>
//     )
// }
import React, { useState } from 'react';
import focused from './../img/focused.jpg';
import work from './../img/work.jpg';
import day_one from './../img/day one-one day.jpg';
import be_you from './../img/Be yoyu.jpg';
import UsersSide from '../Components/UsersSide/UsersSide';

const images = [focused, work, day_one, be_you];

const Dashboard = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    return (
        <div className="flex justify-center items-start min-h-screen bg-gray-100 p-12 space-x-10">
            {/* LEFT ARROW */}
            <button
                onClick={prevSlide}
                className="mt-[270px] mr-[-20px] z-10 bg-white p-4 rounded-full shadow-lg hover:scale-110 transition"
            >
                <svg
                    className="w-7 h-7 text-gray-700"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
            </button>

            {/* SLIDER */}
            <div className="w-[1500px] h-[600px] rounded-xl overflow-hidden shadow-2xl relative">
                <img
                    src={images[currentIndex]}
                    alt="slider"
                    className="w-full h-full object-cover"
                />
            </div>

            {/* RIGHT ARROW */}
            <button
                onClick={nextSlide}
                className="mt-[270px] ml-[-50px] z-10 bg-white p-4 rounded-full shadow-lg hover:scale-110 transition"
            >
                <svg
                    className="w-7 h-7 text-gray-700"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
            </button>

            <UsersSide />
        </div>
    );
};

export default Dashboard;
