import React from "react";
import { Row, Col } from "antd";
import ListProducts from "./components/ListProducts";
import LoadingApp from "./components/commons/Loading";
import { api } from "./services/api";

export default class ShoppingApp extends React.PureComponent {
    constructor(props){
        super(props);
        this.state = {
            loading: true,
            products: []
        }
    }

    async componentDidMount(){
        try {
            // call api de lay data ve
            const dataProducts = await api.getAllDataProducts();
            if(dataProducts.length > 0){
                // co du lieu
                // cap nhat lai state products
                this.setState({ products: [] }, () => this.setState({ products: dataProducts }));
            }
            // ket thuc viec lay data tu api
            this.setState({...this.state, loading: false});
        } catch (error) {
            console.log('error', error);
        }
    }

    render(){
        if(this.state.loading){
            return (
                <Row style={{ marginTop: '30px' }}>
                    <Col span={20} offset={2}>
                        <LoadingApp/>
                    </Col>  
                </Row>
            )
        }

        if(!this.state.loading && this.state.products.length === 0){
            return (
                <Row style={{ marginTop: '30px' }}>
                    <Col span={20} offset={2}>
                        <h2> Khong co du lieu</h2>
                    </Col>  
                </Row>
            )
        }
        
        return(
            <Row>
                <Col span={20} offset={2}>
                    <ListProducts data={this.state.products} />
                </Col>
            </Row>
        )
    }
}