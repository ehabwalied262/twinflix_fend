'use client'

import SideBar from '@/components/Sidebar';
import React from 'react';
import { useStore } from '../../store';

const Feed: React.FC = () => {
    const sidebarSelectedKey = useStore((state) => state.sidebarSelectedKey);

    return (
        <div className="flex">
            <SideBar />
            <div className="pl-64 w-full">
                {sidebarSelectedKey === 'feed' && <div>Feed Page Content</div>}
            </div>
        </div>
    );
};

export default Feed;