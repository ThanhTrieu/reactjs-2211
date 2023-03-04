import React from "react";
import { Layout } from 'antd';


const { Content } = Layout;
const contentStyle = {
    textAlign: 'center',
    minHeight: '100vh',
    lineHeight: '120px',
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