import React from "react";
import { RouterProvider } from 'react-router-dom';
import router from "./routes/Web";

const AppMovies = () => {
    return (
        <RouterProvider router={router}/>
    )
}
export default AppMovies;