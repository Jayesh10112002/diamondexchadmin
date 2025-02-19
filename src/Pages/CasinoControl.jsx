import React, { useState } from "react";
import "../Style/CasinoControl.css";
import { RiAddCircleLine } from "react-icons/ri";
import { RxCrossCircled } from "react-icons/rx";
import { CiCircleMinus } from "react-icons/ci";




const CasinoControl = () => {

  const [isshowlist , setIsShowList]  = useState(false)
  const showlistHandler = () =>{
    setIsShowList(!isshowlist)
  }
  const eventTypes = [
    "Indian Poker/Live Casino",
    "Indian Poker II ",
    "Evolution",
    "Vivo",
    "Betgames",
    "Casino III",
    "Spribe",
  ];
  return (
    <div className="casino-control-parent">
      <div className="section-casino-control">
        <h4 className="absolute-heading">Provider:</h4>
        <div className="casino-checkbox-group">
          {eventTypes.map((event) => (
            <label key={event} className="casino-checkbox-item">
              <input type="checkbox" />
              {event}
            </label>
          ))}
        </div>
      </div>
      <div className="casino-control-input-parent">
        <h5>Casino Control</h5>
        <div className="expand-casino-control">
          <span className="open-icon-casino">
            {isshowlist ? (
              <CiCircleMinus onClick={showlistHandler} fontSize={18} />
            ) : (
              <RiAddCircleLine onClick={showlistHandler} fontSize={18} />
            )}
          </span>{" "}
          <span className="name-provider-casino">Indian Poker</span>
        </div>
        <div className={`expanded-list-providers ${isshowlist ? "show" : ""}`}>
          {isshowlist && (
            <ul className="unordered-list-provider">
              {Array(5)
                .fill("7 up & 7 down")
                .map((item, index) => (
                  <li
                    key={index}
                    className={`list-providers-casino ${
                      isshowlist ? "fade-in" : "fade-out"
                    }`}
                  >
                    <span>
                      <RxCrossCircled />
                    </span>
                    <label className="casino-checkbox-item-expanded-item">
                      {item}
                      <input type="checkbox" />
                    </label>
                  </li>
                ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default CasinoControl;
