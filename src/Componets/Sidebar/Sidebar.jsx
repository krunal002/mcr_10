import "./Sidebar.css"
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar-container">
      <NavLink to="/dashboard">Dashboard</NavLink>
      <NavLink to="/department">Department</NavLink>
      <NavLink to="/products">Products</NavLink>
    </div>
  );
};
export default Sidebar;
