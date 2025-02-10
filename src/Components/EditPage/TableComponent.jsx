import React, { useState } from "react";
import "./TableComponent.css";

const TableComponent = () => {
  const sportsData = [
    { sport: "Cricket", betTypes: ["Odds", "Bookmaker", "Fancy", "Lottery"] },
    {
      sport: "Soccer",
      betTypes: ["Odds", "Bookmaker", "Over Under", "Lottery"],
    },
    {
      sport: "Tennis",
      betTypes: ["Odds", "Set Winner", "Bookmaker", "Lottery"],
    },
    { sport: "Horse", betTypes: ["Odds"] },
    { sport: "Greyhound", betTypes: ["Odds"] },
  ];

  const anotherTableData = [
    { sport: "SportsBook", betTypes: ["none"] },
    { sport: "Election", betTypes: ["Fancy", "Lottery"] },
  ];

  // State to store input values
  const [betValues, setBetValues] = useState({});

  // Handle input changes
  const handleInputChange = (sport, betType, event) => {
    setBetValues((prevState) => ({
      ...prevState,
      [`${sport}-${betType}`]: event.target.value,
    }));
  };

  // Log the current state when the function is called
  const handleLogValues = () => {
    console.log("Bet Values:", betValues);
  };

  return (
    <div className="table-container">
      <div className="table-section">
        <div className="table-container">
          <table className="betting-table">
            <thead>
              <tr>
                <th></th>
                {sportsData.map((sport, index) => (
                  <th key={index} colSpan={sport.betTypes.length}>
                    {sport.sport}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {/* Max Bet Row */}
              <tr>
                <td className="row-label">Max Bet</td>
                {sportsData.map((sport, sportIndex) =>
                  sport.betTypes.map((betType, betIndex) => (
                    <td key={`${sportIndex}-${betIndex}`}>
                      <div className="cell-content">
                        <label>{betType}</label>
                        <input
                          type="text"
                          value={betValues[`${sport.sport}-${betType}`] || ""}
                          onChange={(event) =>
                            handleInputChange(sport.sport, betType, event)
                          }
                        />
                      </div>
                    </td>
                  ))
                )}
              </tr>

              {/* Max Profit Row */}
              <tr>
                <td className="row-label">Max Profit</td>
                {sportsData.map((sport, sportIndex) =>
                  sport.betTypes.map((betType, betIndex) => (
                    <td key={`${sportIndex}-${betIndex}`}>
                      <div className="cell-content">
                        <label>{betType}</label>
                        <input
                          type="text"
                          value={betValues[`${sport.sport}-${betType}`] || ""}
                          onChange={(event) =>
                            handleInputChange(sport.sport, betType, event)
                          }
                        />
                      </div>
                    </td>
                  ))
                )}
              </tr>
            </tbody>
          </table>
        </div>

        <div className="another-table">
          <table className="betting-table">
            <thead>
              <tr>
                <th></th>
                {anotherTableData.map((sport, index) => (
                  <th key={index} colSpan={sport.betTypes.length}>
                    {sport.sport}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {/* Max Bet Row */}
              <tr>
                <td className="row-label">Max Bet</td>
                {anotherTableData.map((sport, sportIndex) =>
                  sport.betTypes.map((betType, betIndex) => (
                    <td key={`${sportIndex}-${betIndex}`}>
                      <div className="cell-content">
                        <label>{betType}</label>
                        <input
                          type="text"
                          value={betValues[`${sport.sport}-${betType}`] || ""}
                          onChange={(event) =>
                            handleInputChange(sport.sport, betType, event)
                          }
                        />
                      </div>
                    </td>
                  ))
                )}
              </tr>

              {/* Max Profit Row */}
              <tr>
                <td className="row-label">Max Profit</td>
                {anotherTableData.map((sport, sportIndex) =>
                  sport.betTypes.map((betType, betIndex) => (
                    <td key={`${sportIndex}-${betIndex}`}>
                      <div className="cell-content">
                        <label>{betType}</label>
                        <input
                          type="text"
                          value={betValues[`${sport.sport}-${betType}`] || ""}
                          onChange={(event) =>
                            handleInputChange(sport.sport, betType, event)
                          }
                        />
                      </div>
                    </td>
                  ))
                )}
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Button to log values */}
      <button onClick={handleLogValues} className="log-button">
        Log Values
      </button>
    </div>
  );
};

export default TableComponent;
