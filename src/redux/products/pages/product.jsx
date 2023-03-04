import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import LayoutProduct from '../components/Layout';
import ListDataProduct from "../components/List";
import * as actions from "../actions/index";

const Product = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(actions.requestDataProducts());
    }, [dispatch])

    return (
        <LayoutProduct>
            <ListDataProduct/>
        </LayoutProduct>
    )
}
export default React.memo(Product);