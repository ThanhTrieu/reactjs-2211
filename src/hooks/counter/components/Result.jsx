import React from "react";

const ResultCounter = (props) => {
    return (
        <h1>{props.result}</h1>
    )
}
export default React.memo(ResultCounter);