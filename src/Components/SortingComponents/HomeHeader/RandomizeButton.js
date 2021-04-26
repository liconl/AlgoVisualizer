import React from "react";
import { Button } from "antd";
import { RedoOutlined } from "@ant-design/icons";

const RandomizeButton = ({ onClick }) => {
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
        icon={<RedoOutlined />}
        onClick={onClick}
      >
        Randomize
      </Button>
    </div>
  );
};

export default RandomizeButton;
