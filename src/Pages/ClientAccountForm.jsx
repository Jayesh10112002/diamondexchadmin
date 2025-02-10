import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "../Style/ClientAccountForm.css";

function ClientAccountForm() {
  const { user } = useParams();

  // State for form fields
  const [accountData, setAccountData] = useState({
    accountType: "",
    clientName: user || "",
    commission: 0,
    maxBet: 0,
    maxProfit: 0,
    masterPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAccountData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Data: ", accountData);
  };

  return (
    <div className="account-form-container">
      <h2>Add/Edit Client Account</h2>
      <form onSubmit={handleSubmit} className="client-account-form">
        <div className="form-section">
          <label>Account Type:</label>
          <select
            name="accountType"
            value={accountData.accountType}
            onChange={handleChange}
          >
            <option value="">Select Type</option>
            <option value="User">User</option>
            <option value="Admin">Admin</option>
          </select>
        </div>

        <div className="form-section">
          <label>Client Name:</label>
          <input
            type="text"
            name="clientName"
            value={accountData.clientName}
            onChange={handleChange}
          />
        </div>

        <div className="form-section">
          <label>Commission:</label>
          <input
            type="number"
            name="commission"
            value={accountData.commission}
            onChange={handleChange}
          />
        </div>

        <div className="form-section">
          <label>Max Bet:</label>
          <input
            type="number"
            name="maxBet"
            value={accountData.maxBet}
            onChange={handleChange}
          />
        </div>

        <div className="form-section">
          <label>Max Profit:</label>
          <input
            type="number"
            name="maxProfit"
            value={accountData.maxProfit}
            onChange={handleChange}
          />
        </div>

        <div className="form-section">
          <label>Master Password:</label>
          <input
            type="password"
            name="masterPassword"
            value={accountData.masterPassword}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="update-button">
          Update Account
        </button>
      </form>
    </div>
  );
}

export default ClientAccountForm;
