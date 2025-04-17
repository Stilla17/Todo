import axios from 'axios'
import React, { useEffect } from 'react'

const Movies = () => {
  const apiMovies = import.meta.env.VITE_MOVIE_TRENDING
  const apiKey = import.meta.env.VITE_API_KEY

  useEffect(() => {
    axios.get(apiMovies + apiKey).then((res) => {
      console.log(res);
    })
  }, [])

  return (
    <div>



    </div>
  )
}

export default Movies