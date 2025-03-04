import React, { useState } from "react";
import "./Sidebar.css";
import {data} from "../../Utils/code"
import { LiaPlusSquare } from "react-icons/lia";
import { PiMinusSquareLight } from "react-icons/pi";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";


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
    const menuItemsResponsive = [
      {
        name: "Dashboard",
        route: "/",
      },
      {
        name: "List Of Clients",
        route: "/clients",
      },
      {
        name: "Market Analysis",
        route: "/market-analysis",
      },
      {
        name: "Market Setting",
        subMenu: [
          { name: "Active Markets", link: "/pending-markets" },
          { name: "Declare Markets", link: "/closed-markets" },
          { name: "Rollback Markets", link: "/complete_markets" },
          { name: "Sports Setting", link: "/events" },
          { name: "Series Setting", link: "/events/cricket" },
          { name: "Global Settings", link: "/website-super-setting" },
          { name: "Fancy Settings", link: "/events/cricket_match" },
          { name: "Match Settings", link: "/events/cricket_match" },
        ],
      },
      {
        name: "Live Market",
        subMenu: [
          "Baccarat",
          "29 CARD BACCARAT",
          "Super Over",
          "RACE 20",
          "Dream Catcher",
          "ROULETTE",
          "Sicbo",
          "TeenPatti",
          "TEENPATTI T20",
          "TEENPATTI TEST",
          "MUFLIS TEENPATTI",
          "HIGH LOW",
          "POKER",
          "POKER 20-20",
          "32 CARD CASINO",
          "Worli Matka",
          "Andar Bahar",
          "Lucky 7",
          "Dragon Tiger",
          "RACE TO 17",
          "TRIO",
          "THE TRAP",
          "SIX PLAYER POKER",
          "CASINO METER",
          "CASINO WAR",
          "Amar Akbar Anthony",
          "Bollywood Casino",
        ],
      },
      {
        name: "Reports",
        subMenu: [
          {
            name: "Account's Statement",
            route: "/accountstatement",
          },
          {
            name: "Settlement/Balance Report",
            route: "/settlementreport",
          },
          {
            name: "Current Bets",
            route: "/currentbets",
          },
          {
            name: "General Report",
            route: "/generalreport",
          },
          {
            name: "Game Report",
            route: "/gamereport",
          },
          {
            name: "Casino Report",
            route: "/casinoreport",
          },
          {
            name: "Profit and Loss",
            route: "/profitloss",
          },
          {
            name: "Bet History",
            route: "/bethistory",
          },
        ],
      },
    ];
  

  return (
    <div className="sidebar">
      <div className="menu">
        <ul
          // className={`menu-items ${
          //   sportsMenu ? "menu-items-open" : "menu-items-closed"
          // }`}
          className="menu-items"
        >
          <div className="menuItems-responsive">
            {menuItemsResponsive.map((item, index) => (
              <li className="menu-item">
                <span className="menu-items-span">{item.name}</span>
                <span className="menu-items-span">
                  {item.subMenu && <IoIosArrowDown />}
                </span>
              </li>
            ))}
          </div>

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
