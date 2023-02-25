import { Suspense } from "react";
import { useLoaderData, useOutlet, Await } from "react-router-dom";
import { Spin, Alert } from 'antd';
import { AuthProvider } from "../test/useAuth";

const styleCSS = {
    margin: '20px 0',
    marginBottom: '20px',
    padding: '30px 50px',
    textAlign: 'center',
    background: 'rgba(0, 0, 0, 0.05)',
    borderRadius: '4px'
}

export const AuthLayout = () => {
  const outlet = useOutlet();

  const { userPromise } = useLoaderData();

  return (
    <Suspense fallback={(<div style={styleCSS}><Spin/></div>)}>
      <Await
        resolve={userPromise}
        errorElement={<Alert message="Something went wrong!" type="error" />}
        children={(user) => (
          <AuthProvider userData={user}>{outlet}</AuthProvider>
        )}
      />
    </Suspense>
  );
};
