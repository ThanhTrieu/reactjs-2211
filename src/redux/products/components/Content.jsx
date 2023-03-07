import React from "react";
import { Layout } from 'antd';


const { Content } = Layout;
const contentStyle = {
    minHeight: '100vh',
    color: '#fff',
    backgroundColor: '#108ee9',
};
const ContentProduct = ({ children }) => {
    return (
        <Content style={contentStyle}>
            {children}
        </Content>
    )
}
export default React.memo(ContentProduct);