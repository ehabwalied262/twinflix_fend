'use client'

import React from 'react';
import { useStore } from '../store';
import SideBar from '@/components/Sidebar';
import Feed from './feed/page';
import UserMatches from './matches/page';
import UserLibrary from './library/page';
import UserFriends from './friends/page';
import Archive from './archive/page';

const Home = () => {
  const selectedKey = useStore((state) => state.sidebarSelectedKey);

  switch (selectedKey) {
    case 'feed':
      return <Feed />;
    case 'archive':
      return <Archive />;
    case 'library':
      return <UserLibrary />;
    case 'matches':
      return <UserMatches />;
    case 'friends':
      return <UserFriends />;
    default:
      return <div> <SideBar /></div>;
  }
};

export default Home;