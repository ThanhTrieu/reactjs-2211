import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Layout, Menu, Button } from 'antd';
import { useAuth } from "../hooks/useAuth";

const { Header } = Layout;


const HeaderMovies = () => {
    const { pathname } = useLocation();
    const { user, logout } = useAuth();
    let items = [
        {label: <NavLink to="/">Popular</NavLink>, key: '/'},
        {label: <NavLink to="/upcoming">Upcoming</NavLink>, key: '/upcoming'},
        {label: <NavLink to="/search">Search</NavLink>, key: '/search'},
    ];
    if(user){
        // da login
        items = [
            ...items,
            { label: `Hi : ${user['username']}` },
            { label: <Button onClick={() => logout()}> Logout </Button>}
        ]
    } else {
        // chua login
        items = [
            ...items,
            { label: <NavLink to="/login"> Login </NavLink> }
        ]
    }

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