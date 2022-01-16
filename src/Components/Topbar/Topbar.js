import React from "react";
import "./topbar.css";
import { AccountCircleOutlined } from "@mui/icons-material";

const Topbar = () => {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">Ready Rooms</span>
        </div>
        <div className="topRight">
          <div className="topbarIconsContainer">
            <AccountCircleOutlined />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
