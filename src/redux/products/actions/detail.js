export const GET_DETAIL_PRODUCT = 'GET_DETAIL_PRODUCT';
export const getDetailProductById = (id) => ({
    type: GET_DETAIL_PRODUCT,
    id
})

export const LOADING_GET_DATA = 'LOADING_GET_DATA';
export const loadingGetData = (loading) => ({
    type: LOADING_GET_DATA,
    loading
});

export const GET_DETAIL_PRODUCT_SUCCESS = 'GET_DETAIL_PRODUCT_SUCCESS';
export const getDetailProductSuccess = (detail) => ({
    type: GET_DETAIL_PRODUCT_SUCCESS,
    detail
});

export const GET_DETAIL_PRODUCT_FAILURE = 'GET_DETAIL_PRODUCT_FAILURE';
export const getDetailProductFailure = (error) => ({
    type: GET_DETAIL_PRODUCT_FAILURE,
    error
});