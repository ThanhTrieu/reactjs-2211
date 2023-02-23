import React, { useContext } from "react";
import { Pagination } from 'antd';
import MovieContext from "../context/MoviesContext";

const PaginationMovies = () => {
    const { page, totalResult, changePageMovies } = useContext(MovieContext);

    return (
        <Pagination
            current={page}
            total={totalResult}
            showSizeChanger={false}
            pageSize={20}
            onChange={p => changePageMovies(p)}
        />
    )
} 
export default React.memo(PaginationMovies);