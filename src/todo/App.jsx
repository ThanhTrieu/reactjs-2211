import React from "react";
import ButtonTodo from "./components/Button";
import InputTodo from "./components/Input";
import ListTodo from "./components/Lists";

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
    }

    render(){
        //console.log(this.state.nameWork)
        return(
            <>
                <InputTodo change={this.getNameWork} type="text" />
                <ButtonTodo type="button"> Add </ButtonTodo>
                <ListTodo/>
            </>
        )
    }
}
export default AppTodo;