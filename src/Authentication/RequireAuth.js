import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import Spinner from "../components/Spinner/Spinner";
import auth from "../firebase.init";

function RequireAuth({ children }) {
  let [user, loading] = useAuthState(auth);
  let location = useLocation();

  if (loading) {
    return <Spinner />;
  }

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return <Outlet />;
}

export default RequireAuth;
