import React, { useState } from "react";
import "./Header.css";
import { FaCircleUser } from "react-icons/fa6";
import { IoMenu } from "react-icons/io5";

// Example menu data (can be expanded or modified as needed)
const menuData = [
  {
    name: "List of Clients",
    link: "/clients",
  },
  {
    name: "Market Analysis",
    link: "/market-analysis",
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
      "Account's Statement",
      "Current Bets",
      "General Report",
      "Game Report",
      "Casino Report",
      "Profit And Loss",
    ],
  },
];

const Header = ({SidebarHandler}) => {
 
  return (
    <header className="header">
      <div className="header-menu">
        <nav className="navbar navbar-expand-lg navbar-light">
          <div
            id="navbarSupportedContent"
            className="navbar-collapse menu-list"
          >
            <div className="header-top-menu navbar-nav navbar">
              <div className="mobile-nav-toggle">
                <IoMenu onClick={SidebarHandler} />
              </div>

              <a className="navbar-brand">
                <img
                  src="https://sitethemedata.com/sitethemes/d247.com/front/logo.png"
                  alt=""
                />
              </a>

              <ul className="menu-row">
                {menuData.map((item, index) => (
                  <li
                    key={index}
                    className={`dropdown ${
                      item.subMenu ? "dropdown-toggle" : ""
                    }`}
                  >
                    <a
                      className="navbar-link"
                      href={item.link || "#"}
                      data-bs-toggle={item.subMenu ? "dropdown" : ""}
                    >
                      {item.name}
                    </a>
                    {item.subMenu && (
                      <ul className="dropdown-menu">
                        {item.subMenu.map((subItem, subIndex) => (
                          <li key={subIndex}>
                            <a
                              className="dropdown-item"
                              href={subItem.link || "#"}
                            >
                              {subItem.name || subItem}
                            </a>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rightmenu">
              <ul className="d-flex mobile-hide-list">
                <li className="dropdown">
                  <a
                    className="dropdown-toggle"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <span className="userIcon">
                      <FaCircleUser />
                    </span>{" "}
                    TECHADMIN
                  </a>
                  <div
                    aria-labelledby="dropdownMenuButton1"
                    className="dropdown-menu"
                  >
                    <ul className="menu-list">
                      <li>
                        <a
                          className="dropdown-item"
                          style={{ textDecoration: "none" }}
                        >
                          Bal. : <span>100,000,000</span>
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="/partner-list">
                          Create Partner
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="/change-password">
                          Change Password
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item">Log out</a>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
              <form noValidate className="navbar-nav ">
                <input
                  name="searchSport"
                  id="dropdownMenuLink"
                  type="text"
                  autoComplete="off"
                  placeholder="All Client..."
                  className="search-input"
                />
                <i className="fas fa-search-plus" />
              </form>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
