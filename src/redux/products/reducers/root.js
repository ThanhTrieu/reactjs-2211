import { combineReducers } from 'redux';
import { productReducer as product } from './product';
import { detailReducer as detail } from './detail';

const rootReducer = combineReducers({
    product,
    detail
});
export default rootReducer;