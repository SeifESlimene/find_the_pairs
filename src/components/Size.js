import React from "react";
import { Form, Select } from "antd";
const { Option } = Select;

function Size() {
  return (
    <div>
      <Form>
        <Form.Item label="Select">
          <Select defaultValue="lucy" style={{ width: 120 }}>
            <Option value="jack">Jack</Option>
            <Option value="lucy">Lucy</Option>
            <Option value="disabled" disabled>
              Disabled
            </Option>
            <Option value="Yiminghe">yiminghe</Option>
          </Select>
        </Form.Item>
      </Form>
    </div>
  );
}

export default Size;
