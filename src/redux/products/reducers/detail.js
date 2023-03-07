import * as types from '../actions/detail';

const defaultState = {
    loadingDetail: false,
    errorDetail: {},
    detail: {}
}

export const detailReducer = (state = defaultState, action) => {
    switch(action.type){
        case types.LOADING_GET_DATA:
            return {
                ...state,
                loadingDetail: action.loading
            }
        case types.GET_DETAIL_PRODUCT_SUCCESS:
            return {
                ...state,
                errorDetail: {},
                detail: action.detail
            }
        case types.GET_DETAIL_PRODUCT_FAILURE:
            return {
                ...state,
                errorDetail: action.error
            }
        default:
            return state;
    }
}