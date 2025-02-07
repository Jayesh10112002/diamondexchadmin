import React from 'react';
import './ControlPage.css';

const ControlPage = () => {
  const eventTypes = ['Cricket', 'Soccer', 'Tennis', 'Kabaddi', 'Horse', 'GreyHound'];
  const types = ['All Odds', 'Exch Bookmaker', 'All Bookmaker', 'Betfair Fancy', 'Exch Fancy', 'Other Fancy'];
  const marketTypes = {
    Cricket: [
      'Match Odds', 'Bookmaker', 'Special Maker', 'Tournament Winner', 'Tied Match', 'Completed Match',
      'To Win the Toss', '1st Inning Runs', '1st Inning 6 Ovr Line', '1st Inning 10 Ovr Line',
      '1st Inning 15 Ovr Line', '1st Inning 20 Ovr Line', '2nd inning Runs', '2nd Inning 6 Ovr Line',
      '2nd Inning 10 Ovr Line', '2nd Inning 15 Ovr Line', 'Over', 'Batsman', 'Single Over',
      'Odd Even', 'Three Selection', 'Ball By Ball', 'Lottery',
    ],
    Soccer: ['Match Odds', 'Bookmaker', 'Special Maker', 'Over Under 05', 'Over Under 15', 'Over Under 25', 'Over Under 35', 'Lottery'],
    Tennis: ['Match Odds', 'Set Winner', 'Bookmaker', 'Special Maker', 'Lottery'],
    Kabaddi: ['Bookmaker', 'Overs', 'Odd Even', 'Lottery'],
  };

  return (
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

      <div className="section">
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
    </div>
  );
};

export default ControlPage;
