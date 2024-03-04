'use client'
import { Menu, Avatar, Button } from 'antd';
import { HomeOutlined, ProfileOutlined, TeamOutlined, HeartOutlined, SettingOutlined } from '@ant-design/icons';

const SideBar = () => {
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
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['home']} className="pt-4 bg-transparent border-0 ">
                        <Menu.Item key="home" icon={<HomeOutlined />}>Home</Menu.Item>
                        <Menu.Item key="library" icon={<ProfileOutlined />}>Library</Menu.Item>
                        <Menu.Item key="friends" icon={<TeamOutlined />}>Friends</Menu.Item>
                        <Menu.Item key="matches" icon={<HeartOutlined />}>Matches</Menu.Item>
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
        <div className="absolute right-0 top-16 bottom-0 w-0.5 bg-gray"></div>
        </div>
    );
}

export default SideBar;
