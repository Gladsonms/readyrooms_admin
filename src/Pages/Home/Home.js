import React from "react";
import { AdminDashboard } from "..";
import { Sidebar, Topbar } from "../../Components";

import "./Home.css";

const Home = () => {
  return (
    <div>
      <Topbar />
      <div className="container">
        <Sidebar />
        <AdminDashboard />
      </div>
    </div>
  );
};

export default Home;
