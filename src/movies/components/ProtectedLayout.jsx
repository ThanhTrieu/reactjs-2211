// layout nay se bao ve cac page can dang nhap moi dc truy cap
import { Navigate, useOutlet } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const ProtectedLayoutMovies = () => {
    const { user } = useAuth();
    const outlet = useOutlet();

    if(!user){
        // tu dong chuyen ve trang login - neu chua dang nhap
        return <Navigate to="/login" />
    }
    return (
        <>
            {outlet}
        </>
    )
}
export default ProtectedLayoutMovies;