'use client'
import React, { useState } from "react";
import { Form, Input, Button } from "antd";
import { UserOutlined, LockOutlined, MailOutlined } from "@ant-design/icons";

import { ENDPOINTS } from '../../apiEndpoints'; // Import the API endpoint URLs
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import axios, { AxiosError, AxiosResponse } from "axios";
import { Spin } from 'antd';


const LoginPage = () => {

  type FormValues = {
    username?: string;
    password?: string;
    message?: string;
  };

  const [isLogin, setIsLogin] = useState(false);
  const [errors, setErrors] = useState<any>({});
  const [loading, setLoading] = useState(false); // State to handle loading state
  const router = useRouter();

  const handleFormSubmit = async (values: FormValues) => {
    setLoading(true); // Start loading before the API call
    try {
      const response: AxiosResponse = await axios.post(ENDPOINTS.LOGIN, values);
      console.log("API Response:", response.data);
      // Stop loading and redirect after a successful API response
      setTimeout(() => {
        setLoading(false);
        router.push("/home");
      }, 1000); // Redirect after 1 second
    } catch (error) {
      setLoading(false); // Stop loading in case of an error
      const axiosError = error as AxiosError;
      if (axiosError.response) {
        console.error("Error from backend:", axiosError.response.data);
        setErrors(axiosError.response.data);
      } else {
        console.error("Error with no response data:", error);
      }
    }
  };

  
  return (
    <Spin spinning={loading} tip="Loading...">
    <div className="min-h-screen flex items-center justify-end pr-5 pt-5 bg-background">
  <div className="max-w-md w-full flex items-center justify-center">
    <div className="bg-white p-8 rounded-lg shadow-xl" style={{ padding: "2rem", textAlign: "center" }}>
      <Image
        src="/splash.png"
        width={320}
        height={320}
        alt="Splash"
        priority
        className="mb-12"
      />
        <Form 
          onFinish={handleFormSubmit}
        >
          <Form.Item
            name="username"
            rules={[{ required: true, message: "Username can't be empty !!" }]}
            validateStatus={errors.username && 'error'}
            help={errors.username}
          >
            <Input
              placeholder="Username"
              prefix={<UserOutlined style={{ color: "#9b9b9b" }} />}
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: "Password can't be empty !" }]}
            validateStatus={errors.password && 'error'}
            help={errors.password}
          >
            <Input.Password
              placeholder="Password"
              prefix={<LockOutlined style={{ color: "#9b9b9b" }} />}
            />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" style={{ backgroundColor: "#0077b6", marginTop: "6px" }} block>
              Login
            </Button>
          </Form.Item>
        </Form>
      <p className="text-center text-gray-600 cursor-pointer" onClick={() => setIsLogin(!isLogin)}>
        {isLogin ? <a onClick={() => router.push('/auth/register')}>Don't have an account yet? <u>Register</u></a> : <a onClick={() => router.push('/auth/login')}>Already a user? <u>Login</u></a>}
      </p>
    </div>
  </div>
</div>
  </Spin>
  );
};

export default LoginPage;