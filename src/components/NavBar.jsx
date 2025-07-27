import React from "react";
import { NavLink } from "react-router-dom"; // Import NavLink for navigation
import "./NavBar.css"; // Import the CSS file for styling

function NavBar() {
  return (
    <nav className="navbar bg-blue-700 p-4 shadow-md">
      <ul className="flex justify-center space-x-6">
        <li>
          {/* NavLink for the Home page */}
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "nav-link-active text-white font-bold text-lg border-b-2 border-white pb-1"
                : "nav-link text-blue-200 hover:text-white transition-colors duration-200 text-lg"
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          {/* NavLink for the Directors page */}
          <NavLink
            to="/directors"
            className={({ isActive }) =>
              isActive
                ? "nav-link-active text-white font-bold text-lg border-b-2 border-white pb-1"
                : "nav-link text-blue-200 hover:text-white transition-colors duration-200 text-lg"
            }
          >
            Directors
          </NavLink>
        </li>
        <li>
          {/* NavLink for the Actors page */}
          <NavLink
            to="/actors"
            className={({ isActive }) =>
              isActive
                ? "nav-link-active text-white font-bold text-lg border-b-2 border-white pb-1"
                : "nav-link text-blue-200 hover:text-white transition-colors duration-200 text-lg"
            }
          >
            Actors
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
