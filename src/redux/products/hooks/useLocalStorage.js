// custom hooks de luu thong tin tu api vao localStorage
import { useState } from "react";

export const useLocalStorage = (keyName, defaultValue) => {
    //keyName: ten cua luu vao trong local storage
    //defaultValue: gia tri mac dinh luu vao trong local storage
    const [storeValue, setStoreValue] = useState(() => {
        try {
            // lay gia tri tu trong local storage ra neu co
            const value = window.localStorage.getItem(keyName);
            if(value){
                // conver to json string
                return JSON.parse(value); // tra gia tri ve cho storeValue
            } else {
                // luu gia tri vao local storage
                window.localStorage.setItem(keyName, JSON.stringify(defaultValue));
                return defaultValue; // tra gia tri ve cho storeValue
            }
        } catch (error) {
            console.log(error);
            return defaultValue;
        }
    }); // het phan xu ly cho storeValue

    // xu ly setStoreValue
    const setValue = (newValue) => {
        try {
            window.localStorage.setItem(keyName, JSON.stringify(newValue));
        } catch (error) {
            console.log(error);
        }
        setStoreValue(newValue); // cap nhat lai state storeValue = newValue (newValue : da duoc luu trong local storage)
    }
    return [storeValue, setValue];
}