import axios from 'axios';
import React, { useEffect, useState } from 'react';
import MoviesCard from './../Components/MoviesCard/MoviesCard.jsx';
import { Link, Outlet } from 'react-router';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const apiMovies = import.meta.env.VITE_MOVIE_TRENDING;
  const apiKey = import.meta.env.VITE_API_KEY;


  const fetchMovies = async (currentPage) => {
    try {
      const response = await axios.get(`${apiMovies}${apiKey}&page=${currentPage}`);
      setMovies(response.data.results);
      setTotalPages(response.data.total_pages);
    } catch (error) {
      console.error('Ошибка загрузки фильмов:', error);
    }
  };

  useEffect(() => {
    fetchMovies(page);
  }, [page]);

  const handleNextPage = () => {
    if (page < totalPages) setPage(page + 1);
  };

  const handlePrevPage = () => {
    if (page > 1) setPage(page - 1);
  };

  return (
    <div className="min-h-screen  p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Trending Movies</h1>
    
      {/* <div className='grid grid-cols-4 gap-6 mb-10'>
       <div className="w-52">
        <div className="skeleton h-[300px] w-full"></div>
         </div>
      </div> */}

      <div className="grid grid-cols-4 gap-6 mb-10">
        {movies.map((movie) => (
          <Link key={movie.id} state={{movie : movie}} to={`/movies/infomovies/:${movie.id}`}>
            {
              movie ? <MoviesCard show={movie} /> : <div className="skeleton h-[300px] w-full"></div>

            }
          </Link>
        ))}
      </div>

      <div className="flex justify-center items-center gap-4 mt-8">
        <button
          onClick={handlePrevPage}
          disabled={page === 1}
          className={`px-4 py-2 rounded-lg font-medium transition 
                ${page === 1
              ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
              : 'bg-primary text-white hover:bg-primary/80'}`}
        >
          ← Prev
        </button>

        <span className="text-base font-semibold text-neutral">
          Page <span className="text-accent">{page}</span> / {totalPages}
        </span>

        <button
          onClick={handleNextPage}
          disabled={page === totalPages}
          className={`px-4 py-2 rounded-lg font-medium transition 
                ${page === totalPages
              ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
              : 'bg-primary text-white hover:bg-primary/80'}`}
        >
          Next →
        </button>
      </div>

      <Outlet />
    </div>
  );
};

export default Movies;