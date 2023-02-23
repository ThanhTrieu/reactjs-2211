import React from "react";
import { Pagination } from 'antd';

const PaginationMovies = ({page, totalResult, changePageMovies}) => {
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