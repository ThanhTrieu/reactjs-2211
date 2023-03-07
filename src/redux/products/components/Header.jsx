import React from "react";
import { Layout, Menu } from 'antd';
import { NavLink, useLocation } from "react-router-dom";

const { Header } = Layout;
const headerStyle = {
    textAlign: 'center',
    color: '#fff',
    // height: 64,
    // paddingInline: 50,
    // lineHeight: '64px',
    // backgroundColor: '#7dbcea',
};
const HeaderProduct = () => {
    const { pathname } = useLocation();

    const items = [
        {label: <NavLink to="/"> Home </NavLink>, key: "/"},
        {label: <NavLink to="/cart"> Cart</NavLink>, key: "/cart"}
    ];

    return (
        <Header style={headerStyle}>
            <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={pathname}
                items={items} />
        </Header>
    )
}
export default React.memo(HeaderProduct);