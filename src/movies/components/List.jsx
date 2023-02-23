import React from "react";
import { Row, Col, Card, Skeleton } from "antd";
import Pagination from "./Pagination";
import { Link } from "react-router-dom";
import slugify from 'react-slugify';

const { Meta } = Card;

const ListMovies = ({ 
    loading, movies, page, totalResult, changePageMovies
}) => {
    
    if(loading){
        return <Skeleton active />
    }
    
    return (
        <Row style={{ margin: '20px 0px' }}>
            <Col span={20} offset={2}>
                <Row>
                    {movies.map((item, index) => (
                        <Col span={6} key={index}>
                            <Link to={`/movies/${slugify(item.title)}/${item.id}`}>
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
                            </Link>
                        </Col>
                    )) }
                </Row>
                <Pagination
                    page={page}
                    totalResult={totalResult}
                    changePageMovies={changePageMovies}
                />
            </Col>
        </Row>
    )
}
export default React.memo(ListMovies);