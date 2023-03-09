import React from 'react';
import LayoutProduct from '../components/Layout';
import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const Payment = () => {
    const { user } = useAuth();

    if(user === null || user === undefined){
        return <Navigate to="/login?asPath=payment" />
    }

    return (
        <LayoutProduct>
            payment
        </LayoutProduct>
    )
}
export default React.memo(Payment)