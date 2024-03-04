'use client'
import { Menu, Avatar } from 'antd';
import { AppstoreAddOutlined, ReadOutlined, TeamOutlined, FireOutlined, SettingOutlined, ProductOutlined, } from '@ant-design/icons';
import { useState } from 'react';
import Link from 'next/link';

const SideBar: React.FC = () => {
    const [selectedKey, setSelectedKey] = useState<string>('feed');
    
    const handleMenuSelect = ({ key }: { key: string }) => {
        setSelectedKey(key);
    };

    const getBackgroundColor = (key: string) => {
        return selectedKey === key ? '#00406c' : 'transparent';
    };

    return (
        <div className="fixed top-0 left-0 h-full w-64 pr-6 bg-gray-800 text-white z-20 flex flex-col justify-between">
            {/* Top Section */}
            <div>
                {/* Logo and Thin Line */}
                <div className="flex h-16">
                    <div className="text-2xl font-bold ml-4 pt-4 pl-2">TWINFLIX</div>
                </div>
                <div className="overflow-y-auto">
                    {/* Menu Items */}
                    <Menu theme="dark" mode="inline" selectedKeys={[selectedKey]} className="pt-4 bg-transparent border-0 pl-4">
                    <Link href='/feed'>
                        <Menu.Item
                            key="feed"
                            icon={<ProductOutlined className='pl-4'/>}
                            style={{ backgroundColor: getBackgroundColor('feed') }}
                            onClick={handleMenuSelect}
                        >
                            Feed
                        </Menu.Item>
                        </Link>
                        <Link href='/archive'>
                        <Menu.Item
                            key="archive"
                            icon={<AppstoreAddOutlined className='pl-4'/>}
                            style={{ backgroundColor: getBackgroundColor('archive') }}
                            onClick={handleMenuSelect}
                        >
                            Archive
                        </Menu.Item>
                        </Link>
                       <Link href='/library'>
                       <Menu.Item
                            key="library"
                            icon={<ReadOutlined className='pl-4'/>}
                            style={{ backgroundColor: getBackgroundColor('library') }}
                            onClick={handleMenuSelect}
                        >
                            Library
                        </Menu.Item>
                       </Link>
                        <Link href='/matches'>
                        <Menu.Item
                            key="matches"
                            icon={<FireOutlined className='pl-4'/>}
                            style={{ backgroundColor: getBackgroundColor('matches') }}
                            onClick={handleMenuSelect}
                        >
                            Matches
                        </Menu.Item>
                        </Link>
                        <Link href='/friends'>
                        <Menu.Item
                            key="friends"
                            icon={<TeamOutlined className='pl-4'/>}
                            style={{ backgroundColor: getBackgroundColor('friends') }}
                            onClick={handleMenuSelect}
                        >
                            Friends
                        </Menu.Item>
                        </Link>
                    </Menu>
                </div>
            </div>
            
            {/* Bottom Section */}
            <div className="flex flex-col items-center p-4">
                <div className="block w-full pl-4 py-2 cursor-pointer text-white hover:text-gray rounded mb-6 ml-0">
                    <SettingOutlined className="align-middle" />
                    <span className="ml-2 align-middle">Settings</span>
                </div>
                <div className="mb-4 cursor-pointer hover:text-gray w-full block ml-6">
                    <Avatar style={{ backgroundColor: '#f56a00' }} />
                    <span className="ml-2">Username</span>
                </div>
            </div>

            {/* Divider */}
            <div className="absolute right-0 top-16 bottom-0 bg-gray" style={{width: '1px'}}></div>
        </div>
    );
};

export default SideBar;

