import React, { useState } from "react";
import "./Sidebar.css";

const Sidebar = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const sports = [
    {
      name: "Cricket",
      matches: [
        "India vs England",
        "England vs South Africa",
        "Sydney Sixers vs Perth Scorchers",
        "Surrey vs Lancashire",
        "Royal Challengers Bangalore vs Kolkata Knight Riders",
        "Bangladesh vs Afghanistan",
        "New Zealand vs West Indies",
        "Pakistan vs Sri Lanka",
        "India vs Australia",
        "India vs Pakistan",
      ],
    },
    {
      name: "Soccer",
      matches: [
        "Manchester United vs Chelsea",
        "Manchester United vs Chelsea",
        "Petra Kvitova vs Coco Gauff",
        "Ashleigh Barty vs Simona Halep",
        "Venus Williams vs Maria Sharapova",
        "Serena Williams vs Naomi Osaka",
        "Roger Federer vs Andy Murray",
        "Novak Djokovic vs Rafael Nadal",
        "Los Angeles Galaxy vs Seattle Sounders",
        "Paris Saint-Germain vs Marseille",
        "Bayern Munich vs Borussia Dortmund",
        "Juventus vs AC Milan",
        "Real Madrid vs Barcelona",
        "Manchester United vs Liverpool",
      ],
    },
    {
      name: "Tennis",
      matches: ["Federer vs Nadal"],
    },
  ];

  const toggleSubMenu = (index) => {
    if (openIndex === index) {
      setOpenIndex(null); // Close if already open
    } else {
      setOpenIndex(index); // Open the clicked menu
    }
  };

  return (
    <div className="mobile-nav navbar mobile-nav-active">
      <div className="sidebar scroller collapse navbar-collapse">
        <div className="scroll-sidebar scroller">
          <div className="menu-section">
            <h2>Sports</h2>
            {sports.map((sport, index) => (
              <div key={index} className="mat-expansion-panel">
                <div
                  className="mat-expansion-panel-header"
                  onClick={() => toggleSubMenu(index)}
                >
                  <span className="mat-content">
                    <a>{sport.name}</a>
                  </span>
         
                </div>
                <div
                  className={`mat-expansion-panel-content ${
                    openIndex === index ? "open" : ""
                  }`}
                >
                  <div className="mat-expansion-panel-body">
                    {sport.matches.map((match, matchIndex) => (
                      <ul key={matchIndex} className="submenu-list">
                        <li>
                          <a>{match}</a>
                        </li>
                      </ul>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
