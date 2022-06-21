import AllGallery from "../Pages/Dashboard/AllGallery";
import Appointments from "../Pages/Dashboard/Appointments";
import Donors from "../Pages/Dashboard/Donors";
import Payment from "../Pages/Dashboard/Payment";
import Volunteers from "../Pages/Dashboard/Volunteers";

export const dashboardRoutes = [
  { path: "appointments", name: "Campaign", Component: Appointments },
  { path: "donors", name: "Blogs", Component: Donors },
  { path: "volunteers", name: "Volunteers", Component: Volunteers },
  { path: "gallery", name: "gallery", Component: AllGallery },
  { path: "payment/:id", name: "Payment", Component: Payment },
];
