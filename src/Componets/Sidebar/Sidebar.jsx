import "./Sidebar.css"
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar-container">
      <NavLink to="/" className="navlink">Dashboard</NavLink>
      <NavLink to="/department" className="navlink">Department</NavLink>
      <NavLink to="/products" className="navlink">Products</NavLink>
    </div>
  );
};
export default Sidebar;
