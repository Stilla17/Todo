import React, { useState } from 'react';
import focused from './../img/focused.jpg';
import work from './../img/work.jpg';
import day_one from './../img/day one-one day.jpg';
import be_you from './../img/Be yoyu.jpg';

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

            <div className="w-[500px] h-[600px] bg-white rounded-xl shadow-xl p-6">
                <div className="flex justify-between border-b pb-4 mb-5">
                    <button className="text-blue-600 font-semibold">Primary</button>
                    <button className="text-gray-500 font-semibold">General</button>
                    <button className="text-gray-500 font-semibold">Requests</button>
                </div>
                <ul className="space-y-5">
                    {[
                        'Roger Korsgaard',
                        'Terry Torff',
                        'Angel Bergson',
                        'Emerson Gouse',
                        'Corey Baptista',
                        'Zain Culhane',
                        'Randy Lipshutz',
                        'Craig Botosh',
                    ].map((name, idx) => (
                        <li key={idx} className="flex items-center space-x-4">
                            <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
                            <p className="text-[16px] font-medium">{name}</p>
                        </li>
                    ))}
                </ul>
                <div className="mt-6 text-blue-500 text-sm cursor-pointer hover:underline">View All</div>
            </div>
        </div>
    );
};

export default Dashboard;
