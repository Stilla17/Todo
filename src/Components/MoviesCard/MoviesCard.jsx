import React from "react";

const MoviesCard = ({ show }) => {
    return (
        <div className="bg-accent border rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition duration-300">
            <img
                src={`https://image.tmdb.org/t/p/w500${show.poster_path}`}
                alt={show.name}
                className="w-full h-72 object-cover"
            />
            <div className="p-4 flex flex-col gap-2">
                <h2 className="text-lg font-bold text-primary">
                    {show.name || show.title || "No Title"}
                </h2>


                <p className="text-secondary text-sm line-clamp-3">
                    {show.overview}
                </p>

                <div className="text-sm text-neutral">
                    <p className="text-base"><span className="font-semibold">⭐ Rating:</span> {show.vote_average}</p>
                    <p className="text-base"><span className="font-semibold">🗳 Votes:</span> {show.vote_count}</p>
                    <p className="text-base"><span className="font-semibold">📅 First Air:</span> {show.first_air_date}</p>
                    <p className="text-base"><span className="font-semibold ">🌍 Language:</span> <span className="uppercase">{show.original_language}</span></p>
                </div>
            </div>
        </div>
    );
};

export default MoviesCard;
