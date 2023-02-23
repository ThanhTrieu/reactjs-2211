import React from "react";
import { Layout } from 'antd';

const { Content } = Layout;
const contentStyle = {
    textAlign: 'center',
    minHeight: 120,
    lineHeight: '120px',
    color: '#fff',
    backgroundColor: '#108ee9',
};

const ContentMovies = ({ children }) => {
    return (
        <Content style={contentStyle}>{children}</Content>
    )
}
export default React.memo(ContentMovies);