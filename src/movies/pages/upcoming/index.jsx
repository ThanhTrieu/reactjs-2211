import React, { useState, useEffect } from "react";
import { Row, Col } from "antd";
import LayoutMovies from "../../components/Layout";
import ListMovies from '../../components/List';
import { getDataUpcomingMovies } from '../../services/api';

const UpcomingPage = () => {
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [totalPage, setTotalPage] = useState(0);
    const [totalResult, setTotalResult] = useState(0);
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        let ignore = false;
        const getData = async () => {
            setLoading(true);

            const data = await getDataUpcomingMovies(page);
            if(data.hasOwnProperty('results')){
                setMovies(data['results']);
            }

            if(page === 1 && !ignore){
                if(data.hasOwnProperty('total_pages')){
                    setTotalPage(data['total_pages'])
                }
                if(data.hasOwnProperty('total_results')){
                    setTotalResult(data['total_results']);
                }
            }
            // call xong api
            setLoading(false);
        }
        getData();

        // cleanup
        return () => {
            ignore = true;
        }
    }, [page]); // page : bi thay doi thi chay lai useEffect

    const changePageMovies = (p) => {
        // p : tham so nguoi dung bam chon trang
        if(p >= 1 && p <= totalPage){
            setPage(p); // page thay doi - useEffect se chay lai
        }
    }

    return (
        <LayoutMovies>
            <Row>
                <Col span={24}>
                    <ListMovies
                        loading={loading}
                        movies={movies}
                        page={page}
                        totalResult={totalResult}
                        changePageMovies={changePageMovies}
                    />
                </Col>
            </Row>
        </LayoutMovies>
    )
}
export default React.memo(UpcomingPage);
