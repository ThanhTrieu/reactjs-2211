import * as types from "../actions/cart";

const stateCartDefault = {
    dataCarts: [],
    error: null
}

export const cartReducer = (state = stateCartDefault, action) => {
    switch(action.type){
        case types.ADD_PRODUCT_TO_CART:
            let dataPd = action.detail;
            let qtyPd  = action.qty;
            let idPd   = dataPd.id;
            let findPd = state.dataCarts.find(item => item.id === idPd);
            
            if(findPd === undefined){
                // chua co san pham trong gio hang
                // add to cart
                dataPd.qty = qtyPd; //them so luong vao san pham trong gio hang
                return {
                    ...state,
                    dataCarts: [...state.dataCarts, dataPd]
                }
            } else {
                // san pham da co trong gio hang
                dataPd.qty += qtyPd;
                return {
                    ...state,
                    dataCarts: state.dataCarts
                }
            }
        case types.DELETE_ITEM_CART:
            const idPdDel = action.id;
            const newDataPd = state.dataCarts.filter(item => item.id !== idPdDel);
            if(newDataPd !== undefined && newDataPd !== null){
                return {
                    ...state,
                    dataCarts: newDataPd
                }
            }
            return state;
        case types.CHANGE_QTY_ITEM_CART:
            const idChangePd  = action.id;
            const qtyChangePd = action.qty;
            const newData = state.dataCarts.map(item => {
                return (item.id === idChangePd) ? {...item, qty: qtyChangePd} : item;
            });
            if(newData !== undefined && newData !== null){
                return {
                    ...state,
                    dataCarts: newData
                }
            }
            return state;
        default:
            return state;
    }
}