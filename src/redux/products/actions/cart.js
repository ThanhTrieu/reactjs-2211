export const ADD_PRODUCT_TO_CART = 'ADD_PRODUCT_TO_CART';
export const addProductToCart = (detail, qty) => ({
    type: ADD_PRODUCT_TO_CART,
    detail,
    qty
});

export const DELETE_ITEM_CART = 'DELETE_ITEM_CART';
export const deleteItemCart = (id) => ({
    type: DELETE_ITEM_CART,
    id
});

export const CHANGE_QTY_ITEM_CART = 'CHANGE_QTY_ITEM_CART';
export const changeQtyItemCart = (id, qty) => ({
    type: CHANGE_QTY_ITEM_CART,
    id,
    qty
})