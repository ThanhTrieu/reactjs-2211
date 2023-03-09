import React, { lazy, Suspense } from "react";
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    defer
} from "react-router-dom";
import { SpinLoader } from '../components/common/SpinLoader';
import NotFoundPage from '../components/common/404Page';
import AuthLayout from '../components/AuthLayout';

const ProductPage = lazy(() => import('../pages/product'));
const DetailPage  = lazy(() => import('../pages/detail'));
const CartPage    = lazy(() => import('../pages/cart'));
const PaymentPage = lazy(() => import('../pages/payment'));
const LoginPage   = lazy(() => import('../pages/login/index'));

const getUserData = () => {
    return new Promise((resolve) =>
        setTimeout(() => {
            const user = window.localStorage.getItem("user-token-login");
            resolve(user);
        }, 3000)
    );
}

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route
            element={<AuthLayout/>}
            loader={() => defer({ userPromise: getUserData() })}
            errorElement={<NotFoundPage/>}
        >
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
            <Route
                path="cart"
                element={(
                    <Suspense fallback={<SpinLoader/>}>
                        <CartPage/>
                    </Suspense>
                )}
                errorElement={<NotFoundPage/>}
            />
            <Route
                path="payment"
                element={(
                    <Suspense fallback={<SpinLoader/>}>
                        <PaymentPage/>
                    </Suspense>
                )}
                errorElement={<NotFoundPage/>}
            />
            <Route
                path="login"
                element={(
                    <Suspense fallback={<SpinLoader/>}>
                        <LoginPage/>
                    </Suspense>
                )}
                errorElement={<NotFoundPage/>}
            />
        </Route>
    )
)
export default router;