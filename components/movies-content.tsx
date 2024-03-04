'use client'

import React, { useEffect, useState } from 'react';
import { ENDPOINTS } from './../app/apiEndpoints';
import MovieSlider from './movie-slider';
import axios from 'axios';
import { Movie } from '@/interfaces';
import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';

interface ApiResponse {
  popularMovies: Movie[];
  topRatedMovies: Movie[];
}

const MoviesContent: React.FC = () => {
  const [movies, setMovies] = useState<ApiResponse>({ popularMovies: [], topRatedMovies: [] });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(ENDPOINTS.GET_MOVIES);
        setMovies(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching movies:', error);
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div>
      {loading ? (
      <div className='h-screen flex items-center justify-center flex-col'>
      <Spin indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />} />
      Loading...</div>
      ) : (
        <>
          <MovieSlider popularMovies={movies.popularMovies} category="Popular Movies" />
          <MovieSlider popularMovies={movies.topRatedMovies} category="Top Rated Movies" />
        </>
      )}
    </div>
  );
};

export default MoviesContent;