import { Form, Select, Input, Modal, Button, Upload, FloatButton, FormInstance } from 'antd';
import { useState } from 'react';
import { usePostStore } from '../store';
import { PlusOutlined, PictureFilled  } from '@ant-design/icons';
import AddTag from './Add-Tags';
import axios, { AxiosError, AxiosResponse } from 'axios';
import { ENDPOINTS } from '../app/apiEndpoints'; // Import the API endpoint URLs
import { Post } from '@/interfaces';

const { Option } = Select;

const PostForm = () => {
  const [form] = Form.useForm();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const addPost = usePostStore((state) => state.addPost);

  const handleOk = () => {
    form
      .validateFields()
      .then((values) => {
        addPost(values.type, values.content, values.images, values.tags);
        form.resetFields();
        setIsModalVisible(false);
        console.log('Post Data:', values); // Logging the post data object
        sendPostToDatabase
      })
      .catch((errorInfo) => {
        console.log('Validation failed:', errorInfo);
      });
  };

  const handleCancel = () => {
    form.resetFields();
    setIsModalVisible(false);
  };

  const sendPostToDatabase = async (postData: Post, form: FormInstance) => {
    try {
      const response: AxiosResponse = await axios.post(ENDPOINTS.ADD_POSTS, postData);
      if (response.status === 200) {
        console.log('Post successfully added to the database:', response.data);
        form.resetFields(); // Reset form fields upon successful database submission
        return response.data;
      } else {
        console.error('Failed to add post to the database');
      }
    } catch (axiosError) {
      const error = axiosError as AxiosError;
      if (error.response) {
        console.error('Error response:', error.response.data);
      } else if (error.request) {
        console.error('No response received:', error.request);
      } else {
        console.error('Error:', error.message);
      }
    }
  };

  return (
    <div>
      <FloatButton.Group
      trigger="click"
      type="primary"
      style={{ right: 24 }}
      icon={<PlusOutlined />}
    >
      <FloatButton />
      <FloatButton icon={<PlusOutlined />} onClick={() => setIsModalVisible(true)} tooltip={<div>New Post</div>}  />
    </FloatButton.Group>
    
      <Modal
        title="Write a Post"
        open={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        okText="Publish"
      >
        <Form form={form} layout="vertical">
          <Form.Item name="type" label="Select Post Type" rules={[{ required: true, message: 'Please select a post type' }]}>
            <Select>
              <Option value="Review">Review</Option>
              <Option value="Meme">Meme</Option>
              <Option value="Recommendation">Recommendation</Option>
              <Option value="Suggestion">Suggestion</Option>
              <Option value="Other">Other</Option>
            </Select>
          </Form.Item>
          <Form.Item name="content" label="Write your post" rules={[{ required: true, message: 'Please write your post' }]}>
            <Input.TextArea autoSize={{ minRows: 3, maxRows: 6 }} />
          </Form.Item>
          <div className='my-6'>
            <AddTag initialTags={["Movies", "Shows"]} />
          </div>
          <Form.Item name="images" label="Upload Images">
            <Upload name="images" action="/" listType="picture">
              <Button><PictureFilled /></Button>
            </Upload>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default PostForm;