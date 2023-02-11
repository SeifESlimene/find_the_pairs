import React from "react";
import Score from "./Score";
import Tries from "./Tries";
import { Typography } from "antd";
const { Title } = Typography;

function Scorecard() {
  return (
    <div>
      <Title level={5}>Score</Title>
      <Score />
      <Tries />
    </div>
  );
}

export default Scorecard;
