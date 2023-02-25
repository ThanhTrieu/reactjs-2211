import { Navigate, useOutlet } from "react-router-dom";
import { useAuth } from "../test/useAuth";

export const ProtectedLayout = ({ children }) => {
  const { user } = useAuth();
  const outlet = useOutlet();

  if (!user) {
    return <Navigate to="/login" />;
  }

  return (
    <>
      {children}
      {outlet}
    </>
  );
};
