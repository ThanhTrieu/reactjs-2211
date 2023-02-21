import React, { useContext } from "react";
import { Row, Col, Card } from "antd";
import ProductContext from "../context/ProductContext";

const { Meta } = Card;

const ListProducts = () => {
    const { products } = useContext(ProductContext);

    // logic xu lai products
    
    return (
        <Row>
            <Col span={20} offset={2}>
                <Row>
                    <Col span={6}>
                        <Card
                            hoverable
                            style={{
                                width: 240,
                            }}
                            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                        >
                            <Meta title="Europe Street beat" description="www.instagram.com" />
                        </Card>
                    </Col>
                </Row>
            </Col>
        </Row>
    )
}
export default React.memo(ListProducts);