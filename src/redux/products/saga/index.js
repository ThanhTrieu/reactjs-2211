import { all, call } from 'redux-saga/effects';
import { watchGetAllProductSaga } from "./product";
import { watchDetailSaga } from "./detail";

export default function* rootSaga(){
    yield all([
        call(watchGetAllProductSaga),
        call(watchDetailSaga)
    ])
}