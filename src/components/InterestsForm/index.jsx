import React, { useEffect } from "react";
import { Form, Input, Select, Button } from "antd";
import useFormsData from "../../hooks/useFormsData";
import "./style.css";

const InterestsForm = () => {
  const [form] = Form.useForm();
  const { submit, submitFormResponse } = useFormsData();
  const { isLoading, isError, isSuccess } = submitFormResponse;

  useEffect(() => {
    if (isSuccess) {
      form.resetFields();
    }
  }, [isSuccess]);

  const generateNumbers = (range) => {
    const numbers = [];

    for (let i = 0; i <= range; i++) {
      numbers.push(
        <Select.Option key={i} value={i}>
          {i}
        </Select.Option>
      );
    }

    return numbers;
  };

  const onSubmit = () => {
    submit({
      formName: "InterestsForm",
      date: new Date(),
      formData: form.getFieldsValue(),
    });
  };

  return (
    <div className="interests-form">
      <Form form={form} layout="vertical" onFinish={onSubmit}>
        <Form.Item
          label="Favorite Sport"
          name="sport"
          rules={[
            { required: true, message: "Please enter your favorite sport!" },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Favorite Book"
          name="book"
          rules={[
            { required: true, message: "Please enter your favorite book!" },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Favorite Hobby"
          name="hobby"
          rules={[
            { required: true, message: "Please enter your favorite hobby!" },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Favorite Number (0-10)"
          name="number"
          style={{ width: "20%" }}
          rules={[
            { required: true, message: "Please select your favorite number!" },
          ]}
        >
          <Select>{generateNumbers(10)}</Select>
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

export default InterestsForm;
