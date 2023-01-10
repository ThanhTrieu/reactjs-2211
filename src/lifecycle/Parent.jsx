// test - demo lifecycle class component
import React from "react";
import ChildrenComponent from "./Chidren";
import { Button } from 'antd';

export default class ParentComponent extends React.Component {
    // 1- mounting (Component duoc khoi tao - hinh thanh)
    constructor(props){
        super(props); // override lai constructor React.Component
        // day la phuong thuc chay dau trien trong giai doan mounting
        // chi chay duy nhat 1 lan trong giai doan mounting
        // thong thuong: se la noi dinh nghia cac thuoc tinh trong  class component (trong do co phan khai bao state)
        this.state = {
            count: 0,
            color: 'red',
            show: true
        }
        console.log('****** constructor running ********')
    }

    static getDerivedStateFromProps(props, state) {
        // muc dich: cap nhat lai state cua component hien tai theo gia tri props tu mot component khac truyen vao hay ko ?
        // cu the trong truong hop nay : co muon thay doi state count ban dau theo 1 gia tri props nao do tu 1 component khac truyen vao hay ko ?
        console.log('****** getDerivedStateFromProps *****');
        console.log('props', props);
        console.log('state', state);
        console.log('****** ///////////////////////// *****');
        // method nay chay ca o 2 giai doan - mounting va updating
        return null;
    }

    componentDidMount(){
        // day la phuong thuc chay cuoi cung trong giai doan mounting
        // chi chay duy nhat 1 lan trong giai doan mounting
        // sau khi component duoc hinh thanh va hien thi thi componentDidMount se chay neu duoc goi
        console.log('********* componentDidMount running *********');
        // thong thuong: se la noi call api tu ben sang ben phia backend
        // cap nhat lai state va giao dien neu can
    }

    changeCount = () => {
        this.setState({
            ...this.state,
            count: this.state.count + 1,
            color: 'blue'
        });
    }

    shouldComponentUpdate(nextProps, nextState) {
        // chi chay o giai doan updating
        console.log('******* shouldComponentUpdate running ********')
        // thong thuong de xy ly viec kiem tra lai co can render lai giao dien ko ? (khong khai bao su dung khi class component da ke thua PureComponent - vi PureComponent da mac dinh co va ho tro )
        // ham nay tra ve true thi giao dien dc cap nhat la - tra ve false thi ko (bat buoc return va tru or false)
        console.log('nextProps', nextProps);
        console.log('nextState', nextState);
        console.log('currentState', this.state.count);
        console.log('******* //////////////////// ********')
        return true; //nextState.count !== this.state.count;
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        // ham nay chi chay o giai doan updating
        // chay sau ham render
        // thong thuong: bo tro va tra ket qua ve cho componentDidUpdate
        // khi khai bao ham nay thi bat buoc phai co componentDidUpdate (khong bat buoc chieu nguoc lai)
        console.log('******* getSnapshotBeforeUpdate running ********');
        console.log('prevProps', prevProps);
        console.log('prevState', prevState);
        console.log('******* ////////////////////////////// ********');
        // this.setState({count: prevState.count + 2});
        return 'yellow'; //prevState.count - 10;
    }

    componentDidUpdate(prevProps, prevState, snapshot){
        // chay cuoi cung trong updating
        console.log('******* componentDidUpdate running ********');
        console.log('prevProps', prevProps);
        console.log('prevState', prevState);
        console.log('snapshot', snapshot); // ket qua getSnapshotBeforeUpdate tra ve (neu co)
        console.log('******* ////////////////////////////// ********');
        //this.setState({count: snapshot });
        document.getElementById('title').style.color = snapshot;
    }

    showHideComponent = () => {
        this.setState({
            ...this.state,
            show: !this.state.show
        })
    }

    render(){
        console.log('************ render running *********');
        // day la noi de hien giao dien ung dung
        // method nay chay ca o 2 giai doan - mounting va updating
        return (
            <>
                <h1 id="title" style={{ color: this.state.color }}>count: {this.state.count}</h1>
                { this.state.show && <ChildrenComponent/> } 
                <Button
                    type="primary"
                    onClick={()=> this.changeCount()}
                > + </Button>
                <Button
                    type="primary"
                    onClick={()=> this.showHideComponent()}
                > Hide/Show ChildrenComponent </Button>
            </>
        )
    }
}