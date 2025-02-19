import React, { useState } from 'react'
import { FiMinus } from 'react-icons/fi';
import { FaArrowRight, FaPlus } from 'react-icons/fa6';


const MatchControl = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

   const listItems = [
     "2097117 - 51 Over SAU (2)",
     "2097118 - 52 Over SAU (2)",
     "2097119 - 53 Over SAU (2)q",
     "2097120 - 53 Over SAU (2)",
     "2097121 - 54 Over SAU (2)",
   ];

  return (
    <div>
      <div className="sports-tab-content">
        <div className="parent-card" onClick={toggleExpand}>
          <span className="card-title">41221 - Ranji Trophy Elite 2024-25</span>
          <button className="toggle-button">
            {isExpanded ? <FiMinus /> : <FaPlus />}
          </button>
        </div>
        <div className="expandable-child-parent">
          {isExpanded && (
            <div className="child-container">
              <div className="match-name-child-container">
                <span>-10795760 - Saurashtra v Gujarat</span>
                <span className="checkbox-input-field">
                  {" "}
                  <input
                    type="checkbox"
                    className="input-field-name-checkbox"
                  />
                </span>
              </div>
              {listItems.map((item, index) => (
                <div key={index} className="list-item">
                  <span>
                    <FaArrowRight />
                  </span>
                  <span className="list-item-match-name">{item}</span>
                  <span className="list-item-input-checkbox">
                    <input
                      type="checkbox"
                      className="input-field-name-checkbox"
                    />
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default MatchControl