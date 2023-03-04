import React from "react";
import router from './route/web';
import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { configStore } from './store';

const { store } = configStore();

export default function AppProduct(){
    return (
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>
    )
}