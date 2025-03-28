import { NavLink } from "react-router";
import logo from "../assets/logo.png";

export default function Header() {
  return (
    <div className="header">
      <div className="header__wrapper">
        <div className="header__logo-container">
          <NavLink to='/'>
            <img src={logo} />
          </NavLink>
         
        </div>

        <div className="header__nav">
          <div className="nav-item">
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Home
            </NavLink>
          </div>

          <div className="nav-item">
            <NavLink
              to="/characters"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Characters
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}
