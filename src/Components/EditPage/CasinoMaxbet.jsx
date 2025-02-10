import React from 'react'
import "./TableComponent.css"
const CasinoMaxbet = () => {
  return (
    <div className='table-container'>
      <table className='betting-table'>
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
            {Array(7)
              .fill(null)
              .map((_, idx) => (
                <td key={idx}>
                  <input type="text" placeholder="" />
                </td>
              ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default CasinoMaxbet