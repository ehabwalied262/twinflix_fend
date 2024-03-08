'use client'

// import { Menu, Avatar } from 'antd';
// import { AppstoreAddOutlined, ReadOutlined, TeamOutlined, FireOutlined, SettingOutlined, ProductOutlined } from '@ant-design/icons';
// import { useStore } from '../store';
// import Link from 'next/link';

// const SideBar: React.FC = () => {
//     const { user } = useStore(); // Fetch the user information from the Zustand store

//     const selectedKey = useStore((state) => state.sidebarSelectedKey);
//     const setSelectedKey = useStore((state) => state.setSidebarSelectedKey);

//     const handleMenuSelect = ({ key }: { key: string }) => {
//         setSelectedKey(key);
//     };

//     const getBackgroundColor = (key: string) => {
//         return selectedKey === key ? '#00406c' : 'transparent';
//     };

//     return (
//         <div className="fixed top-0 left-0 h-full w-64 pr-6 bg-gray-800 text-white z-20 flex flex-col justify-between">
//             {/* Top Section */}
//             <div>
//                 {/* Logo and Thin Line */}
//                 <div className="flex h-16">
//                     <div className="text-2xl font-bold ml-4 pt-4 pl-2">TWINFLIX</div>
//                 </div>
//                 <div className="overflow-y-auto">
//                     {/* Menu Items */}
//                     <Menu theme="dark" mode="inline" selectedKeys={[selectedKey]} className="pt-4 bg-transparent border-0 pl-4">
//                         <Link href='/feed'>
//                             <Menu.Item
//                                 key="feed"
//                                 icon={<ProductOutlined className='pl-4' />}
//                                 style={{ backgroundColor: getBackgroundColor('feed') }}
//                                 onClick={handleMenuSelect}
//                             >
//                                 Feed
//                             </Menu.Item>
//                         </Link>
//                         <Link href='/archive'>
//                             <Menu.Item
//                                 key="archive"
//                                 icon={<AppstoreAddOutlined className='pl-4' />}
//                                 style={{ backgroundColor: getBackgroundColor('archive') }}
//                                 onClick={handleMenuSelect}
//                             >
//                                 Archive
//                             </Menu.Item>
//                         </Link>
//                         <Link href='/library'>
//                             <Menu.Item
//                                 key="library"
//                                 icon={<ReadOutlined className='pl-4' />}
//                                 style={{ backgroundColor: getBackgroundColor('library') }}
//                                 onClick={handleMenuSelect}
//                             >
//                                 Library
//                             </Menu.Item>
//                         </Link>
//                         <Link href='/matches'>
//                             <Menu.Item
//                                 key="matches"
//                                 icon={<FireOutlined className='pl-4' />}
//                                 style={{ backgroundColor: getBackgroundColor('matches') }}
//                                 onClick={handleMenuSelect}
//                             >
//                                 Matches
//                             </Menu.Item>
//                         </Link>
//                         <Link href='/friends'>
//                             <Menu.Item
//                                 key="friends"
//                                 icon={<TeamOutlined className='pl-4' />}
//                                 style={{ backgroundColor: getBackgroundColor('friends') }}
//                                 onClick={handleMenuSelect}
//                             >
//                                 Friends
//                             </Menu.Item>
//                         </Link>
//                     </Menu>
//                 </div>
//             </div>

//             {/* Bottom Section */}
//             <div className="flex flex-col items-center p-4">
//                 <div className="block w-full pl-4 py-2 cursor-pointer text-white hover:text-gray rounded mb-6 ml-0">
//                     <SettingOutlined className="align-middle" />
//                     <span className="ml-2 align-middle">Settings</span>
//                 </div>
//                 <div className="mb-4 cursor-pointer hover:text-gray w-full block ml-6">
//                     <Avatar style={{ backgroundColor: '#FFF', color: "#000"}}> {user.profile_picture_url} </Avatar>
//                     <span className="ml-2">@{user.username}</span> {/* Display the username dynamically */}
//                 </div>
//             </div>

//             {/* Divider */}
//             <div className="absolute right-0 top-16 bottom-0 bg-gray" style={{ width: '1px' }}></div>
//         </div>
//     );
// };

// export default SideBar;

import React, { useState } from 'react';
import { Avatar, Layout, Menu, Tooltip } from 'antd';
import { useStore } from '../store';
import { AppstoreAddOutlined, ReadOutlined, TeamOutlined, FireOutlined, SettingOutlined, ProductOutlined } from '@ant-design/icons';

const { Sider } = Layout;

const SideBar: React.FC = () => {
    const { user } = useStore();
    const selectedKey = useStore((state) => state.sidebarSelectedKey);
    const setSelectedKey = useStore((state) => state.setSidebarSelectedKey);
    const [collapsed, setCollapsed] = useState(false);

    const handleMenuSelect = ({ key }: { key: string }) => {
        setSelectedKey(key);
    };

    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Sider collapsible collapsed={collapsed} onCollapse={setCollapsed} className='fixed top-0 left-0 pr-2 flex flex-col'>
            {/* Your Sidebar Logo */}
            <div className="text-2xl font-bold ml-4 pt-4 pl-2 pb-4">TWINFLIX</div>
            <div className='flex flex-col justify-between'>
                <Menu className="mb-52" theme="dark" mode="inline" selectedKeys={[selectedKey]} style={{backgroundColor: "transparent"}}>
                    <Menu.Item key="feed" icon={<ProductOutlined />} onClick={handleMenuSelect}>
                        Feed
                    </Menu.Item>
                    <Menu.Item key="archive" icon={<AppstoreAddOutlined />} onClick={handleMenuSelect}>
                        Archive
                    </Menu.Item>
                    <Menu.Item key="library" icon={<ReadOutlined />} onClick={handleMenuSelect}>
                        Library
                    </Menu.Item>
                    <Menu.Item key="matches" icon={<FireOutlined />} onClick={handleMenuSelect}>
                        Matches
                    </Menu.Item>
                    <Menu.Item key="friends" icon={<TeamOutlined />} onClick={handleMenuSelect}>
                        Friends
                    </Menu.Item>
            </Menu>
            <div className="flex flex-col items-center">
                <div className="block w-full pl-4 cursor-pointer text-white hover:text-gray rounded mb-6 ml-0">
                {/* Settings */}
            <Tooltip title="settings"> <SettingOutlined className={`align-middle ${collapsed ? 'pl-4' : 'pl-3'}`} /></Tooltip>
            {!collapsed && <span className="ml-2 align-middle text-sm">Settings</span>}
        </div>
            {/* User Avatar */}
        <div className={`flex items-center ${collapsed ? 'pl-2' : 'pr-14'}`}>
                <Tooltip title='view profile'>
                    <Avatar style={{ backgroundColor: '#FFF', color: "#000", cursor: "pointer", }}>
                    {user.profile_picture_url}
                    </Avatar>
                </Tooltip>
                <div className={`cursor-pointer hover:text-gray ${collapsed ? 'hidden' : ''}`}>
                    {!collapsed && <span className='pl-2 text-sm'>@{user.username}</span>}
                </div>
            </div>
            </div>
            </div>
             {/* Divider */}
          <div className="absolute right-0 top-16 bottom-0 ml-2 " style={{ backgroundColor: "#AAABAE", width: '1px' }}></div>
        </Sider>
        </Layout >
    );
};

export default SideBar;