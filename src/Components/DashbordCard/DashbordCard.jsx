import React from 'react';
import './DashbordCard.css';

const DashboardCard = ({heading, value}) => {
  return (
    <div className="card">
      <div className="card-header">{heading}</div>
      <div className="card-body">{value}</div>
    </div>
  );
};

export default DashboardCard;
