import React from 'react'
import { useLocation, useParams } from 'react-router'

const InfoMovies = () => {
    const { id } = useParams()
    const { state } = useLocation()
    console.log(state);
    let movie = state.movie


    return (
        <div className='bg-amber-600 h-[100vh] p-6 text-white'>
            <h2 className='text-2xl font-bold mb-2'>{movie.title || movie.original_name}</h2>
            <img src={"https://image.tmdb.org/t/p/w500" + movie.poster_path} alt={movie.title} className='w-64 rounded-md mb-4' />
            <p><strong>Rating:</strong> {movie.vote_average}</p>
            <p><strong>Votes:</strong> {movie.vote_count}</p>
            <p><strong>First Air:</strong> {movie.first_air_date}</p>
            <p><strong>Language:</strong> {movie.original_language}</p>
            <p><strong>Overview:</strong> {movie.overview}</p>
        </div>
    )
}

export default InfoMovies