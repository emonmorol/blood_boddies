import Appointments from "../Pages/Dashboard/Appointments";
import Donors from "../Pages/Dashboard/Donors";
import Payment from "../Pages/Dashboard/Payment";

export const dashboardRoutes = [
  { path: "appointments", name: "Campaign", Component: Appointments },
  { path: "donors", name: "Blogs", Component: Donors },
  { path: "payment/:id", name: "Payment", Component: Payment },
];
