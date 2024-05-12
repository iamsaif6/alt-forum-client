import { createContext } from 'react';

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const AuthValue = {
    name: 'saif',
  };

  return <AuthContext.Provider value={AuthValue}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
