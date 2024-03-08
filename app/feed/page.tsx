'use client'

import SideBar from '@/components/Sidebar';
import React from 'react';
import { useStore } from '../../store';
import PostsList from '@/components/posts-list';
import FeedNavBar from '@/components/FeedNavBar';

const Feed: React.FC = () => {
    const sidebarSelectedKey = useStore((state) => state.sidebarSelectedKey);

    return (
        <div className="flex">
            <SideBar />
            <div className="w-full mx-6">
                <FeedNavBar />
                <PostsList />
            </div>
        </div>
    );
};

export default Feed;