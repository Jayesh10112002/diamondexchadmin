import React, { useState } from "react";
import "./Sidebar.css";
import {data} from "../../Utils/code"
import { LiaPlusSquare } from "react-icons/lia";
import { PiMinusSquareLight } from "react-icons/pi";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";


const Sidebar = () => {
  const [expandedNode, setExpandedNode] = useState(null);
  const [nestedExpand, setNestedExpand] = useState({});
  const menus = data.data;


    const toggleExpandedNode = (etid) => {
      setExpandedNode((prev) => (prev === etid ? null : etid));
    };

    const toggleNestedExpand = (cid) => {
      setNestedExpand((prev) => ({ ...prev, [cid]: !prev[cid] }));
    };

  return (
    <div className="sidebar">
      <div className="menu">
        {/* <div className="menu-title">
          All Sports
          <span className="toggle-icon">
            {sportsMenu ? <FaAngleUp /> : <FaAngleDown />}
          </span>
        </div> */}
        <ul
          // className={`menu-items ${
          //   sportsMenu ? "menu-items-open" : "menu-items-closed"
          // }`}
          className="menu-items"
        >
          {menus.t1.map((item) => (
            <li key={item.etid} className="menu-item">
              <div
                className="nested-title"
                onClick={() => toggleExpandedNode(item.etid)}
              >
                <span style={{ fontSize: "14px" }}>{item.name}</span>
                <span className="nested-icon">
                  {expandedNode === item.etid ? (
                    <MdOutlineKeyboardArrowUp size={18} />
                  ) : (
                    <MdOutlineKeyboardArrowDown size={18} />
                  )}
                </span>
              </div>
              {expandedNode === item.etid && (
                <ul className="nested-items nested-open">
                  {item.children?.map((subItem) => (
                    <li key={subItem.cid} className="nested-item">
                      <div
                        className="deep-nested-title"
                        onClick={() => toggleNestedExpand(subItem.cid)}
                      >
                        <span className="deep-nested-icon">
                          {nestedExpand[subItem.cid] ? (
                            <PiMinusSquareLight size={18} />
                          ) : (
                            <LiaPlusSquare size={18} />
                          )}
                        </span>
                        <span className="subitem-name-span-sports">
                          {subItem.name}
                        </span>
                      </div>
                      {nestedExpand[subItem.cid] && (
                        <ul className="deep-nested-items">
                          {subItem.children?.map((nestedItem) => (
                            <li
                              key={nestedItem.cid}
                              className="deep-nested-item"
                            >
                              {nestedItem.name}
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
