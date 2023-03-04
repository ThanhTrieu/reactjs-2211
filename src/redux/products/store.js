import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from "./reducers/root";
import rootSaga from "./saga/index";
import logger from "redux-logger";

// tao middleware cua saga
const sagaMiddleware = createSagaMiddleware();
export const configStore = () => {
    const store = createStore(
        rootReducer,
        applyMiddleware(logger, sagaMiddleware)
    );
    // chay saga - run saga
    sagaMiddleware.run(rootSaga);
    // tra gia tri store
    return { store }
}