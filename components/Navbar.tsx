'use client'

import { Menu, Input } from 'antd';
import { MessageFilled , BellFilled, SearchOutlined } from '@ant-design/icons';

type NavBarProps = {
    setSelectedKey: (key: string) => void; // Assuming setSelectedKey is a function that takes a string
  };

const NavBar: React.FC<NavBarProps> = ({ setSelectedKey }) => {
    return (
    <div className="flex items-center justify-between px-4 py-2 bg-gray-200 w-full mb-6">
        <div className="flex items-center">
            <Menu 
                theme="dark" 
                mode="horizontal" 
                defaultSelectedKeys={['movies']} 
                className="bg-transparent rounded"
                onClick={(e) => setSelectedKey(e.key)}
                >
                <Menu.Item key="movies">Movies</Menu.Item>
                <Menu.Item key="tvShows">TV Shows</Menu.Item>
                <Menu.Item key="anime">Anime</Menu.Item>
            </Menu>
        </div>

        <div className="flex items-center">
            <MessageFilled  className="text-gray mr-6 hover:cursor-pointer hover:opacity-80" style={{fontSize: 20}} />
            <BellFilled  className="text-gray mr-6 hover:cursor-pointer hover:opacity-80" style={{fontSize: 20}} />
            <Input
                className="mr-2"
                placeholder="Search"
                prefix={<SearchOutlined className="text-gray-600" />}
            />
        </div>
    </div>
  );
}

export default NavBar;
