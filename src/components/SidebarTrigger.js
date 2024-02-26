import React from "react";
import { MenuOutlined } from "@ant-design/icons";
import styles from "./SidebarTrigger.module.css";
const SidebarTrigger = () => {
  return (
    <div className={`${styles.trigger}`}>
      <MenuOutlined />
    </div>
  );
};

export default SidebarTrigger;
