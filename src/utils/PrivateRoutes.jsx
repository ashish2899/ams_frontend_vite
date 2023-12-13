import { Navigate, Outlet, useLocation } from "react-router-dom";

const PrivateRoutes = () => {
  const authToken = document.cookie;


  const isAuthenticated = authToken !== null;

  if (
    isAuthenticated &&
    (location.pathname === "/login" || location.pathname === "/register")
  ) {
    console.log(isAuthenticated);
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  return isAuthenticated ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
  // let auth = { token: false };

  // console.log(auth.token);
  // return auth.token ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;
