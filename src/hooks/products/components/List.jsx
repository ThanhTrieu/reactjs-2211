import React from "react";
import { Row, Col, Card } from "antd";

const { Meta } = Card;

const ListProducts = ({ products }) => {
    <Row>
        <Col span={20} offset={2}>
            <Row>
                {products.map((item, index) => (
                    <Col span={6} key={index}>
                        <Card
                            hoverable
                            style={{
                                width: 240,
                                marginBottom: 10
                            }}
                            cover={<img alt={item.title} src={item.image} />}
                        >
                            <Meta title={item.title} />
                            <p>Price: {item.price}</p>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Col>
    </Row>
}
export default React.memo(ListProducts);