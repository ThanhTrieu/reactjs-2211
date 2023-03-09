import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { productReducer as product } from './product';
import { detailReducer as detail } from './detail';
import { cartReducer as cart } from "./cart";

const cartPersistConfig = {
    key: 'cart',
    storage: storage,
    whitelist: ['dataCarts']
}
const rootPersistConfig = {
    key: 'root',
    storage: storage,
    whitelist: ['cart']
}

const rootReducer = combineReducers({
    product,
    detail,
    cart: persistReducer(cartPersistConfig, cart)
});
export default persistReducer(rootPersistConfig, rootReducer);