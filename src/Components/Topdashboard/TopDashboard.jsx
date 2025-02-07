import React, { useState } from "react";
import { Tooltip } from "antd";
import { FaCircleArrowDown } from "react-icons/fa6";
import { FaCircleArrowUp } from "react-icons/fa6";
import "./TopDashboard.css";

const TopDashboard = () => {
  const [isOpenTop, setisOpenTop] = useState(false);

  const TopHandler = () => {
    setisOpenTop(!isOpenTop);
  };

  const adminDetails = [
    { name: "User ID", value: "rr10", NameMessage: "Your username" },
    { name: "User Type", value: "Admin", NameMessage: "Your user role" },
    { name: "Given Bal", value: "10000.99", NameMessage: "Your username" },
    {
      name: "Available",
      value: "99800.00",
      NameMessage: "Aapke Client Ko Dene Ke Baad Bacha Hua Balance",
    },
    {
      name: "Up Line",
      value: "0",
      NameMessage: "Upper level ka hisab ka Len-den",
    },
    {
      name: "Down line",
      value: "0",
      NameMessage: "Upper Level Ke Saath Hisab Ka Len-Den",
    },
    {
      name: "Current P&L",
      value: "0",
      NameMessage:
        "Upline + Downline Ka Bina Settle Kiya Hua Profit & Loss Account.",
    },
    {
      name: "Exposure",
      value: "0",
      NameMessage:
        "Your current market exposure with all kind of games that your clients are playing currently.",
    },
    { name: "My P&L", value: "0", NameMessage: "Mera Profit & Loss Account." },
  ];

  return (
    <div className="TopDashboard-parent">
      <div className="opening-icon-topdashboard">
        <h4>
          {isOpenTop ? (
            <FaCircleArrowUp
              style={{ fontSize: "20px", color: "white" }}
              onClick={TopHandler}
            />
          ) : (
            <FaCircleArrowDown
              style={{ fontSize: "20px", color: "white" }}
              onClick={TopHandler}
            />
          )}
        </h4>
      </div>

      <div className={`topdashboard-child ${isOpenTop ? "OpenTop" : ""}`}>
        <div className="admin-details">
          {adminDetails.map((item, index) => (
            <div className="detail-type" key={index}>
              <span>{item.name}:</span>
              <Tooltip title={item.NameMessage} placement="bottom">
                <span className="value-span-topbar">{item.value}</span>
              </Tooltip>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopDashboard;
