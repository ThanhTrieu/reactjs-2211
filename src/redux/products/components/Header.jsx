import React from "react";
import { Layout } from 'antd';

const { Header } = Layout;
const headerStyle = {
    textAlign: 'center',
    color: '#fff',
    height: 64,
    paddingInline: 50,
    lineHeight: '64px',
    backgroundColor: '#7dbcea',
};
const HeaderProduct = () => {
    return (
        <Header style={headerStyle}>Header Product</Header>
    )
}
export default React.memo(HeaderProduct);