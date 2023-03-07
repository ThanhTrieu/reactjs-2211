import { call, put, takeEvery } from 'redux-saga/effects';
import { api } from "../services/api";
import * as actions from "../actions/detail";
import { helpers } from "../helpers/common";

export function* detailSaga({ id }){
    try {
        yield put(actions.loadingGetData(true));
        const data = yield call(api.getDetailProductById, id);
        if(!helpers.isEmptyObject(data)){
            yield put(actions.getDetailProductSuccess(data));
        } else {
            yield put(actions.getDetailProductFailure({
                cod: 404,
                mess: 'Not found data'
            }));
        }
    } catch (error) {
        yield put(actions.getDetailProductFailure({
            cod: 500,
            mess: error
        }))
    } finally {
        yield put(actions.loadingGetData(false));
    }
}

export function* watchDetailSaga(){
    yield takeEvery(actions.GET_DETAIL_PRODUCT, detailSaga);
}