import React from 'react'
import { useLocation, useParams } from 'react-router'

const InfoMovies = () => {
  const { id } = useParams()
  const { state } = useLocation()
  console.log(state);
  let movie = state.movie

  {/* <h2 className='text-2xl font-bold mb-2'>{movie.title || movie.original_name}</h2>
            <p><strong>Rating:</strong> {movie.vote_average}</p>
            <p><strong>First Air:</strong> {movie.first_air_date}</p>
            <p><strong>Language:</strong> {movie.original_language}</p>
            <p><strong>Overview:</strong> {movie.overview}</p> */}

  return (
    <div className="flex bg-[#1a1a1a] text-white w-[100%] px-[20px] py-[20px] rounded-2xl shadow-xl gap-6 mx-auto" >
      <div className="flex-1 space-y-4">
        <h1 className="text-[55px] font-bold">{movie.title || movie.original_name}</h1>
        <p className="text-gray-300 text-sm leading-relaxed">
          {movie.overview}
        </p>

        <div className="space-y-2 text-sm">
          <div className="flex justify-between h-[40px] items-center border-b border-gray-600 py-1">
            <span className="text-gray-400">Дата выхода:</span>
            <span>{movie.release_date}</span>
          </div>

          <div className="flex justify-between h-[40px] items-center border-b border-gray-600 py-1 ">
            <span className="text-gray-400">Оценки:</span>
            <div className="flex items-center gap-3">
              <span> {movie.vote_average} </span>
            </div>
          </div>

          <div className="flex justify-between h-[40px] items-center border-b border-gray-600 py-1">
            <span className="text-gray-400">Языки:</span>
            <span>{movie.original_language}</span>
          </div>

        </div>

        <div className="flex gap-4 mt-4">
          <button
            className="bg-yellow-400 text-black font-semibold px-6 py-2 rounded-xl hover:bg-yellow-300 transition"
          >
            Смотреть
          </button>
        </div>
        <br />
      </div>

      <div className="w-full md:w-1/3">
        <img
          src={"https://image.tmdb.org/t/p/w500" + movie.poster_path}
          alt="Item.img"
          className="w-full h-auto rounded-2xl object-cover shadow-lg"
        />
      </div>
    </div>


  )
}

export default InfoMovies