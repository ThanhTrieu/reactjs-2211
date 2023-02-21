import React from "react";
import ProductProvider from "./context/ProductProvider";
import AppProducts from './Product';

const IndexPage = () => {
    return (
        <ProductProvider>
            {/* tat ca nhung thanh phan trong AppProducts se lay dc data tu ProductProvider - khong can su dung props  */}
            <AppProducts/>
        </ProductProvider>
    )
}
export default IndexPage;