import React, { useContext } from "react";
import ListProducts from './components/List-v2';
import ProductContext from './context/ProductContext';
import { Skeleton } from "antd";

const AppProducts = () => {
    const { isLoading, errors } = useContext(ProductContext);

    if(isLoading){
        return <Skeleton active />
    }

    if(errors !== null){
        return <h3>{errors.mess}</h3>
    }

    return (
        <>
            <h1> List products !!!</h1>
            <ListProducts />
        </>
    )
}
export default AppProducts;