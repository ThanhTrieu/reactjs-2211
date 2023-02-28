// layout nay se bao ve cac page can dang nhap moi dc truy cap
import { Navigate, useOutlet } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const ProtectedLayoutMovies = ({ children }) => {
    const { user } = useAuth();
    if(!user){
        // tu dong chuyen ve trang login - neu chua dang nhap
        return <Navigate to="/login" />
    }
    return (
        <>
            {children}
        </>
    )
}
export default ProtectedLayoutMovies;