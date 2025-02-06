import React from "react";
import "./DashbordCard.css";

const DashbordTable = ({ data }) => {
  const columns = data.column; // Use `column` for headers
  const subcolumns = data.subcolumn; // Use `subcolumn` for body rows

  // Validation: If no data exists
  if (!columns && !subcolumns) {
    return <div className="table-card">Invalid Data</div>;
  }

  return (
    <div className="table-card">
      <div className="table-header">{data.tablehead}</div>
      <table className="table">
        <thead>
          <tr>
            {columns
              ? columns.map((col, index) => <th key={index}>{col}</th>)
              : null}
          </tr>
        </thead>
        <tbody>
          {subcolumns
            ? subcolumns.map((row, index) => (
                <tr key={index}>
                  <td>{row}</td>
                  {/* Add blank cells for missing columns */}
                  {columns && columns.slice(1).map((_, colIndex) => <td key={colIndex}></td>)}
                </tr>
              ))
            : // If only columns are present, show a single blank row
              columns && (
                <tr>
                  {columns.map((_, index) => (
                    <td key={index}></td>
                  ))}
                </tr>
              )}
        </tbody>
      </table>
    </div>
  );
};

export default DashbordTable;
