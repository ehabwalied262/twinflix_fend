'use client'

import React, { useEffect, useState } from 'react';
import { ENDPOINTS } from './../app/apiEndpoints';
import MovieSlider from './movie-slider';
import axios from 'axios';
import { Movie } from '@/app/interfaces';

interface ApiResponse {
  popularMovies: Movie[];
  topRatedMovies: Movie[];
}

const MoviesContent = () => {
  const [movies, setMovies] = useState<ApiResponse>({ popularMovies: [], topRatedMovies: [] });

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(ENDPOINTS.GET_MOVIES);
        setMovies(response.data); // Now it matches the structure of the API response
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    fetchMovies();
  }, []); // Empty dependency array ensures that this effect runs only once when the component mounts

  return (
    <div>
      {/* Ensure you're passing the popularMovies array from the state */}
      <MovieSlider popularMovies={movies.popularMovies} category="Popular Movies"/>
      <MovieSlider popularMovies={movies.topRatedMovies} category="Top Rated Movies"/>
    </div>
  );
};

export default MoviesContent;
