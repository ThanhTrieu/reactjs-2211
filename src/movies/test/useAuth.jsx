import { createContext, useContext, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "./useLocalStorage";
import { loginUser } from '../services/test';

const AuthContext = createContext();

export const AuthProvider = ({ children, userData }) => {
  const [user, setUser] = useLocalStorage("user", userData);
  const navigate = useNavigate();

  const login = async (data) => {
    const result = await loginUser(data);
    if(result){
        setUser(result);
        navigate("/", { replace: true });
    }
  };

  const logout = () => {
    setUser(null);
    navigate("/login", { replace: true });
  };

  const value = useMemo(
    () => ({
      user,
      login,
      logout
    }),
    [user]
  );

  return (<AuthContext.Provider value={value}>{children}</AuthContext.Provider>)
};

export const useAuth = () => {
  return useContext(AuthContext);
};
