import React from "react";
import Decrement from "../components/Decrement";
import Increment from "../components/Increment";
import Result from "../components/Result";

const Counter = () => {
    return (
        <>
            <Result/>
            <Increment/>
            <Decrement/>
        </>
    )
}
export default Counter;