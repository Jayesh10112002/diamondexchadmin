import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [manager, setManager] = useState(null);

  return (
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated,manager,setManager }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
