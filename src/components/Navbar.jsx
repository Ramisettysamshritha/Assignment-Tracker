import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">

      <div className="logo">
        <NavLink to="/" className="logo-link">
          AssignHub
        </NavLink>
      </div>

      <div className="nav-links">

        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "active-link" : ""
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "active-link" : ""
          }
        >
          About
        </NavLink>

        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? "active-link" : ""
          }
        >
          Contact
        </NavLink>

        <NavLink
          to="/login"
          className={({ isActive }) =>
            isActive ? "active-link" : ""
          }
        >
          Login
        </NavLink>

        <NavLink
          to="/signup"
          className="signup-btn"
        >
          Sign Up
        </NavLink>

      </div>

    </nav>
  );
}

export default Navbar;