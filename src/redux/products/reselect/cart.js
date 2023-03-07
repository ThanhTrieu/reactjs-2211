import { createSelector } from "reselect";

const cartState = state => state.cart;

export const getDataCarts = createSelector(
    cartState,
    items => items.dataCarts
)

export const checkDataCart = createSelector(
    getDataCarts,
    items => items.length > 0
)

export const getTotalMoney = createSelector(
    getDataCarts,
    items => {
        if(items.length > 0){
            return items.map(item => item.qty * item.price)
                    .reduce((n,c) => n+c);
        }
        return 0;
    }
)