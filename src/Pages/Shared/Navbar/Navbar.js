import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../../firebase.init";
// import useAdmin from "../../../Hooks/useAdmin";
import "./Navbar.css";

const Navbar = ({ children }) => {
  const [user] = useAuthState(auth);
  // const [isAdmin] = useAdmin();

  return (
    <nav className="drawer drawer-end">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        <div className="bg-base-100 shadow  sticky top-0 z-50">
          <div className="w-full navbar bg-base-100 max-w-7xl mx-auto">
            <div className="flex-1 px-2 mx-2">
              <Link to="/" className="btn btn-ghost font-extrabold text-xl">
                <span>Blood</span>
                <span className="text-primary"> Buddies</span>{" "}
              </Link>
            </div>
            <div className="flex-none lg:hidden">
              <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-6 h-6 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
            </div>

            <div className="flex-none hidden lg:block">
              <ul className="menu menu-horizontal">
                <li>
                  <Link to="/home">Home</Link>
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
                {user && (
                  <li>
                    <Link to="/dashboard/appointments">DashBoard</Link>
                  </li>
                )}
                {user ? (
                  <li>
                    <Link
                      onClick={() => {
                        localStorage.removeItem("accessJwtToken");
                        signOut(auth);
                      }}
                      to="/login"
                    >
                      <i className="fa-solid fa-right-from-bracket"></i>
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
      <nav className="drawer-side">
        <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-80 bg-base-100">
          <li>
            <Link to="/home">Home</Link>
          </li>
          <div className="collapse collapse-arrow border rounded-lg">
            <input type="checkbox" className="peer" />
            <div className="collapse-title">Pages</div>
            <div className="collapse-content">
              <ul className="p-2 bg-white">
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
          {user && (
            <li>
              <Link to="/dashboard/appointments">DashBoard</Link>
            </li>
          )}
          {user ? (
            <li>
              <Link onClick={() => signOut(auth)} to="/login">
                <i className="fa-solid fa-right-from-bracket"></i>
              </Link>
            </li>
          ) : (
            <li>
              <Link to="/login">Login</Link>
            </li>
          )}
        </ul>
      </nav>
    </nav>
  );
};

export default Navbar;
