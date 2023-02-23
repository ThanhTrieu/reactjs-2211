import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Layout, Menu } from 'antd';

const { Header } = Layout;
const items = [
    {label: <NavLink to="/">Popular</NavLink>, key: '/'},
    {label: <NavLink to="/upcoming">Upcoming</NavLink>, key: '/upcoming'},
    {label: <NavLink to="/search">Search</NavLink>, key: '/search'},
    {label: <NavLink to="/login"> Login </NavLink>}
];

const HeaderMovies = () => {
    const { pathname } = useLocation();

    return (
        <Header>
            <div className="logo" />
            <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={pathname}
                items={items}
            />
        </Header>
    )
}
export default React.memo(HeaderMovies);