'use client'

import React from 'react';
import { Menu, Input } from 'antd';
import { MessageFilled, BellFilled, SearchOutlined } from '@ant-design/icons';
import { useStore } from '../store';

const NavBar: React.FC = () => {
    const selectedKey = useStore((state: { selectedKey: string }) => state.selectedKey);
    const setSelectedKey = useStore((state: { setSelectedKey: (key: string) => void }) => state.setSelectedKey);

  const getBackgroundColor = (key: string) => {
    return selectedKey === key ? '#00406c' : 'transparent';
  };

  return (
    <div className="flex items-center justify-between px-4 py-2 bg-gray-200 w-full mb-6">
      <div className="flex items-center">
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['movies']}
          className="bg-transparent rounded"
          onClick={(e) => setSelectedKey(e.key.toString())}
        >
          <Menu.Item
            style={{
              borderRadius: '20px',
              backgroundColor: getBackgroundColor('movies')
            }}
            key="movies"
          >
            Movies
          </Menu.Item>
          <Menu.Item
            style={{
              borderRadius: '20px',
              backgroundColor: getBackgroundColor('shows')
            }}
            key="shows"
          >
            TV Shows
          </Menu.Item>
          <Menu.Item
            style={{
              borderRadius: '20px',
              backgroundColor: getBackgroundColor('anime')
            }}
            key="anime"
          >
            Anime
          </Menu.Item>
        </Menu>
      </div>

      <div className="flex items-center">
        <MessageFilled className="text-gray mr-6 hover:cursor-pointer hover:opacity-80" style={{ fontSize: 20 }} />
        <BellFilled className="text-gray mr-6 hover:cursor-pointer hover:opacity-80" style={{ fontSize: 20 }} />
        <Input
          className="mr-2"
          placeholder="Search"
          prefix={<SearchOutlined className="text-gray-600" />}
        />
      </div>
    </div>
  );
};

export default NavBar;