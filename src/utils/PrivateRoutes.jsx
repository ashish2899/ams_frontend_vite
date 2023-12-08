import { Navigate, Outlet, useLocation } from "react-router-dom";

const PrivateRoutes = () => {
  const authToken = document.cookie
    .split("; ")
    .find((row) => row.startsWith("token="));

  const location = useLocation();

  const isAuthenticated = authToken != null;

  if (
    (isAuthenticated && location.pathname === "/login") ||
    location.pathname === "/register"
  ) {
    return <Navigate to="/" replace />;
  }

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
  // let auth = { token: false };

  // console.log(auth.token);
  // return auth.token ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;
