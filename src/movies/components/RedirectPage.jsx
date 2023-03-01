// layout nay se bao ve cac page can dang nhap moi dc truy cap
import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { SpinLoader } from "./commons/SpinLoader.jsx";

const RedirectPage = () => {
    const { user } = useAuth();

    if(user){
        // tu dong chuyen ve trang login - neu chua dang nhap
        return <Navigate to="/movies/upcoming" />
    }
    return (
        <SpinLoader/>
    )
}
export default RedirectPage;