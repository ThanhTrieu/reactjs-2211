import React from "react";
import { Layout } from 'antd';

const { Footer } = Layout;
const footerStyle = {
    textAlign: 'center',
    color: '#fff',
    backgroundColor: '#7dbcea',
};

const FooterMovies = () => {
    return (
        <Footer style={footerStyle}>Footer</Footer>
    )
}
export default React.memo(FooterMovies);