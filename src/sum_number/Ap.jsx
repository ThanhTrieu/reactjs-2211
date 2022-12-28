import React from "react";
import Error from "./components/Error";
import Button from "./components/Button";
import Result from "./components/Result";
import Input from "./components/Input";

class AppSumNumber extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            error: "",
            hsa: 0,
            hsb: 0,
            result: ""
        }
    }

    changeInput = (e) => {
        //console.log(e.target.value, e.target.name);
        const nameInput = e.target.name.trim();
        if(nameInput === 'hsa'){
            let a = e.target.value.trim();
            if(!isNaN(a)){
                a = Number.parseFloat(a);
                this.setState({...this.state, hsa: a, error: '' });
            } else {
                this.setState({...this.state, error: `Vui long nhap he so a la so`});
            }
        } else if(nameInput === 'hsb'){
            let b = e.target.value.trim();
            if(!isNaN(b)){
                b = Number.parseFloat(b);
                this.setState({...this.state, hsb: b, error: '' });
            } else {
                this.setState({...this.state, error: `Vui long nhap he so b la so`});
            }
        }
    }

    tinhTong = () => {
        if(this.state.error === ''){
            const sum = this.state.hsa + this.state.hsa;
            this.setState({...this.state, result: `Tong 2 so la ${sum}`});
        } else {
            this.setState({...this.state, result: ''});
        }
    }

    render(){
        return(
            <>
                <Error error={this.state.error} />
                <Input  
                    type="text"
                    name="hsa"
                    change={this.changeInput}
                />
                <br/>
                <Input
                    type="text"
                    name="hsb"
                    change={this.changeInput}
                />
                <br/>
                <Button click={this.tinhTong}>Tinh tong</Button>
                <Result result={this.state.result} />
            </>
        )
    }
}
export default AppSumNumber;