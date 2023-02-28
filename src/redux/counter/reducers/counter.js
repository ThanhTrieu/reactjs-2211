import * as types from '../actions/types';

const defaultState = {
    count: 0
}

export const counterReducer = (state = defaultState, action) => {
    switch(action.type){
        case types.DECREMENT_COUNTER:
            return {
                ...state,
                count: state.count - action.payload.value
            }
        case types.INCREMENT_COUNTER:
            return {
                ...state,
                count: state.count + action.payload.value
            }
        default:
            return state;
    }
}