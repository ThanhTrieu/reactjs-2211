import * as types from './types';

// action la 1 fn trar vee la 1 pure object
export const decrementCounter = (val) => {
    return {
        type: types.DECREMENT_COUNTER,
        payload: { value: val }
    }
}
export const incrementCounter = (val) => ({
    type: types.INCREMENT_COUNTER,
    payload: {value: val}
})