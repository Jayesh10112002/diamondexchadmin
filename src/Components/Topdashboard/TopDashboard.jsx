import React, { useState } from "react";
import "./TopDashboard.css";
import { IoIosArrowDropdownCircle } from "react-icons/io";


const TopDashboard = () => {
    const [isOpenTop, setisOpenTop] = useState(false)
    const TopHandler= () =>{

    }
  return (
    <div className="TopDashboard-parent">
      <div className="opening-icon-topdashboard">
        <h4>
          <IoIosArrowDropdownCircle
            style={{
              fontSize: "30px",
            }}
           />
        </h4>
      </div>
      <div className="topdashboard-child">
        <div className="admin-details">
          <div className="detail-type">
            <span>User ID:</span>
            <span className="value-span-topbar">rr10</span>
          </div>
          <div className="detail-type">
            <span>User Type :</span>
            <span className="value-span-topbar">Admin</span>
          </div>
        </div>
        <div className="admin-details">
          <div className="detail-type">
            <span>Given Balance:</span>
            <span className="value-span-topbar">10000</span>
          </div>
          <div className="detail-type">
            <span>Available :</span>
            <span className="value-span-topbar">99800.00</span>
          </div>
        </div>
        <div className="admin-details">
          <div className="detail-type">
            <span>Up Line:</span>
            <span className="value-span-topbar"> 0</span>
          </div>
          <div className="detail-type">
            <span>Down Line :</span>
            <span className="value-span-topbar">0</span>
          </div>
        </div>
        <div className="admin-details">
          <div className="detail-type">
            <span>Current P&L:</span>
            <span className="value-span-topbar">0</span>
          </div>
          <div className="detail-type">
            <span>Exposure :</span>
            <span className="value-span-topbar">0</span>
          </div>
        </div>
        <div className="admin-details">
          <div className="detail-type">
            <span>My P&L:</span>
            <span className="value-span-topbar">0</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopDashboard;
