import React from "react";
import { Typography } from "antd";
const { Title, Text } = Typography;

function Score() {
  return (
    <div>
      <Title level={2}>
        <Text type="success">2</Text>/10
      </Title>
    </div>
  );
}

export default Score;
