import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ children }) => {
  const navigations = (
    <>
      <li>
        <Link to="/home">Home</Link>
      </li>
      <li tabIndex="0">
        <Link to="#">
          Pages
          <svg
            class="fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
          >
            <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
          </svg>
        </Link>
        <ul class="p-2 bg-white">
          <li>
            <Link to="#">Submenu 1</Link>
          </li>
          <li>
            <Link to="#">Submenu 2</Link>
          </li>
        </ul>
      </li>
      <li>
        <Link to="/about">About Us</Link>
      </li>
      <li>
        <Link to="/campaign">Campaign</Link>
      </li>
      <li>
        <Link to="/blogs">Blogs</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
    </>
  );

  return (
    <div class="drawer drawer-end">
      <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content flex flex-col">
        <div className="bg-base-100 shadow  sticky top-0 z-50">
          <div class="w-full navbar bg-base-100 max-w-7xl mx-auto">
            <div class="flex-1 px-2 mx-2">
              <Link to="/" class="btn btn-ghost font-extrabold text-xl">
                <span>Blood</span>
                <span className="text-primary"> Buddies</span>{" "}
              </Link>
            </div>
            <div class="flex-none lg:hidden">
              <label for="my-drawer-3" class="btn btn-square btn-ghost">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  class="inline-block w-6 h-6 stroke-current"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
            </div>

            <div class="flex-none hidden lg:block">
              <ul class="menu menu-horizontal">{navigations}</ul>
            </div>
          </div>
        </div>
        {children}
      </div>
      <div class="drawer-side">
        <label for="my-drawer-3" class="drawer-overlay"></label>
        <ul class="menu p-4 overflow-y-auto w-80 bg-base-100">{navigations}</ul>
      </div>
    </div>
  );
};

export default Navbar;
