'use client'

import NavBar from '@/components/Navbar';
import SideBar from '@/components/Sidebar';
import AnimeContent from '@/components/anime-content';
import MoviesContent from '@/components/movies-content';
import ShowsContent from '@/components/shows-content';
import React, { useState } from 'react';

const Home = () => {
    const [selectedKey, setSelectedKey] = useState('movies');

    const renderContent = () => {
      switch (selectedKey) {
        case 'movies':
          return <MoviesContent />
        case 'tvShows':
          return <ShowsContent />
        case 'anime':
          return <AnimeContent />;
        default:
          return null;
      }
    };
  return (
    <div className="flex">
      <SideBar />
      <div className="pl-64 w-full">
      <NavBar setSelectedKey={setSelectedKey} />
        {/* Add your main content here */}
        <div className="content">
            {renderContent()}
        </div>
      </div>
    </div>
  );
}

export default Home;
