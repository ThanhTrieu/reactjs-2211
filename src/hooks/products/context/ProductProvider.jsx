import React, { useState, useEffect } from "react";
import ProductContext from "./ProductContext";
import { api } from '../services/api';

const ProductProvider = ({ children }) => {
    // noi xu ly lay data va share du lieu o dang toan cuc
    // sau nay cac component hay cac ung dung se can truy cap vao thang nay de lay data
    // sau nay cac component hay cac ung dung do se dung hooks useContext de lay data ra
    const [isLoading, setLoading] = useState(true);
    const [products, setProduct] = useState([]);
    const [errors, setError] = useState(null);
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
    }, []);

    return (
        <ProductContext.Provider value={{ isLoading, errors, products }}>
            {children}
        </ProductContext.Provider>
    )

}
export default ProductProvider;