import React from "react";
import { Sidebar, Topbar } from "../../Components";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <Topbar />
      <div className="container">
        <Sidebar />
        <div className="others">Other page</div>
      </div>
    </div>
  );
};

export default Home;
