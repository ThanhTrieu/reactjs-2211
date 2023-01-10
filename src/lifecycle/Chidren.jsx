import React from "react";

export default class ChildrenComponent extends React.Component {

    componentWillUnmount(){
        console.log('*** ChildrenComponent removed ****');
    }

    render(){
        return (
            <h3>
                This is a ChildrenComponent
            </h3>
        )
    }
}