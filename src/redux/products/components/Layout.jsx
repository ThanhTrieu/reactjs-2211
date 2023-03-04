import React from "react";
import { Layout } from "antd";
import FooterProduct from "./Footer";
import HeaderPdoduct from "./Header";
import ContentProduct from "./Content";

const LayoutProduct = ({ children }) => {
    return (
        <Layout>
            <HeaderPdoduct/>
            <ContentProduct>
                {children}
            </ContentProduct>
            <FooterProduct/>
        </Layout>
    )
}
export default React.memo(LayoutProduct);