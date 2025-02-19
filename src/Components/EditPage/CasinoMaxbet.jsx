import React, { useState } from "react";
import "./TableComponent.css";

const CasinoMaxbet = () => {
  const [inputValues, setInputValues] = useState({});

  // Handle input change and update the state
  const handleInputChange = (name, event) => {
    const value = event.target.value;
    setInputValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  // Log all input values
  const handleLogValues = () => {
    console.log("Input Values:", inputValues);
  };

  return (
    <div className="table-container">
      <table className="betting-table">
        <thead>
          <tr>
            <th>Indian Poker / Live Casino</th>
            <th>Indian Poker II</th>
            <th>Evolution</th>
            <th>Vivo</th>
            <th>Betgames</th>
            <th>Casino III</th>
            <th>Spribe</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            {[
              "indianPoker",
              "indianPoker2",
              "evolution",
              "vivo",
              "betGames",
              "casino",
              "spribe",
            ].map((name) => (
              <td key={name}>
                <input
                  type="text"
                  placeholder=""
                  value={inputValues[name] || ""}
                  onChange={(event) => handleInputChange(name, event)}
                />
              </td>
            ))}
          </tr>
        </tbody>
      </table>
      {/* <button onClick={handleLogValues} className="log-button">
        Log Values
      </button> */}
    </div>
  );
};

export default CasinoMaxbet;
