import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "../Style/ClientAccountForm.css";
import { Select } from "antd";
import TableComponent from "../Components/EditPage/TableComponent";
import CasinoMaxbet from "../Components/EditPage/CasinoMaxbet";
import MasterPassword from "../Components/PasswordMaster/MasterPassword";

function ClientAccountForm() {
  const { user } = useParams();
  const [showComponents, setShowComponents] = useState(false);

  const handleCheckboxChange = (event) => {
    setShowComponents(event.target.checked);
  };
  console.log("this is usee", user);

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
      <div className="parent-container-details">
        <div className="account-details-parent">
          <div className="account-details-child">
            <h5>Account Details:</h5>
            <div className="account-details-content">
              <div className="input-account-type">
                <label> Account Type:</label>
                <Select
                  className="select-part-input-"
                  options={[
                    { value: "user", label: "User" },
                    { value: "lucy", label: "Lucy" },
                    { value: "Yiminghe", label: "Yiminghe" },
                  ]}
                />
              </div>
              <div className="input-account-type">
                <label>Client Name:</label>
                <input
                  type="text"
                  value={user}
                  onChange={handleChange}
                  placeholder="Enter client name"
                />
              </div>
            </div>
          </div>
          <div className="account-details-child">
            <h5>Commission:</h5>
            <div className="sports-name">Cricket/Soccer/Tennis</div>
            <div className="commission-input-field">
              <span>Commission: M.O</span>
              <input type="text" className="input-commission" value={1} />
              <span>%(1%)</span>
            </div>
          </div>
          <div className="account-details-child ">
            <h5>User Setting:</h5>
            <div className="third-child-betlimit">
              <div className="input-account-type">
                <label>Max Bet:</label>
                <input
                  type="number"
                  value={0}
                  placeholder="Enter client name"
                />
              </div>{" "}
              <div className="input-account-type">
                <label>Max Profit:</label>
                <input
                  type="number"
                  value={0}
                  placeholder="Enter client name"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="personal-detail-parent">
          <div className="account-details-child">
            <h5>User Setting:</h5>
            <div className="third-child-betlimit">
              <div className="input-account-type">
                <label>Username:</label>
                <input
                  type="text"
                  value={user}
                  placeholder="Enter client name"
                />
              </div>{" "}
              <div className="input-account-type">
                <label>Password:</label>
                <input type="password" placeholder="Enter client name" />
              </div>
            </div>
            <div className="third-child-betlimit personal-details-input">
              <div className="input-account-type">
                <label>Retype Password:</label>
                <input type="password" />
              </div>{" "}
              <div className="input-account-type">
                <label>Refrence Name:</label>
                <input type="text" placeholder="Refrence Name" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="table-component">
        <div className="radio-check-button">
          <span>Check Limits </span>
          <input
            type="checkbox"
            checked={showComponents}
            onChange={handleCheckboxChange}
          />
        </div>

        {showComponents && (
          <>
            <div className="account-details-child table-component-parent">
              <h5>Min Max Bets</h5>
              <TableComponent />
            </div>

            <div className="account-details-child table-component-parent">
              <h5>Casino Max Bet</h5>
              <CasinoMaxbet />
            </div>
          </>
        )}
      </div>
      <div className="master-field-add-client">
        <MasterPassword />
      </div>
        <button className="update-btn">Update</button>
    </div>
  );
}

export default ClientAccountForm;
