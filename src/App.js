import { Route, Routes } from "react-router-dom";
import RequireAuth from "./Authentication/RequireAuth";
import Footer from "./Pages/Shared/Footer/Footer";
import Navbar from "./Pages/Shared/Navbar/Navbar";
import { privateRoute } from "./Routes/PrivateRoute";
import { publicRoute } from "./Routes/PublicRoute";

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
        </Routes>
        <Footer />
      </Navbar>
    </div>
  );
}

export default App;
