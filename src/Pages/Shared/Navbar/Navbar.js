import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../../firebase.init";
import useAdmin from "../../../Hooks/useAdmin";
import "./Navbar.css";

const Navbar = ({ children }) => {
  const [user] = useAuthState(auth);
  const [isAdmin] = useAdmin();

  return (
    <nav class="drawer drawer-end">
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
              <ul class="menu menu-horizontal">
                <li>
                  <Link to="/home">Home</Link>
                </li>
                <li tabIndex="0">
                  <Link to="/pages">
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
                      <Link to="/donor">Submenu 1</Link>
                    </li>
                    <li>
                      <Link to="/reciever">Submenu 2</Link>
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
                {isAdmin && user && (
                  <li>
                    <Link to="/dashboard">DashBoard</Link>
                  </li>
                )}
                {user ? (
                  <li>
                    <Link onClick={() => signOut(auth)} to="/login">
                      SignOut
                    </Link>
                  </li>
                ) : (
                  <li>
                    <Link to="/login">Login</Link>
                  </li>
                )}
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
            <Link to="/home">Home</Link>
          </li>
          <div class="collapse collapse-arrow border rounded-lg">
            <input type="checkbox" class="peer" />
            <div class="collapse-title">Pages</div>
            <div class="collapse-content">
              <ul class="p-2 bg-white">
                <li>
                  <Link to="/donor">Submenu 1</Link>
                </li>
                <li>
                  <Link to="/reciever">Submenu 2</Link>
                </li>
              </ul>
            </div>
          </div>
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
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </nav>
    </nav>
  );
};

export default Navbar;
