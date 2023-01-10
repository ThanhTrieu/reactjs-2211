import React from "react";
import ButtonTodo from "./components/Button";
import InputTodo from "./components/Input";
import ListTodo from "./components/Lists";
import HeaderTodo from "./components/Header";
import FooterTodo from "./components/Footer";

class AppTodo extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            idWork: 1,
            nameWork: "",
            dataWorks: []
        }
    }

    getNameWork = e => {
        const myWork = e.target.value.trim();
        if(myWork.length > 0){
            this.setState({...this.state, nameWork: myWork});
        }
    }

    addTodo = () => {
        // cap nhat tang state id cong viec
        // cap nhat lai state dataWorks - luu y no la 1 mang
        // ten cong viec thi lay tu state : nameWork
        this.setState({
            ...this.state,
            idWork: this.state.idWork + 1,
            dataWorks: [...this.state.dataWorks, {
                id: this.state.idWork,
                name: this.state.nameWork,
                done: false
            }],
            nameWork: ''
        });
    }

    removeItemTodo = (id) => {
        const newData = this.state.dataWorks.filter(item => item.id !== id);
        // newData: chua toan bo du lieu ko ton tai id can xoa
        if(newData !== undefined){
            this.setState({...this.state, dataWorks: newData})
        }
    }

    finishIemTodo = (id) => {
        const newsTodo = this.state.dataWorks.map(item => {
            return item.id === id ? {...item, done: !item.done} : item;
        });
        if(newsTodo !== undefined){
            this.setState({...this.state, dataWorks: newsTodo});
        }
    }

    render(){
        return(
            <>
                <HeaderTodo/>
                <InputTodo
                    change={this.getNameWork}
                    type="text"
                    val={this.state.nameWork}
                />
                <ButtonTodo
                    type="button"
                    click={this.addTodo}
                > Add </ButtonTodo>
                <ListTodo
                    todo={this.state.dataWorks}
                    remove={this.removeItemTodo}
                    finish={this.finishIemTodo}
                />
                <FooterTodo/>
            </>
        )
    }
}
export default AppTodo;