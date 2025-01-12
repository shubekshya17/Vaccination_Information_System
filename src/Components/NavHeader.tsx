import React from "react";
import { Menu } from "antd";
import { MenuItems } from "./MenuItems";

const NavHeader: React.FC = () => {
  return (
    <div
      style={{
        position: "sticky",
        top: 0,
        zIndex: 1,
        width: "100%",
        display: "flex",
        alignItems: "center",
        padding: "20px 0px",
        height: "20px",
      }}
    >
      <div className="demo-logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={["1"]}
        items={MenuItems.map((item) => ({
          key: item.key,
          label: item.label,
        }))}
        style={{ flex: 1, minWidth: 0, padding: "0px 10px" }}
      />
    </div>
  );
};
export default NavHeader;
