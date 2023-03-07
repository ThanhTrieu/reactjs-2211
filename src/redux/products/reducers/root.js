import { combineReducers } from 'redux';
import { productReducer as product } from './product';
import { detailReducer as detail } from './detail';
import { cartReducer as cart } from "./cart";

const rootReducer = combineReducers({
    product,
    detail,
    cart
});
export default rootReducer;