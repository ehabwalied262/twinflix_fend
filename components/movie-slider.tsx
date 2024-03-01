import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Button, Card } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { Movie } from '@/app/interfaces';

interface MovieSliderProps {
    popularMovies: Movie[];
    category: string;
  }

const MovieSlider = ({ popularMovies, category }: MovieSliderProps) => {
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
            {/* Your movie card component */}
            <Card key={movie.id} hoverable className="w-48 mx-2 bg-transparent  text-gray border-0 transform transition duration-500 hover:scale-90">
            <div className="flex flex-col items-center">
                <img alt="movie poster" src={movie.poster} className="w-32 h-48 object-cover rounded-md hover:opacity-90" />
                <div className="p-4 text-center">
                <h3 className="font-medium">{movie.title}</h3>
                <p>{movie.year}</p>
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
