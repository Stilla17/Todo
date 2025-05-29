// src/Components/Slide/Slide.jsx

import React from 'react';

const Slide = ({ images, index, onPrev, onNext }) => {
    if (!images || !images.length) return null;

    return (
        <div className="relative w-full mb-4">
            <img
                src={images[index]}
                alt={`Slide ${index + 1}`}
                className="w-full h-auto rounded-lg object-cover"
            />

            {images.length > 1 && (
                <>
                    <button
                        onClick={onPrev}
                        className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white rounded-full px-3 py-1 hover:bg-opacity-75 transition"
                    >
                        ‹
                    </button>
                    <button
                        onClick={onNext}
                        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white rounded-full px-3 py-1 hover:bg-opacity-75 transition"
                    >
                        ›
                    </button>
                </>
            )}
        </div>
    );
};

export default Slide;
