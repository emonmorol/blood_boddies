import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, NavLink } from "react-router-dom";
import CustomLink from "../../../components/CustomLink";
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
              <ul className="menu-horizontal">
                <li>
                  <CustomLink to="/home">Home</CustomLink>
                </li>
                <li>
                  <CustomLink to="/about">About Us</CustomLink>
                </li>
                <li>
                  <CustomLink to="/campaign">Campaign</CustomLink>
                </li>
                <li>
                  <CustomLink to="/blogs">Blogs</CustomLink>
                </li>
                <li>
                  <CustomLink to="/contact">Contact</CustomLink>
                </li>
                {user && (
                  <li>
                    <CustomLink to="/dashboard/appointments">
                      DashBoard
                    </CustomLink>
                  </li>
                )}
                {user ? (
                  <li>
                    <CustomLink
                      onClick={() => {
                        localStorage.removeItem("accessJwtToken");
                        signOut(auth);
                      }}
                      to="/login"
                    >
                      <i className="fa-solid fa-right-from-bracket"></i>
                    </CustomLink>
                  </li>
                ) : (
                  <li>
                    <CustomLink to="/login">Login</CustomLink>
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
            <NavLink to="/home">Home</NavLink>
          </li>
          <div className="collapse collapse-arrow border rounded-lg">
            <input type="checkbox" className="peer" />
            <div className="collapse-title">Pages</div>
            <div className="collapse-content">
              <ul className="p-2 bg-white">
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
          {user && (
            <li>
              <NavLink to="/dashboard/appointments">DashBoard</NavLink>
            </li>
          )}
          {user ? (
            <li>
              <NavLink onClick={() => signOut(auth)} to="/login">
                <i className="fa-solid fa-right-from-bracket"></i>
              </NavLink>
            </li>
          ) : (
            <li>
              <NavLink to="/login">Login</NavLink>
            </li>
          )}
        </ul>
      </nav>
    </nav>
  );
};

export default Navbar;
