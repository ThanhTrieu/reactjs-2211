import { lazy, Suspense } from 'react';
import { createBrowserRouter, defer } from 'react-router-dom';
import AuthLayoutMovies from '../components/AuthLayout';
import ProtectedLayoutMovies from '../components/ProtectedLayout';
import PublicLayout from "../components/PublicLayout";
import RedirectPage from "../components/RedirectPage";
import ErrorPage from "../components/commons/404Page";
import { SpinLoader } from "../components/commons/SpinLoader";

const HomePage     = lazy(() => import('../pages/home/index'));
const UpcomingPage = lazy(() => import('../pages/upcoming/index'));
const SearchPage   = lazy(() => import('../pages/search/index'));
const DetailPage   = lazy(() => import('../pages/detail/index'));
const LoginPage    = lazy(() => import('../pages/login/index'));


const getUserData = () => {
    return new Promise((resolve) =>
        setTimeout(() => {
            const user = window.localStorage.getItem("user-token-login");
            resolve(user);
        }, 3000)
    );
}

const router = createBrowserRouter([
    {
        element: <AuthLayoutMovies/>,
        loader: () => defer({ userPromise: getUserData() }),
        errorElement: <ErrorPage />,
        children: [
            {
                path: "redirect-movies",
                element: <RedirectPage/>,
                errorElement: <ErrorPage />,
            },
            {
                element: <PublicLayout/>,
                errorElement: <ErrorPage />,
                children: [
                    {
                        path: '/',
                        element: (
                            <Suspense fallback={<SpinLoader/>}>
                                <HomePage/>
                            </Suspense>

                        )
                    },
                    {
                        path: 'login',
                        element: (
                            <Suspense fallback={<SpinLoader/>}>
                                <LoginPage/>
                            </Suspense>
                        )
                    }
                ]
            },
            {
                path: 'movies',
                element: <ProtectedLayoutMovies/>,
                errorElement: <ErrorPage />,
                children: [
                    {
                        path: 'upcoming',
                        element: (
                            <Suspense fallback={<SpinLoader/>}>
                                <UpcomingPage/>
                            </Suspense>
                        )
                    },
                    {
                        path:':slug/:id',
                        element: (
                            <Suspense fallback={<SpinLoader/>}>
                                <DetailPage/>
                            </Suspense>
                        )
                    },
                    {
                        path: 'search',
                        element: (
                            <Suspense fallback={<SpinLoader/>}>
                                <SearchPage/>
                            </Suspense>
                        )
                    }
                ]
            }
        ]
    }
]);
export default router;