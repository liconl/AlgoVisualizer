import React from "react";
import { Menu, Dropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";

const AlgorithmDropDown = ({
  currentAlgorithm,
  algorithms,
  onAlgorithmChange,
}) => {
  const width = 170;

  const menu = (
    <Menu style={{ width: width }}>
      {algorithms.map(function (algorithm, idx) {
        return (
          <Menu.Item key={idx} onClick={() => onAlgorithmChange(algorithm)}>
            {algorithm}
          </Menu.Item>
        );
      })}
    </Menu>
  );

  return (
    <Dropdown overlay={menu} trigger={["click"]}>
      <div
        style={{
          height: 32,
          marginTop: 8,
          borderRadius: "3%",
          width: width,
          padding: 10,
          fontWeight: "bold",
          borderWidth: "1em",
          borderColor: "white",
          background: "#df2820",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          cursor: "pointer",
        }}
      >
        {currentAlgorithm} <DownOutlined />
      </div>
    </Dropdown>
  );
};

export default AlgorithmDropDown;
