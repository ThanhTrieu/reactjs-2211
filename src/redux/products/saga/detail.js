import { call, put, takeEvery } from 'redux-saga/effects';
import { api } from "../services/api";
import * as actions from "../actions/detail";
import { helpers } from "../helpers/common";

export function* detailSaga({ id }){
    try {
        
    } catch (error) {
        
    } finally {

    }
}

export function* watchDetailSaga(){
    yield takeEvery(actions.GET_DETAIL_PRODUCT, detailSaga);
}