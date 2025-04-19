import axios from 'axios';
import React, { useEffect, useState } from 'react';
import MoviesCard from './../Components/MoviesCard/MoviesCard.jsx';
import PaginationRounded from '../Components/Pagination/Pagination.jsx';

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

      <div className="grid grid-cols-3 gap-6 mb-10">
        {movies.map((movie) => (
          <MoviesCard key={movie.id} show={movie} />
        ))}
      </div>

      
      <PaginationRounded
        page={page}
        count={totalPages}
        onChange={(value) => setPage(value)}
      />

    </div>
  );
};

export default Movies;