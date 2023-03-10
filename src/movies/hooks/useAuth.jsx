import { createContext, useContext, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "./useLocalStorage";
import { loginUser } from "../services/login";

const AuthContext = createContext();

export const AuthProvider = ({ children, userData }) => {
    const [user, setUser] = useLocalStorage("user-token-login", userData);
    const [loading, setLoading] = useState(false);
    const [messError, setMessError] = useState(null);
    const navigate = useNavigate();

    const login = async (dataLoginUser) => {
        setLoading(true);
        setMessError(null);
        await loginUser(dataLoginUser)
            .then(response => {
                // xu ly thanh cong
                if(response.hasOwnProperty('token')){
                    // co du lieu tra ve tu api
                    setLoading(false);
                    setUser(response);
                    console.log(`sao chua chuyen trang`);
                    // chuyen trang
                    navigate("/redirect-movies", { replace: true });
                }
            })
            .catch((error) => {
                console.log(error)
                // xu ly that bai
                setLoading(false);
                setUser(null);
                setMessError({mess: 'Account invalid'});
            });
    }

    const logout = () => {
        setUser(null); // xoa du lieu nguoi dung khoi local storage
        // mac dinh chuyen ve trang login
        navigate("/login", { replace: true});
    }

    const value = useMemo(() => ({
        user,
        loading,
        messError,
        login,
        logout
    }), [user, loading, messError]);

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}
export const useAuth = () => {
    return useContext(AuthContext); // lay ra gia tri luu trong AuthContext
    /*
        user,
        loading,
        messError,
        login,
        logout
    */
}