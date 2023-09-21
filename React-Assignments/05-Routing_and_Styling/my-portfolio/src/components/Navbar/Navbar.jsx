import { useContext } from "react";
import { Link } from "react-router-dom";
import Headroom from "react-headroom";

import "./Navbar.scss";
import { ThemeContext } from "../../context/ThemeContext";
import { ToggleSwitch } from "../ToggleSwitch/ToggleSwitch";

export const Navbar = () => {
  const { isDark } = useContext(ThemeContext);
  return (
    <Headroom>
      <header className={isDark ? "dark-menu header" : "header"}>
        <Link to="/" className="logo link">
          <span className="grey-color"> &lt;</span>
          <span className="logo-name">Manish Tiwari</span>
          <span className="grey-color">/&gt;</span>
        </Link>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label
          className="menu-icon"
          htmlFor="menu-btn"
          style={{ color: "white" }}
        >
          <span className={isDark ? "navicon navicon-dark" : "navicon"}></span>
        </label>
        <ul className={isDark ? "dark-menu menu" : "menu"}>
          <li>
            <Link to={"/skills"}>Skills</Link>
          </li>
          <li>
            <Link to={"/projects"}>Projects</Link>
          </li>
          <li>
            <Link to={"/contact"}>Contact</Link>
          </li>
          <li>
            <a href="#">
              <ToggleSwitch />
            </a>
          </li>
        </ul>
      </header>
    </Headroom>
  );
};
