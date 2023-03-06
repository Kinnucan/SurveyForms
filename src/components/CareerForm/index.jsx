import React, { useState, useEffect } from "react";
import {
  Form,
  Input,
  Select,
  Slider,
  InputNumber,
  Checkbox,
  Row,
  Col,
  Rate,
  Button,
} from "antd";
import useSubmitForm from "../../hooks/useSubmitForm";
import "./style.css";

const CareerForm = () => {
  const [form] = Form.useForm();
  const { submit, submitFormResponse } = useSubmitForm();
  const { isLoading, isSuccess } = submitFormResponse;

  const [yearsOfExp, setyearsOfExp] = useState(0);
  const onChange = (newValue) => {
    setyearsOfExp(newValue);
  };

  useEffect(() => {
    if (isSuccess) {
      form.resetFields();
    }
  }, [isSuccess, form]);

  const generateSalaries = (range) => {
    const salaries = [];

    for (let i = 0; i <= range; i++) {
      salaries.push(
        <Select.Option key={i} value={`$${i * 10000}+`}>
          ${i * 10000}+
        </Select.Option>
      );
    }

    return salaries;
  };

  const onSubmit = () => {
    const formValues = form.getFieldsValue();

    for (const [key, value] of Object.entries(formValues)) {
      if (typeof value !== "string" && value !== undefined)
        formValues[key] = String(value);
      if (Array.isArray(value)) {
        formValues[key] = value.join(", ");
      }
    }
    formValues["YOE"] = yearsOfExp;

    submit({
      formName: "CareerForm",
      date: new Date(),
      formData: formValues,
    });
  };

  return (
    <div className="career-form">
      <Form form={form} layout="vertical" onFinish={onSubmit}>
        <Form.Item
          label="Job Title"
          name="job"
          style={{ width: "60%" }}
          rules={[
            { required: true, message: "Please provide your job title." },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item label="Years of Experience" name="YOE">
          <Row>
            <Col span={11}>
              <Slider
                min={0}
                max={20}
                onChange={onChange}
                value={typeof yearsOfExp === "number" ? yearsOfExp : 0}
              />
            </Col>
            <Col span={4}>
              <InputNumber
                min={0}
                max={20}
                style={{
                  margin: "0 16px",
                }}
                value={yearsOfExp}
                onChange={onChange}
              />
            </Col>
          </Row>
        </Form.Item>
        <Form.Item label="Salary" name="salary" style={{ width: "20%" }}>
          <Select>{generateSalaries(10)}</Select>
        </Form.Item>
        <Form.Item label="Job Satisfaction" name="satisfaction">
          <Checkbox.Group>
            <Row>
              <Col span={8}>
                <Checkbox
                  value="Very Unsatisified"
                  style={{ lineHeight: "32px" }}
                >
                  Very Unsatisified
                </Checkbox>
              </Col>
              <Col span={8}>
                <Checkbox value="Unsatisfied" style={{ lineHeight: "32px" }}>
                  Unsatisfied
                </Checkbox>
              </Col>
              <Col span={8}>
                <Checkbox value="Neutral" style={{ lineHeight: "32px" }}>
                  Neutral
                </Checkbox>
              </Col>
              <Col span={8}>
                <Checkbox value="Satisfied" style={{ lineHeight: "32px" }}>
                  Satisfied
                </Checkbox>
              </Col>
              <Col span={8}>
                <Checkbox value="Very Satisfied" style={{ lineHeight: "32px" }}>
                  Very Satisfied
                </Checkbox>
              </Col>
            </Row>
          </Checkbox.Group>
        </Form.Item>
        <Form.Item label="Employer Rating" name="rating">
          <Rate />
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

export default CareerForm;
