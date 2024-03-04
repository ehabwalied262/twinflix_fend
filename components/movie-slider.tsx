'use client'

import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Card } from 'antd';
import { PlusOutlined, CheckOutlined } from '@ant-design/icons';
import { Movie } from '@/app/interfaces';

interface MovieSliderProps {
    popularMovies: Movie[];
    category: string;
}

const MovieSlider = ({ popularMovies, category }: MovieSliderProps) => {
    const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);

    return (
        <div className="max-w-screen-xl">
            <h2 className="text-xl font-bold mx-6">{category}</h2>
            <Swiper
                spaceBetween={50}
                slidesPerView={6}
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
            >
                {popularMovies.map((movie) => (
                    <SwiperSlide key={movie.id}>
                        <Card
                          hoverable
                          className="w-48 mx-2 bg-transparent py-0 text-gray border-0 hover:opacity-90 transform transition duration-500 hover:scale-95 relative cursor-pointer"
                      
                          onClick={() => setSelectedMovie(selectedMovie === movie ? null : movie)}
                      >
                          <div className="flex flex-col items-center">
                              <img alt="movie poster" src={movie.poster} className="w-32 h-48 object-cover rounded-md" />
                              
                              <div className="pt-2 text-center">
                                  <h3 className="font-medium">{movie.title}</h3>
                                  <p>{movie.year}</p>
                                  
                                  {selectedMovie && selectedMovie === movie ? (
                                              <CheckOutlined className="text-success" style={{ fontSize: 16 }} />
                                          ) : (
                                              <PlusOutlined className="text-white" style={{ fontSize: 16 }} />
                                          )}
                              </div>
                          </div>
                      </Card>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default MovieSlider;