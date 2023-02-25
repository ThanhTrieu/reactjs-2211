import { lazy, Suspense } from 'react';
import { createBrowserRouter, defer } from 'react-router-dom';
import { Spin } from 'antd';
import { AuthLayout } from '../components/TestAuthLayout';
import { ProtectedLayout } from '../components/TestProtectedLayout';

const PopularPage = lazy(() => import('../pages/popular/index'));
const UpcomingPage = lazy(() => import('../pages/upcoming/index'));
const SearchPage = lazy(() => import('../pages/search/index'));
const DetailPage = lazy(() => import('../pages/detail/index'));
const LoginPage = lazy(() => import('../pages/login/test'));


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
            const user = window.localStorage.getItem("user");
            resolve(user);
        }, 3000)
    );
}

const router = createBrowserRouter([
    {
        element: <AuthLayout />,
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
                        <ProtectedLayout>
                            <UpcomingPage/>
                        </ProtectedLayout>
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
                        <ProtectedLayout>
                            <DetailPage/>
                        </ProtectedLayout>
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