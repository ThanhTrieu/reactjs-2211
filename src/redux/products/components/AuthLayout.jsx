import { Suspense } from "react";
import { useLoaderData, useOutlet, Await  } from "react-router-dom";
import { Alert, Row, Col } from "antd";
import { AuthProvider } from "../hooks/useAuth";
import { SpinLoader } from "./common/SpinLoader";


const AlertErrors = () => {
    return (
        <Row>
            <Col span={12} offset={6}>
                <Alert message="Something went wrong" type="error" closable />
            </Col>
        </Row>
    )
}

const AuthLayoutMovies = () => {
    const outlet = useOutlet();
    const { userPromise } = useLoaderData();
    return (
        <Suspense
            fallback={<SpinLoader/>}
        >
            <Await
                resolve={userPromise}
                errorElement={<AlertErrors/>}
                children={(user) => (
                    <AuthProvider userData={user}>
                        {outlet}
                    </AuthProvider>
                )}
            />
        </Suspense>
    )
}
export default AuthLayoutMovies;