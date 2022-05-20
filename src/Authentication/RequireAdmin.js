// import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../Hooks/useAdmin";
// import auth from "../firebase.init";

function RequireAdmin({ children }) {
  const [isAdmin] = useAdmin();
  let location = useLocation();
  console.log(isAdmin);

  //   if (loading) {
  //     return <p className="text-center my-20 text-medium">Loading...</p>;
  //   }

  if (!isAdmin) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}

export default RequireAdmin;
