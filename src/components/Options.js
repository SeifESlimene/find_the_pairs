import React, { useState } from "react";
import { Form, Select, Button, Typography } from "antd";
const { Option } = Select;
const { Title } = Typography;

function Options() {
  const [pairs, setPairs] = useState(10);
  const handleChange = (value) => {
    setPairs(value);
  };
  return (
    <div>
      <Title level={5}>Options</Title>
      <Form>
        <Form.Item label="Select">
          <Select
            defaultValue="10"
            style={{ width: 120 }}
            onChange={handleChange}
          >
            <Option value="10">10 Pairs</Option>
            <Option value="12">12 Pairs</Option>
            <Option value="15">15 Pairs</Option>
          </Select>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default Options;
