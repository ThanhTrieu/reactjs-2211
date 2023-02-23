import React from "react";
import { Layout, Menu } from 'antd';

const { Header } = Layout;
const items = [
    {label: 'Popular', key: '/'},
    {label: 'Upcoming', key: '/upcoming'},
    {label: 'Search', key: '/search'}
];

const HeaderMovies = () => {
    return (
        <Header>
            <div className="logo" />
            <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={['/']}
                items={items}
            />
        </Header>
    )
}
export default React.memo(HeaderMovies);