import React from 'react';
import { Layout } from 'antd';

const { Footer } = Layout;
const footerStyle = {
    textAlign: 'center',
    color: '#fff',
    backgroundColor: '#7dbcea',
};

const FooterProduct = () => {
    return (
        <Footer style={footerStyle}>
            Footer Product
        </Footer>
    )
}
export default React.memo(FooterProduct);