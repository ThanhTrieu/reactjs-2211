import { lazy, Suspense } from 'react';
import { createBrowserRouter, defer } from 'react-router-dom';
import { Spin } from 'antd';
import AuthLayoutMovies from '../components/AuthLayout';
import ProtectedLayoutMovies from '../components/ProtectedLayout';

const PopularPage = lazy(() => import('../pages/popular/index'));
const UpcomingPage = lazy(() => import('../pages/upcoming/index'));
const SearchPage = lazy(() => import('../pages/search/index'));
const DetailPage = lazy(() => import('../pages/detail/index'));
const LoginPage = lazy(() => import('../pages/login/index'));

const styleCSS = {
    margin: '20px 0',
    marginBottom: '20px',
    padding: '30px 50px',
    textAlign: 'center',
    background: 'rgba(0, 0, 0, 0.05)',
    borderRadius: '4px'
}

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
        children: [
            {
                path: '/',
                element: (
                    <Suspense fallback={(<div style={styleCSS}><Spin/></div>)}>
                        <PopularPage/>
                    </Suspense>
                    
                )
            },
            {
                path: 'upcoming',
                element: (
                    <Suspense fallback={(<div style={styleCSS}><Spin/></div>)}>
                        <ProtectedLayoutMovies>
                            <UpcomingPage/>
                        </ProtectedLayoutMovies> 
                    </Suspense>
                )
            },
            {
                path: 'search',
                element: (
                    <Suspense fallback={(<div style={styleCSS}><Spin/></div>)}>
                        <SearchPage/>
                    </Suspense>
                )
            },
            {
                path:'movies/:slug/:id',
                element: (
                    <Suspense fallback={(<div style={styleCSS}><Spin/></div>)}>
                        <ProtectedLayoutMovies>
                            <DetailPage/>
                        </ProtectedLayoutMovies>
                    </Suspense>
                )
            },
            {
                path: 'login',
                element: (
                    <Suspense fallback={(<div style={styleCSS}><Spin/></div>)}>
                        <LoginPage/>
                    </Suspense>
                )
            }
        ]
    }
]);
export default router;