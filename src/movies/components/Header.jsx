import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Layout, Menu, Button } from 'antd';
import { useAuth } from "../hooks/useAuth";

const { Header } = Layout;


const HeaderMovies = () => {
    const { pathname } = useLocation();
    const { user, logout } = useAuth();

    let items = [
        {label: <NavLink to="/">Home</NavLink>, key: "/"},
        {label: <NavLink to="/movies/upcoming">Upcoming</NavLink>, key: "/movies/upcoming"},
        {label: <NavLink to="/movies/search">Search</NavLink>, key: "/movies/search"},
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