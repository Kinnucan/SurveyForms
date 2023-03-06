import React, { useEffect } from "react";
import { Form, Input, Button } from "antd";
import useFormsData from "../../hooks/useFormsData";
import "./style.css";

const UserForm = () => {
  const [form] = Form.useForm();
  const { submit, submitFormResponse } = useFormsData();
  const { isLoading, isSuccess } = submitFormResponse;

  useEffect(() => {
    if (isSuccess) {
      form.resetFields();
    }
  }, [isSuccess, form]);

  const onSubmit = () => {
    submit({
      formName: "InterestsForm",
      date: new Date(),
      formData: form.getFieldsValue(),
    });
  };

  return (
    <div className="user-form">
      <Form form={form} layout="vertical" onFinish={onSubmit}>
        <Form.Item
          label="First Name"
          name="firstName"
          rules={[
            { required: true, message: "Please provide your first name!" },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Last Name"
          name="lastName"
          rules={[
            { required: true, message: "Please provide your last name!" },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item label="Preferred Name" name="preferredName">
          <Input />
        </Form.Item>
        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, message: "Please provide your email!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" loading={isLoading}>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default UserForm;
