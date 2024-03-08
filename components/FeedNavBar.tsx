import React from 'react';
import { Input, Select } from 'antd';
import { MessageFilled, BellFilled, SearchOutlined } from '@ant-design/icons';
import PostForm from './post-form';
const { Option } = Select;

const FeedNavBar: React.FC = () => {

  return (
    <div className="flex p-4 w-full mb-6 justify-between items-center">

      <div className="flex items-center">
        <Select
          className='mr-4 w-full'
          defaultValue="All"
          style={{ flex: 4 }}
          variant="filled"


        >
          <Option value="All">All</Option>
          <Option value="Reviews">Reviews</Option>
          <Option value="Memes">Memes</Option>
          <Option value="Recommendations">Recommendations</Option>
          <Option value="Suggestions">Suggestions</Option>
          <Option value="Other">Other</Option>
        </Select>
      </div>

      <PostForm />


      <div className='flex items-center'>
        <MessageFilled className="text-gray mr-4 hover:cursor-pointer hover:opacity-80" style={{ fontSize: 20 }} />
        <BellFilled className="text-gray mr-4 hover:cursor-pointer hover:opacity-80" style={{ fontSize: 20 }} />
        <Input
          className="mr-2"
          placeholder="Search"
          prefix={<SearchOutlined className="text-gray" />}
        />
      </div>
    </div>
  );
};

export default FeedNavBar;