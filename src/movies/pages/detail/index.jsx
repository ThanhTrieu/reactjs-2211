import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Row, Col, Skeleton, Image } from "antd";
import LayoutMovies from "../../components/Layout";
import { getDetailMoviesById } from '../../services/api';
import { helpers } from "../../helpers/common";

const DetailPage = () => {
    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [movie, setDetailMovie] = useState({});

    useEffect(() => {
        const getData = async () => {
            const data = await getDetailMoviesById(id);
            if(helpers.isEmptyObject(data)){
                // ko co data
                setError({cod: 404, mess: 'Not found data'});
            } else {
                // co data
                setDetailMovie(data);
                setError(null);
            }
            setLoading(false);
        }
        getData();
    }, [id]);

    if(loading){
        return (
            <LayoutMovies>
                <Row>
                    <Col span={24}>
                        <Skeleton active />
                    </Col>
                </Row>
            </LayoutMovies>
        )
    }

    if(!loading && error !== null){
        return (
            <LayoutMovies>
                <Row>
                    <Col span={24}>
                        <h3> { error.mess }</h3>
                    </Col>
                </Row>
            </LayoutMovies>
        ) 
    }

    return (
        <LayoutMovies>
            <Row
                style={{
                    minHeight: '100vh',
                    backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center center'
                }}
            >
                <Col span={8}>
                    <Image src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} />
                    <h2>{movie.original_title}</h2>
                </Col>
                <Col span={8}>
                    <h1>{movie.title}</h1>
                    <p>{movie.overview}</p>
                </Col>
                <Col span={8}>
                    
                </Col>
            </Row>
        </LayoutMovies>
    )
}
export default React.memo(DetailPage);
