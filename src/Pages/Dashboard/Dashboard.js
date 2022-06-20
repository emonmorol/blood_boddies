import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content bg-gray-100 flex flex-col relative pt-10">
          <label
            htmlFor="my-drawer-2"
            className="btn btn-gray-200 drawer-button lg:hidden fixed top-[90vh]  right-[10%]"
          >
            <i className="fa-solid fa-ellipsis-vertical"></i>
          </label>
          <Outlet />
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
            <li>
              <NavLink to="/dashboard/appointments">Appointments</NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/donors">Donors</NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/gallery">Photo Gallery</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
