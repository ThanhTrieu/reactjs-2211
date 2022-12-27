import React from "react";
import Button from './components/Button';
import Result from "./components/Result";

export default class Counter extends React.Component {

    constructor(props){
        super(props);

        // khai bao thuoc de dinh nghia state
        this.state = {
            count : 0
        }
    }

    increment = () => {
        // tang gia tri cua state :count len 1 don vi
        // trong class component chi co duy nhat cach su dung setState de cap nhat stae cua ung dung
        this.setState({...this.state, count: this.state.count + 1}); 
    }

    decrement = () => {
        this.setState((state) => {
            // current state
            // return gia tri
            return {...state, count: state.count - 1}
        });
    }

    render(){
        return (
            <>
                <Result result={this.state.count} />
                <Button
                    name="increment"
                    type="button"
                    click={this.increment}
                >
                +</Button>
                <Button
                    name="decrement"
                    type="button"
                    click={this.decrement}
                >-</Button>
            </>
        )
    }
}