import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import baseAxios from "../Api/instance";
import auth from "../firebase.init";

const useAdmin = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [user] = useAuthState(auth);

  useEffect(() => {
    if (user) {
      console.log(user.email);
      (async () => {
        const { data } = await baseAxios.get(`/user?email=${user.email}`);
        if (data?.role && data?.role === "admin") {
          setIsAdmin(true);
        } else {
          setIsAdmin(false);
        }
      })();
    }
  }, [user]);

  return [isAdmin];
};

export default useAdmin;
