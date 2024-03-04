'use client'

import React from 'react';
import NavBar from '@/components/Navbar';
import SideBar from '@/components/Sidebar';
import AnimeContent from '@/components/anime-content';
import MoviesContent from '@/components/movies-content';
import ShowsContent from '@/components/shows-content';
import { useStore } from '../../store';

const Archive: React.FC = () => {
  const selectedKey = useStore((state: { selectedKey: string }) => state.selectedKey);

  const renderContent = () => {
    switch (selectedKey) {
      case 'movies':
        return <MoviesContent />
      case 'shows':
        return <ShowsContent />
      case 'anime':
        return <AnimeContent />
      default:
        return null;
    }
  };

  return (
    <div className="flex">
      <SideBar />
      <div className="pl-64 w-full">
        <NavBar />
        {/* Add your main content here */}
        <div className="content">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default Archive;