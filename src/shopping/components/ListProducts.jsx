import React from "react";
import { Row, Col, Card } from 'antd';

const { Meta } = Card;

const ListProducts = (props) => {

    return (
        <Row style={{ margin: '20px 0px' }}>
            {props.data.map((item, index) => (
                <Col span={6} key={index}>
                    <Card
                        hoverable
                        style={{ width:'280px', marginBottom: '20px' }}
                        cover={<img alt={item.title} src={item.image} />}
                    >
                        <Meta title={item.title} />
                    </Card>
                </Col>
            ))}
        </Row>
    )
}
export default React.memo(ListProducts);