import React from "react";
import { Row, Col } from "antd";
import LayoutMovies from "../../components/Layout";

const PopularPage = () => {
    return (
        <LayoutMovies>
            <Row>
                <Col span={24}>
                    <h3> This is popular page</h3>
                </Col>
            </Row>
        </LayoutMovies>
    )
}
export default React.memo(PopularPage);