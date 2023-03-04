import * as types from '../actions/detail';

const defaultState = {
    loading: false,
    error: {},
    detail: {}
}

export const detailReducer = (state = defaultState, action) => {
    switch(action.type){
        case types.LOADING_GET_DATA:
            return {
                ...state,
                loading: action.loading
            }
        case types.GET_DETAIL_PRODUCT_SUCCESS:
            return {
                ...state,
                error: {},
                detail: action.detail
            }
        case types.GET_DETAIL_PRODUCT_FAILURE:
            return {
                ...state,
                error: action.error
            }
        default:
            return state;
    }
}