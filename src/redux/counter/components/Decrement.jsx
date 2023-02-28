import React from "react";
import { decrementCounter } from "../actions/counter";
import { useDispatch } from "react-redux";

const Decrement = () => {
    const dispatch = useDispatch();

    return (
        <button
            type="button"
            onClick={() => dispatch(decrementCounter(1))}
        > - </button>
    )
}
export default React.memo(Decrement);