import React from "react";
import { Layout } from 'antd';
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import './style.css';

const LayoutMovies = ({ children }) => {
    return (
        <Layout>
            <Header/>
            <Content>
                { children }
            </Content>
            <Footer/>
        </Layout>
    )
}
export default React.memo(LayoutMovies);