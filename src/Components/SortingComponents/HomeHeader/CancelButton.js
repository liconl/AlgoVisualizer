import React from "react";
import { Button } from "antd";
import { StopOutlined } from "@ant-design/icons";

const CancelButton = () => {
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
        icon={<StopOutlined />}
        onClick={() => {
          window.location.reload();
        }}
      >
        Cancel
      </Button>
    </div>
  );
};

export default CancelButton;
