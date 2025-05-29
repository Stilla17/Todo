import React, { useState, useEffect } from 'react';
import { useAuth } from './../Components/AuthContext/AuthProvider.jsx';
import UserSide from './../Components/UsersSide/UsersSide.jsx';
import Slide from './../Components/Slider/Slider.jsx';

const Dashboard = () => {
    const { user } = useAuth();

    const [posts, setPosts] = useState(() => {
        const saved = localStorage.getItem('posts');
        return saved ? JSON.parse(saved) : [];
    });

    const [newImages, setNewImages] = useState('');
    const [newThought, setNewThought] = useState('');
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        localStorage.setItem('posts', JSON.stringify(posts));
    }, [posts]);

    const addPost = () => {
        if (!user) return alert('Please login first!');

        const imageArray = newImages
            .split(',')
            .map((url) => url.trim())
            .filter(Boolean);

        if (!imageArray.length || !newThought.trim())
            return alert('Please enter at least one image and a thought.');

        const newPost = {
            images: imageArray,
            thought: newThought.trim(),
            index: 0,
            createdAt: new Date(),
            username: user.displayName,
            photoUrl: user.photoURL,
        };

        setPosts((prev) => [...prev, newPost]);
        setNewImages('');
        setNewThought('');
        setShowModal(false);
    };

    const changeSlideIndex = (postIdx, direction) => {
        setPosts((prev) =>
            prev.map((post, idx) =>
                idx === postIdx
                    ? {
                        ...post,
                        index:
                            direction === 'prev'
                                ? post.index === 0
                                    ? post.images.length - 1
                                    : post.index - 1
                                : post.index === post.images.length - 1
                                    ? 0
                                    : post.index + 1,
                    }
                    : post
            )
        );
    };

    return (
        <>
            <div className="flex mt-4">
                <button
                    onClick={() => setShowModal(true)}
                    className="w-[30px] h-[30px] bg-gray-300 flex items-center font-bold justify-center rounded"
                    disabled={!user}
                    title={user ? 'Add new post' : 'Please login first'}
                >
                    +
                </button>
            </div>

            {showModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white p-6 rounded-xl w-[90%] max-w-md shadow-2xl flex flex-col gap-4">
                        <input
                            type="text"
                            placeholder="Add image URLs (comma separated)"
                            value={newImages}
                            onChange={(e) => setNewImages(e.target.value)}
                            className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                        <input
                            type="text"
                            placeholder="Leave your thoughts"
                            value={newThought}
                            onChange={(e) => setNewThought(e.target.value)}
                            className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                        <button
                            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                            onClick={addPost}
                        >
                            Add
                        </button>
                        <button
                            className="text-red-500 mt-2 underline"
                            onClick={() => setShowModal(false)}
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}

            <div className="mt-10 px-6 flex flex-col lg:flex-row items-start gap-8 w-full justify-center">
                <div className="flex flex-col items-center gap-8 w-full lg:w-2/3">
                    {!posts.length ? (
                        <p className="text-gray-500">No posts yet. Add your first post!</p>
                    ) : (
                        posts.map((post, idx) => (
                            <div key={idx} className="bg-white p-4 rounded-lg shadow-md w-full">
                                <div className="flex items-center mb-4 space-x-3">
                                    <img
                                        src={post.photoUrl}
                                        alt={post.username}
                                        className="w-10 h-10 rounded-full"
                                    />
                                    <div>
                                        <p className="font-semibold">{post.username}</p>
                                        <p className="text-gray-500 text-xs">
                                            {new Date(post.createdAt).toLocaleString()}
                                        </p>
                                    </div>
                                </div>

                                <Slide
                                    images={post.images}
                                    index={post.index}
                                    onPrev={() => changeSlideIndex(idx, 'prev')}
                                    onNext={() => changeSlideIndex(idx, 'next')}
                                />

                                <p className="text-gray-700">{post.thought}</p>
                            </div>
                        ))
                    )}
                </div>

                <div className="w-full lg:w-1/3">
                    <UserSide />
                </div>
            </div>
        </>
    );
};

export default Dashboard;
