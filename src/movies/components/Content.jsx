import React from "react";
import { Layout } from 'antd';
import BreadcrumbMovies from "./Breadcrumb";

const { Content } = Layout;

const ContentMovies = ({ children }) => {
    return (
        <Content
            style={{
                padding: '0 50px',
            }}
        >   
            <BreadcrumbMovies/>
            <div
                className="site-layout-content"
                style={{ background: '#ffffff' }}
            >
                { children }
            </div>
        </Content>
    )
}
export default React.memo(ContentMovies);