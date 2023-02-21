import React, { useState, useEffect } from "react";
import { Skeleton } from 'antd';
import { api } from './services/api';
import ListProducts from './components/List';

const AppProducts = () => {
    // khai bao state - cap nhat state
    const [isLoading, setLoading] = useState(true);
    const [products, setProduct] = useState([]);
    const [errors, setError] = useState(null);

    // su dung useEffect de xua ly cac side Effect tuong tac voi ung dung - trong truong hop nay cu the la call api tuong tac voi DOM
    // su dung useEffect de trien khai viet 
    useEffect(() => {
        // xu ly logic call api o day - dinh nghia ham xu ly
        const getData = async () => {
            const data = await api.getAllDataProducts();
            if(data.length > 0){
                setProduct(data);
                setError(null);
            } else {
                setProduct([]);
                setError({mess: 'Not found data'})
            }
            setLoading(false);
        }
        // goi ham ra de thuc thi
        getData();
    }, [id]); // tuong duong voi componentDidMount(class component), tham so thu 2 la 1 mang rong
    
    if(isLoading){
        return (
            <Skeleton active />
        )
    }
    if(errors !== null) {
        return (
            <h3> {errors.mess} </h3>
        )
    }

    return (
        <>
            <h1> List products !!!</h1>
            <ListProducts products={products} />
        </>
    )
}
export default AppProducts;