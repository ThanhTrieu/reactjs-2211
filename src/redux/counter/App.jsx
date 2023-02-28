import React from "react";
import { Provider } from "react-redux";
import Counter from './pages/Counter';
import store from "./store";

const AppCounter = () => {
    return (
        <Provider store={store}>
            <Counter/>
        </Provider>
        
    )
}
export default AppCounter;