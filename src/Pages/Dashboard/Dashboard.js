import React from "react";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <div class="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content bg-gray-100 flex flex-col relative pt-10">
          <label
            for="my-drawer-2"
            class="btn btn-gray-200 drawer-button lg:hidden fixed top-[90vh]  right-[10%]"
          >
            <i class="fa-solid fa-ellipsis-vertical"></i>
          </label>
          <Outlet />
        </div>
        <div class="drawer-side">
          <label for="my-drawer-2" class="drawer-overlay"></label>
          <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
            <li>
              <Link to="/dashboard/appointments">Appointments</Link>
            </li>
            <li>
              <Link to="/dashboard/donors">Donors</Link>
            </li>
            <li>
              <Link to="/dashboard/gallery">Photo Gallery</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
