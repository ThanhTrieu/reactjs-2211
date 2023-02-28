import { combineReducers } from 'redux';
import { productReducer as product } from './product';

const rootReducer = combineReducers({
    product
});
export default rootReducer;