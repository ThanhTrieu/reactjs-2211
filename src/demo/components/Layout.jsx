import React from "react";
import Header from './partials/Header';
import Footer from './partials/Footer';

class LayoutComponent extends React.Component {

    render(){
        return (
            <>
                <div style={{backgroundColor: this.props.bg}}>
                    <Header color="red" />
                    {this.props.children}
                    <Footer/>
                </div>
            </>
        )
    }
}
export default LayoutComponent;