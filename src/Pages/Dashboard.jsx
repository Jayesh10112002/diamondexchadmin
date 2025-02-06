import React from "react";
import "../Style/Dashboard.css";
import DateFilter from "../Components/DateFilter/DateFilter";
import DashboardCard from "../Components/DashbordCard/DashbordCard";
import DashbordTable from "../Components/DashbordCard/DashbordTable";
const CardData = [
  {
    heading: "P&L",
    value: "0",
  },
  {
    heading: "COMMISSION",
    value: "0",
  },
  {
    heading: "DEPOSIT",
    value: "0",
  },
  {
    heading: "WITHDRAWAL",
    value: "0",
  },
  {
    heading: "TOTAL BETS",
    value: "0",
  },
  {
    heading: "SPORTSBOOK P&L",
    value: "0",
  },
];

const TableData = [
  {
    tablehead: "Top 5 Winning Player",
    column: ["Player", "Amount"],
  },
  {
    tablehead: "Top 5 Losing Player",
    column: ["Player", "Amount"],
  },
  {
    tablehead: "Top 5 Winning Markets",
    column: ["Sport", "Market", "Amount"],
  },
  {
    tablehead: "Top 5 Losing Markets",
    column: ["Sport", "Market", "Amount"],
  },
  {
    tablehead: "User Count",
    column: ["Role", "Count"],
  },
  {
    tablehead: "Sports Gameplay Details",
    subcolumn: ["Category", "Total Bets", "Total Bet Amount", "Total P&L"],
  },
  {
    tablehead: "Others Gameplay Details",
    subcolumn: ["Category", "Total Bets", "Total Bet Amount", "Total P&L"],
  },
  {
    tablehead: "Casino Gameplay Details",
    subcolumn: [
      "Category",
      "Indian Poker/ Live Casino P&L",
      "Evolution P&L",
      "Betgames P&L",
      "Total P&L",
    ],
  },
];

const Dashboard = () => {
  return (
    <div className="Dashboard-parent">
      <div className="date-component">
        <DateFilter />
      </div>
      <div className="dashbordCard-component">
        {CardData.map((item, index) => (
          <DashboardCard key={index} heading={item.heading} value={item.value} />
        ))}
      </div>
      <div className="dashbordTable-component">
        {TableData.map((item, index) => (
          <div className="dashbord-alltable" key={index}>
            <DashbordTable data={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
