import { createSelector } from 'reselect';

const detailState = state => state.detail;

export const getLoading = createSelector(
    detailState,
    state => state.loadingDetail
);

export const getErrorDetail = createSelector(
    detailState,
    state => state.errorDetail
)

export const getDetailData = createSelector(
    detailState,
    state => state.detail
)

export const getDataToAddCart = createSelector(
    getDetailData,
    item => ({
        id: item.id,
        title: item.title,
        thumbnail: item.thumbnail,
        price: item.price
    })
)