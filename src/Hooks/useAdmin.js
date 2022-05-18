import { useState } from "react";

const useAdmin = () => {
  const [isAdmin, setIsAdmin] = useState(true);
  return [isAdmin];
};

export default useAdmin;
