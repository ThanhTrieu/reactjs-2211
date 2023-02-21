import React from "react";

const ButtonCounter = (props) => {
    return (
        <button
            type={props.type}
            name={props.name}
            onClick={() => props.click()}
        >
            {props.children}
        </button>
    )
}
export default React.memo(ButtonCounter);