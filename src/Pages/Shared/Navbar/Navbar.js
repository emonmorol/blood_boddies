import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = ({ children }) => {
  return (
    <nav class="drawer drawer-end">
      <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content flex flex-col">
        <div className="bg-base-100 shadow  sticky top-0 z-50">
          <div class="w-full navbar bg-base-100 max-w-7xl mx-auto">
            <div class="flex-1 px-2 mx-2">
              <NavLink to="/" class="btn btn-ghost font-extrabold text-xl">
                <span>Blood</span>
                <span className="text-primary"> Buddies</span>{" "}
              </NavLink>
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
              <ul class="menu menu-horizontal">
                <li>
                  <NavLink to="/home">Home</NavLink>
                </li>
                <li tabIndex="0">
                  <NavLink to="/pages">
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
                  </NavLink>
                  <ul class="p-2 bg-white">
                    <li>
                      <NavLink to="/donor">Submenu 1</NavLink>
                    </li>
                    <li>
                      <NavLink to="/reciever">Submenu 2</NavLink>
                    </li>
                  </ul>
                </li>
                <li>
                  <NavLink to="/about">About Us</NavLink>
                </li>
                <li>
                  <NavLink to="/campaign">Campaign</NavLink>
                </li>
                <li>
                  <NavLink to="/blogs">Blogs</NavLink>
                </li>
                <li>
                  <NavLink to="/contact">Contact</NavLink>
                </li>
                <li>
                  <NavLink to="/login">Login</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {children}
      </div>
      <nav class="drawer-side">
        <label for="my-drawer-3" class="drawer-overlay"></label>
        <ul class="menu p-4 overflow-y-auto w-80 bg-base-100">
          <li>
            <NavLink to="/home">Home</NavLink>
          </li>
          <div class="collapse collapse-arrow border rounded-lg">
            <input type="checkbox" class="peer" />
            <div class="collapse-title">Pages</div>
            <div class="collapse-content">
              <ul class="p-2 bg-white">
                <li>
                  <NavLink to="/donor">Submenu 1</NavLink>
                </li>
                <li>
                  <NavLink to="/reciever">Submenu 2</NavLink>
                </li>
              </ul>
            </div>
          </div>
          <li>
            <NavLink to="/about">About Us</NavLink>
          </li>
          <li>
            <NavLink to="/campaign">Campaign</NavLink>
          </li>
          <li>
            <NavLink to="/blogs">Blogs</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
          <li>
            <NavLink to="/login">Login</NavLink>
          </li>
        </ul>
      </nav>
    </nav>
  );
};

export default Navbar;
