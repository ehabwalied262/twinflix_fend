'use client'

import React, { useEffect, useState } from 'react';
import { ENDPOINTS } from './../app/apiEndpoints';
import MovieSlider from './movie-slider';
import axios from 'axios';
import { Show } from '@/app/interfaces';
import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';

interface ApiResponse {
  popularShows: Show[];
  topRatedShows: Show[];
}

const ShowsContent: React.FC = () => {
  const [shows, setShows] = useState<ApiResponse>({ popularShows: [], topRatedShows: [] });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchShows = async () => {
      try {
        const response = await axios.get(ENDPOINTS.GET_SHOWS);
        setShows(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching shows:', error);
        setLoading(false);
      }
    };

    fetchShows();
  }, []);

  return (
    <div>
      {loading ? (
       <div className='h-screen flex items-center justify-center flex-col'>
       <Spin indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />} />
       Loading...</div>
      ) : (
        <>
          <MovieSlider popularMovies={shows.popularShows} category="Popular Shows"/>
          <MovieSlider popularMovies={shows.topRatedShows} category="Top Rated Shows"/>
        </>
      )}
    </div>
  );
};

export default ShowsContent;