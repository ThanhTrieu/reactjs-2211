import React from "react";
import { Row, Col } from "antd";
import LayoutMovies from "../../components/Layout";

const SearchPage = () => {
    return (
        <LayoutMovies>
            <Row>
                <Col span={24}>
                    <h3> This is Search page</h3>
                </Col>
            </Row>
        </LayoutMovies>
    )
}
export default React.memo(SearchPage);
