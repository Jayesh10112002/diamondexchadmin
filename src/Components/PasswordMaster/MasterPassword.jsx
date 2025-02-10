import React from "react";
import "./MasterPassword.css";

const MasterPassword = () => {
  return (
    <div className="master-password-parent">
      <div className="master-password-heading">
        <h4>Master Password:</h4>
      </div>
      <div className="input-field-master-password">
        <input type="password" placeholder="Enter Password" />
      </div>
    </div>
  );
};

export default MasterPassword;
