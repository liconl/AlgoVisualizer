import React from "react";
import { Button } from "antd";
import { PlayCircleOutlined } from "@ant-design/icons";

const StartButton = ({ onClick }) => {
  return (
    <div style={{ marginTop: 8 }}>
      <Button
        type="primary"
        style={{
          width: 130,
          background: "#63659c",
          borderColor: "white",
          fontWeight: "bold",
        }}
        icon={<PlayCircleOutlined />}
        onClick={onClick}
      >
        Start
      </Button>
    </div>
  );
};

export default StartButton;
