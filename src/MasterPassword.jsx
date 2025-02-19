import React, { useContext } from "react";
import { Modal, Input } from "antd"; 
import { MasterPasswordContext } from "./Context/MasterPassword";

export const MasterPassword = () => {
  const {
    password,
    setPassword,
    isAuthModalVisible,
    setAuthModalVisible,
    handleAuthSubmit,
  } = useContext(MasterPasswordContext);

  return (
    <div className="master-password-parent">
      <Modal
        title="Authenticate"
        visible={isAuthModalVisible}
        onCancel={() => setAuthModalVisible(false)}
        onOk={handleAuthSubmit}
      >
        <Input.Password
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter password to continue"
        />
      </Modal>
    </div>
  );
};
