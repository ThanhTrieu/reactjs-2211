import {createContext, useContext, useMemo, useState} from "react";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "./useLocalStorage";
import { loginUser } from '../services/test';

const AuthContext = createContext();

export const AuthProvider = ({ children, userData }) => {
  const [user, setUser] = useLocalStorage("user", userData);
  const [loading, setLoadingLogin] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const login = async (data) => {
    setLoadingLogin(true);
    setError(null);
    await loginUser(data)
    .then(response => {
      if(response.hasOwnProperty('token')){
        setLoadingLogin(false);
        setUser(response);
        navigate("/", { replace: true });
      }
    })
    .catch(() => {
      setLoadingLogin(false);
      setUser(null);
      setError({ mess: 'account invalid'});
    });
  };

  const logout = () => {
    setUser(null);
    navigate("/login", { replace: true });
  };

  const value = useMemo(
    () => ({
      user,
      loading,
      error,
      login,
      logout
    }),
    [user, loading, error]
  );

  return (<AuthContext.Provider value={value}>{children}</AuthContext.Provider>)
};

export const useAuth = () => {
  return useContext(AuthContext);
};
