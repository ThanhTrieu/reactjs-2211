// dinh nghia class compoent
import React from "react";

class HeaderCompoent extends React.Component {
    
    render(){
        console.log(this.props.color);
        // hien thi giao dien
        // noi de code ma jsx
        return (
            <header>
                <h1 style={{color: this.props.color}}> ReactJS</h1>
            </header>
        )
    }
}
export default HeaderCompoent;