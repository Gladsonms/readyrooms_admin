import React from "react";
import "./Sidebar.css";
import HouseIcon from "@mui/icons-material/House";
import GroupIcon from "@mui/icons-material/Group";
import HotelIcon from "@mui/icons-material/Hotel";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Home</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <HouseIcon className="sidebarIcons" />
              Home
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">User Mangment</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <HouseIcon className="sidebarIcons" />
              Owners
            </li>
            <li className="sidebarListItem">
              <GroupIcon className="sidebarIcons" />
              Costumers
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">All Hotels</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <HouseIcon className="sidebarIcons" />
              All Hotels
            </li>

            <li className="sidebarListItem">
              <TrendingUpIcon className="sidebarIcons" />
              All Sales
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">All Sales</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <HouseIcon className="sidebarIcons" />
              Monthly
            </li>
            <li className="sidebarListItem">
              <GroupIcon className="sidebarIcons" />
              Yearly
            </li>
            <li className="sidebarListItem">
              <HotelIcon className="sidebarIcons" />
              Daily
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Profile </h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <HouseIcon className="sidebarIcons" />
              Admin Info
            </li>
            <li className="sidebarListItem">
              <GroupIcon className="sidebarIcons" />
              Logout
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
