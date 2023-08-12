import { NavLink } from "react-router-dom";

import { DataContext } from "./Context/DataContext";
export { DataContext };

const InventoryManagement = () => {
  return (
    <div>
      <h1>Inventory Management</h1>
      <NavLink to="/dashboard">Dashboard || </NavLink>
      <NavLink to="/department">Department || </NavLink>
      <NavLink to="/products">Products</NavLink>
    </div>
  );
};
export default InventoryManagement;
