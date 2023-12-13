import useAuth from "../hook/useAuth";
import { useLocation, Outlet, Navigate } from "react-router-dom";

const RequireAuth = () => {
  const { auth } = useAuth();
  const location = useLocation();

  console.log(auth?.token);

  return auth.token ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default RequireAuth;
