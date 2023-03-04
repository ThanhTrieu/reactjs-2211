import React from "react";
import LayoutProduct from '../components/Layout';
import { Row,Col } from "antd";

const DetailProduct = () => {
    return (
        <LayoutProduct>
            <Row style={{ margin: '20px 0px' }}>
                <Col span={20} offset={2}>
                    <h3>This is ddetail page</h3>
                </Col>
            </Row>
        </LayoutProduct>
    )
}
export default React.memo(DetailProduct);