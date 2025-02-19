import React, { createContext, useState } from "react";
import {  useNavigate } from "react-router-dom";

export const MasterPasswordContext = createContext();

export const MasterPasswordProvider = ({ children }) => {
  const [password, setPassword] = useState("");
  const [isAuthModalVisible, setAuthModalVisible] = useState(false);
  const[redirectPath,setRedirectPath] = useState()
  const navigate = useNavigate();

  const handleAuthSubmit = () => {
    console.log("Authenticating with password:", password);
    setAuthModalVisible(false);
    navigate(redirectPath)
  };


  return (
    <MasterPasswordContext.Provider
      value={{
        password,
        setPassword,
        setRedirectPath,
        isAuthModalVisible,
        setAuthModalVisible,
        handleAuthSubmit,
      }}
    >
      {children}
    </MasterPasswordContext.Provider>
  );
};
