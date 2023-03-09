import React from "react";
import router from './route/web';
import { RouterProvider } from "react-router-dom";
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from "react-redux";
import { configStore } from './store';
import { SpinLoader } from './components/common/SpinLoader';

const { store, persistor } = configStore();

export default function AppProduct(){
    return (
        <Provider store={store}>
            <PersistGate loading={<SpinLoader/>} persistor={persistor}>
                <RouterProvider router={router} />
            </PersistGate>
        </Provider>
    )
}