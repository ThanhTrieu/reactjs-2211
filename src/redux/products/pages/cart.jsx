import React from "react";
import LayoutProduct from '../components/Layout';
import { createStructuredSelector } from 'reselect';
import { useSelector, useDispatch } from "react-redux";
import * as reselect from '../reselect/cart';
import { Row, Col, Image, InputNumber, Button } from "antd";
import { deleteItemCart, changeQtyItemCart } from "../actions/cart";
import { Link } from "react-router-dom";

const CartPage = () => {
    const { checkCart, carts, totalMoney } = useSelector(createStructuredSelector({
        checkCart: reselect.checkDataCart,
        carts: reselect.getDataCarts,
        totalMoney: reselect.getTotalMoney
    }));
    const dispatch = useDispatch();

    const removeItem = (id) => {
        dispatch(deleteItemCart(id));
    }

    const changeItem = (id, qty) => {
        dispatch(changeQtyItemCart(id, qty));
    }

    if(!checkCart){
        return (
            <LayoutProduct>
                <Row style={{ margin: '30px 0px' }}>
                    <Col span={20} offset={2}>
                        <h1> Gio hang chua co san pham nao !!!</h1>
                    </Col>
                </Row>
            </LayoutProduct>
        )
    }

    return (
        <LayoutProduct>
            <Row style={{ margin: '30px 0px' }}>
                <Col span={20} offset={2}>
                    {carts.map((item, index) => (
                        <Row style={{ borderBottom: 'solid 1px #ccc', padding: '10px 0px' }} key={index}>
                            <Col span={8}>
                                <Image alt={item.title} src={item.thumbnail} />
                            </Col>
                            <Col span={16} style={{ paddingLeft: '10px' }}>
                                <h2>{item.title}</h2>
                                <p>Price: {item.price}</p>
                                <p>Money: {item.price*item.qty}</p>
                                <InputNumber
                                    min={1}
                                    max={10}
                                    value={item.qty}
                                    onChange={q => changeItem(item.id, q)}
                                />
                                <Button
                                    type="dashed"
                                    danger
                                    onClick={()=>removeItem(item.id)}
                                > delete</Button>
                            </Col>
                        </Row>
                    ))}
                    <Row>
                        <Col span={24}>
                            <h2> Tong tien: {totalMoney}</h2>
                            <Link to="/payment">
                                <Button type="primary">Thanh Toan</Button>
                            </Link>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </LayoutProduct>
    )
}
export default React.memo(CartPage)