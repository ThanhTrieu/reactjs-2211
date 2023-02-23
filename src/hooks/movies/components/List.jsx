import React, { useContext } from "react";
import { Row, Col, Card, Skeleton } from "antd";
import Pagination from "./Pagination";
import MovieContext from "../context/MoviesContext";

const { Meta } = Card;

const ListMovies = () => {
    const { loading, movies } = useContext(MovieContext);

    if(loading){
        return <Skeleton active />
    }
    
    return (
        <Row style={{ margin: '20px 0px' }}>
            <Col span={20} offset={2}>
                <Row>
                    {movies.map((item, index) => (
                        <Col span={6} key={index}>
                            <Card
                                hoverable
                                style={{
                                    width: 240,
                                    marginBottom: 15
                                }}
                                cover={<img alt={item.title} src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} />}
                            >
                                <Meta title={item.title} />
                            </Card>
                        </Col>
                    )) }
                </Row>
                <Pagination/>
            </Col>
        </Row>
    )
}
export default React.memo(ListMovies);