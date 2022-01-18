import React from "react";
import "./featuredInfo.css";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";

const FeaturedInfo = () => {
  return (
    <div className="featuredInfo">
      <div className="featuredIteam">
        <span className="featuredTitle">Revenue</span>
        <div className="featuredMoneyContainer">
          <span className="featutrdMoneyRate">$128912</span>
          <span className="featuredMoneyPeriod">
            12
            <MonetizationOnIcon className="featuredIcon" />
          </span>
        </div>
        <span className="featuredSub">Last 12 Months </span>
      </div>
      <div className="featuredIteam">
        <span className="featuredTitle">Revenue</span>
        <div className="featuredMoneyContainer">
          <span className="featutrdMoneyRate">$128912</span>
          <span className="featuredMoneyPeriod">
            12
            <MonetizationOnIcon className="featuredIcon" />
          </span>
        </div>
        <span className="featuredSub">Last 12 Months </span>
      </div>
      <div className="featuredIteam">
        <span className="featuredTitle">Revenue</span>
        <div className="featuredMoneyContainer">
          <span className="featutrdMoneyRate">$128912</span>
          <span className="featuredMoneyPeriod">
            12ks
            <MonetizationOnIcon className="featuredIcon" />
          </span>
        </div>
        <span className="featuredSub">Last 12 Months </span>
      </div>
    </div>
  );
};

export default FeaturedInfo;
