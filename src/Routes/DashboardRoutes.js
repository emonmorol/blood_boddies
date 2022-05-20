import Appointments from "../Pages/Dashboard/Appointments";
import Donors from "../Pages/Dashboard/Donors";

export const dashboardRoutes = [
  { path: "appointments", name: "Campaign", Component: Appointments },
  { path: "donors", name: "Blogs", Component: Donors },
];
