import React from "react";
import Layout from './components/Layout';

class AppDemo extends React.Component {

    clickMe = () => {
        alert(' hi you');
    }

    chooseGender = (e) => {
        console.log(e.target.value);
    }

    myKeyUp = (e) => {
        console.log(e.target.value);
    }

    render(){
        return(
            <Layout bg="#ccc">
                <h4> This is content</h4>
                <button onClick={this.clickMe}> click me </button>
                <select onChange={this.chooseGender}>
                    <option value=""> -- Gioi tinh --</option>
                    <option value={1}> Nam</option>
                    <option value={2}> Nu</option>
                </select>
                <input onKeyUp={this.myKeyUp} />
            </Layout>
        )
    }
}
export default AppDemo;