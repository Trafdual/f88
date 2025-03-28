import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [showSuccessBoxLogin, setShowSuccessBox] = useState(false);

  return (
    <AuthContext.Provider value={{ showSuccessBoxLogin, setShowSuccessBox }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
