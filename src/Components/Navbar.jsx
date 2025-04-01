import { NavLink } from "react-router-dom";
import "../App.css"; // Import styles

function Navbar() {
  return (
    <nav className="navbar">
      <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>Home</NavLink>
      <NavLink to="/services" className={({ isActive }) => (isActive ? "active" : "")}>Services</NavLink>
      <NavLink to="/contact" className={({ isActive }) => (isActive ? "active" : "")}>Contact</NavLink>
    </nav>
  );
}

export default Navbar;
