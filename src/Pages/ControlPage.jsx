import React, { useState } from "react";
import "../Style/ControlPage.css";
import { DatePicker } from "antd";
import dayjs from "dayjs";
import { FaPlus } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import { FiMinus } from "react-icons/fi";
import MatchControl from "../Components/EventControl/MatchControl";

const ControlPage = () => {
  const [selectedDate, setSelectedDate] = useState();
  const [sportsTab, setSportsTab] = useState(1);

  const currentDate = dayjs();
  const startDate = currentDate.subtract(5, "day");
  const endDate = currentDate.add(6, "day");

  const handleDateChange = (date, dateString) => {
    setSelectedDate(date);
    console.log("Selected Date: ", dateString);
  };

  const sportTab = [
    {
      name: "Cricket",
      index: 1,
    },
    {
      name: "Soccer",
      index: 2,
    },
    {
      name: "Tennis",
      index: 3,
    },
    {
      name: "Kabaddi",
      index: 4,
    },
    {
      name: "Horse",
      index: 5,
    },
    {
      name: "GreyHound",
      index: 6,
    },
  ];

  const eventTypes = [
    "Cricket",
    "Soccer",
    "Tennis",
    "Kabaddi",
    "Horse",
    "GreyHound",
  ];
  const types = [
    "All Odds",
    "Exch Bookmaker",
    "All Bookmaker",
    "Betfair Fancy",
    "Exch Fancy",
    "Other Fancy",
  ];
  const marketTypes = {
    Cricket: [
      "Match Odds",
      "Bookmaker",
      "Special Maker",
      "Tournament Winner",
      "Tied Match",
      "Completed Match",
      "To Win the Toss",
      "1st Inning Runs",
      "1st Inning 6 Ovr Line",
      "1st Inning 10 Ovr Line",
      "1st Inning 15 Ovr Line",
      "1st Inning 20 Ovr Line",
      "2nd inning Runs",
      "2nd Inning 6 Ovr Line",
      "2nd Inning 10 Ovr Line",
      "2nd Inning 15 Ovr Line",
      "Over",
      "Batsman",
      "Single Over",
      "Odd Even",
      "Three Selection",
      "Ball By Ball",
      "Lottery",
    ],
    Soccer: [
      "Match Odds",
      "Bookmaker",
      "Special Maker",
      "Over Under 05",
      "Over Under 15",
      "Over Under 25",
      "Over Under 35",
      "Lottery",
    ],
    Tennis: [
      "Match Odds",
      "Set Winner",
      "Bookmaker",
      "Special Maker",
      "Lottery",
    ],
    Kabaddi: ["Bookmaker", "Overs", "Odd Even", "Lottery"],
    Horse: ["Win"],
    GreyHound: ["Win"],
  };

  return (
    <div className="controlpage-parent">
      <div className="form-container">
        <div className="section">
          <h4>Event Type:</h4>
          <div className="checkbox-group">
            {eventTypes.map((event) => (
              <label key={event} className="checkbox-item">
                <input type="checkbox" />
                {event}
              </label>
            ))}
          </div>
        </div>

        <div className="section">
          <h4>Type:</h4>
          <div className="checkbox-group">
            {types.map((type) => (
              <label key={type} className="checkbox-item">
                <input type="checkbox" />
                {type}
              </label>
            ))}
          </div>
        </div>

        <div className="section section-lastchild">
          <h4>Market Type:</h4>
          {Object.entries(marketTypes).map(([category, options]) => (
            <div key={category} className="market-type">
              <h5>{category}</h5>
              <div className="checkbox-group">
                {options.map((option) => (
                  <label key={option} className="checkbox-item">
                    <input type="checkbox" />
                    {option}
                  </label>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="filter-date-control-page">
          <DatePicker
            onChange={handleDateChange}
            format="D MMMM YYYY" // Example: 6 February 2025
            placeholder="Select a Date"
            disabledDate={(current) =>
              current &&
              (current.isBefore(startDate) || current.isAfter(endDate))
            }
            className="day-picker"
          />
        </div>

        <div className="competiton-event-market">
          <h5>Competition /Event /Markets</h5>
          <div className="sports-tab-controlpage">
            {sportTab.map((sport, index) => (
              <div
                className={`sports-tab-items ${
                  sport.index === sportsTab ? "activesports-tab" : ""
                }`}
                key={index}
                onClick={() => setSportsTab(sport.index)}
              >
                {sport.name}
              </div>
            ))}
          </div>
        </div>
        {sportsTab === 1 && <MatchControl />}
        {sportsTab === 2 && <MatchControl />}
        {sportsTab === 3 && <MatchControl />}
        {sportsTab === 4 && <MatchControl />}
        {sportsTab === 5 && <MatchControl />}
        {sportsTab === 6 && <MatchControl />}
      </div>
    </div>
  );
};

export default ControlPage;
