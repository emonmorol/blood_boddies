import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import auth from "../firebase.init";

function RequireAuth({ children }) {
  let [user, loading] = useAuthState(auth);
  let location = useLocation();

  if (loading) {
    return <p className="text-center my-20 text-medium">Loading...</p>;
  }

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return <Outlet />;
}

export default RequireAuth;
