import React, { useEffect, useState } from "react";
import LayoutProduct from '../components/Layout';
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as action from "../actions/detail";
import { Row, Col, Skeleton, Image, InputNumber, Button, message } from "antd";
import { createStructuredSelector } from 'reselect';
import * as reselect from "../reselect/detail";
import { helpers } from "../helpers/common";
import { addProductToCart } from "../actions/cart";

const DetailProduct = () => {
    const [qtyPd, setQtyPd] = useState(1);
    const { id } = useParams();
    const dispatch = useDispatch();
    const { loading, error, detail, pdCart } = useSelector(createStructuredSelector({
        loading: reselect.getLoading,
        error: reselect.getErrorDetail,
        detail: reselect.getDetailData,
        pdCart: reselect.getDataToAddCart
    }));
    const [messageApi, contextHolder] = message.useMessage();

    useEffect(() => {
        dispatch(action.getDetailProductById(id));
    }, [id, dispatch]);

    const addToCart = () => {
        if(!helpers.isEmptyObject(pdCart)){
            dispatch(addProductToCart(pdCart, qtyPd));
            messageApi.open({
                type: 'success',
                content: 'Add success message',
            });
        } else {
            messageApi.open({
                type: 'error',
                content: 'Co loi xay ra - vui long thu lai',
            });
        }
    }

    if(loading){
        return (
            <LayoutProduct>
                <Skeleton active />
            </LayoutProduct>
        )
    }

    if(!helpers.isEmptyObject(error)){
        return (
            <LayoutProduct>
                <Row style={{ margin: '20px 0px' }}>
                    <Col span={20} offset={2}>
                        <h3>{error['mess']}</h3>
                    </Col>
                </Row>
            </LayoutProduct>
        )
    }

    return (
        <LayoutProduct>
            <Row style={{ margin: '20px 0px' }}>
                <Col span={20} offset={2}>
                    <Row>
                        <Col span={8}>
                            <Image src={detail['thumbnail']} />
                        </Col>
                        <Col span={16} style={{ paddingLeft: '20px' }}>
                            {contextHolder}
                            <h2>{detail.title}</h2>
                            <p>Price: {detail.price}</p>
                            <p>{detail.description}</p>
                            <div>
                                <InputNumber
                                    min={1}
                                    max={10}
                                    defaultValue={1}
                                    onChange={q => setQtyPd(q)}
                                />
                                <Button
                                    type="primary"
                                    style={{ marginLeft: '10px' }}
                                    onClick={() => addToCart()}
                                > Add Cart </Button>
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </LayoutProduct>
    )
}
export default React.memo(DetailProduct);