import React from "react";
import { useSelector } from "react-redux";
import { Row, Col, Card, Skeleton, Alert } from 'antd';
import { createStructuredSelector } from 'reselect';
import * as selector from '../reselect/product';
import { helpers } from '../helpers/common';
import { Link } from "react-router-dom";
import slugify from 'react-slugify';


const { Meta } = Card;

const ListDataProduct = () => {
    const { loading, error, products } = useSelector(createStructuredSelector({
        loading: selector.getLoadingProduct,
        error: selector.getErrorProduct,
        products: selector.getData
    }))

    if (loading && products.length === 0) {
        return <Skeleton active />
    }

    if(!helpers.isEmptyObject(error)){
        return (
            <Alert
                message="Error message"
                description={error.mess}
                type="error"
                closable
            />
        )
    }

    return (
        <Row style={{ margin: '20px 0px' }}>
            <Col span={20} offset={2}>
                <Row>
                    {products.map((items, index) => (
                        <Col span={6} key={index}>
                            <Link to={`/${slugify(items.title)}/${items.id}`}>
                                <Card
                                    hoverable
                                    style={{
                                        width: 240,
                                        marginBottom: 20
                                    }}
                                    cover={<img alt={items.title} src={items.thumbnail} />}
                                >
                                    <Meta title={items.title} description={items.description} />
                                </Card>
                            </Link>
                        </Col>
                    ))}
                </Row>
            </Col>
        </Row>
    )
}
export default React.memo(ListDataProduct)