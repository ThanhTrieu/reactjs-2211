import React, { lazy, Suspense } from "react";
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
} from "react-router-dom";
import { SpinLoader } from '../components/common/SpinLoader';
import NotFoundPage from '../components/common/404Page';

const ProductPage = lazy(() => import('../pages/product'));
const DetailPage  = lazy(() => import('../pages/detail'));

const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route
                path="/"
                element={(
                    <Suspense fallback={<SpinLoader/>}>
                        <ProductPage/>
                    </Suspense>
                    
                )}
                errorElement={<NotFoundPage/>}
            />
            <Route
                path=":slug/:id"
                element={(
                    <Suspense fallback={<SpinLoader/>}>
                        <DetailPage/>
                    </Suspense>
                )}
                errorElement={<NotFoundPage/>}
            />
        </>
    )
)
export default router;