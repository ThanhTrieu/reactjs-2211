import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Content from "./components/Content";
import List from "./components/List";
import { Layout } from "antd";
import MoviesProvider from "./context/MoviesProvider";

const Movies = () => {
    return (
        <Layout>
            <Header/>
            <Content>
                <MoviesProvider>
                    {/* chi co component List va Pagination moi lay dc data tu provider */}
                    <List/>
                </MoviesProvider>
            </Content>
            <Footer/>
        </Layout>
    )
}
export default Movies;