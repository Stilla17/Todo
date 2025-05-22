import React from 'react';

const Slide = ({ images, index, onPrev, onNext }) => {
    if (images.length === 0) {
        return <p className="text-center mt-10">Rasm mavjud emas</p>;
    }

    return (
        <>
            {images.length > 1 ? (
                <div className="relative w-full h-[300px] flex items-center justify-center mb-4 overflow-hidden rounded-xl">
                    <button
                        onClick={onPrev}
                        className="absolute left-2 z-10 bg-white p-2 rounded-full shadow hover:scale-105 transition"
                        aria-label="Previous image"
                    >
                        ‹
                    </button>

                    <img
                        src={images[index]}
                        alt={`Image ${index + 1}`}
                        className="w-full h-full object-cover transition-all duration-500 rounded"
                    />

                    <button
                        onClick={onNext}
                        className="absolute right-2 z-10 bg-white p-2 rounded-full shadow hover:scale-105 transition"
                        aria-label="Next image"
                    >
                        ›
                    </button>
                </div>
            ) : (
                <div className="relative w-full h-[300px] mb-4 rounded-xl overflow-hidden">
                    <img
                        src={images[0]}
                        alt="Single Image"
                        className="w-full h-full object-cover"
                    />
                </div>
            )}
        </>
    );
};

export default Slide;
