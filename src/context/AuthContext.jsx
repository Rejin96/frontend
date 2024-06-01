import { createContext } from "react";

export const AuthContext = createContext();

function AuthProvider({ children }) {
  let data = { id: 4 };
  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
}

export default AuthProvider;