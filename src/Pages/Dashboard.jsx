import { useContext } from "react";
import { DataContext } from "../InventoryManagement";

const Dashboard = () => {
    const { ProductData } = useContext(DataContext)
    
  return (
    <div>
      <h1>Dashboard</h1>
    </div>
  );
};
export default Dashboard;
