import { Route, Routes } from "react-router-dom";
// import RequireAdmin from "./Authentication/RequireAdmin";
import RequireAuth from "./Authentication/RequireAuth";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Footer from "./Pages/Shared/Footer/Footer";
import Navbar from "./Pages/Shared/Navbar/Navbar";
import { privateRoute } from "./Routes/PrivateRoute";
import { publicRoute } from "./Routes/PublicRoute";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { dashboardRoutes } from "./Routes/DashboardRoutes";

function App() {
  return (
    <div>
      <Navbar>
        <Routes>
          {publicRoute.map(({ path, Component }, index) => (
            <Route key={index} path={path} element={<Component />} />
          ))}
          <Route element={<RequireAuth />}>
            {privateRoute.map(({ path, Component }, index) => (
              <Route key={index} path={path} element={<Component />} />
            ))}
          </Route>
          <Route element={<RequireAuth />}>
            <Route path="/dashboard" element={<Dashboard />}>
              {dashboardRoutes.map(({ path, Component }, index) => (
                <Route key={index} path={path} element={<Component />} />
              ))}
            </Route>
          </Route>
        </Routes>
        <Footer />
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </Navbar>
    </div>
  );
}

export default App;
