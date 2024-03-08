import {Divider, Button, Avatar } from 'antd';

import { Badge, Space } from 'antd';
import {
  DownloadOutlined,
  EllipsisOutlined,
  HeartOutlined,
  LikeOutlined,
  RetweetOutlined,
  CommentOutlined,
  StarOutlined,
  ShareAltOutlined,
  WarningOutlined,
  MailOutlined,
  MobileOutlined,
} from '@ant-design/icons';
import {  Menu, Dropdown, Tooltip } from 'antd';
import { usePostStore, useStore } from '../store';

import Image from 'next/image';

const PostsList = () => {
  const { user } = useStore(); // Fetch the user information from the Zustand store
  const posts = usePostStore((state) => state.posts);

  return (
    <div className="grid grid-cols-1">
      {posts.map((post) => (
         <Space direction="vertical" size="middle" style={{ width: '80%', backgroundColor: "#333", marginBottom: "12px", borderRadius: "12px"}}>
         <Badge.Ribbon text={post.type}>
         <div className="post bg-white p-4 rounded-lg shadow-md">
        <div className="post-header flex items-center mb-4 p-2">
          <Avatar style={{ backgroundColor: '#FFF', color: "#000"}}> {user.profile_picture_url} </Avatar>
          <div className="ml-2">
            <h3 className="text-lg font-semibold">@{user.username}</h3>
            {/* <p className="text-sm text-gray-600">{post.date}</p> */}
          </div>

        </div>
        <div className="post-content mb-4">
          <p>{post.content}</p>
        </div>
        {post.image && (
          <div className="post-image mb-4">
            <Image src={post.image} alt="Uploaded Image" className="w-full" />
          </div>
        )}

        <div>{post.tags}</div>
        <Divider className='bg-gray'/>
        <div className="post-actions flex justify-between mt-4">
        <Space.Compact block>
      <Tooltip title="Like" style={{color: "#FFF", backgroundColor: "#000"}}>
        <Button icon={<LikeOutlined />} />
      </Tooltip>
      <Tooltip title="Retweet">
        <Button icon={<RetweetOutlined />} />
      </Tooltip>
      <Tooltip title="Comment">
        <Button icon={<CommentOutlined />} />
      </Tooltip>
      <Tooltip title="Star">
        <Button icon={<StarOutlined />} />
      </Tooltip>
      <Tooltip title="Heart">
        <Button icon={<HeartOutlined />} />
      </Tooltip>
      <Tooltip title="Share">
        <Button icon={<ShareAltOutlined />} />
      </Tooltip>
      <Tooltip title="Download">
        <Button icon={<DownloadOutlined />} />
      </Tooltip>
      <Dropdown
        placement="bottomRight"
        overlay={
          <Menu
            items={[
              {
                key: '1',
                label: 'Report',
                icon: <WarningOutlined />,
              },
              {
                key: '2',
                label: 'Mail',
                icon: <MailOutlined />,
              },
              {
                key: '3',
                label: 'Mobile',
                icon: <MobileOutlined />,
              },
            ]}
          />
        }
        trigger={['click']}
      >
        <Button icon={<EllipsisOutlined />} />
      </Dropdown>
    </Space.Compact>
        </div>
      </div>
   </Badge.Ribbon>
     </Space>
      
      ))}
    </div>
  );
};

export default PostsList;
