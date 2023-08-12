import "./Dashboard.css"
import { useContext } from "react";
import { DataContext } from "../../App";

const Dashboard = () => {
  const { ProductData } = useContext(DataContext);

  const totalStockProducts = ProductData.reduce(
    (acc, curr) => curr.stock + acc,
    0
  );

  
  const totalDelivered = ProductData.reduce(
    (acc, curr) => curr.delivered + acc,
    0
  );

  const lowStockItems = ProductData.reduce(
    (acc, curr) => (curr.stock <= 10 ? [...acc, curr] : acc),
    []
  ).length;

  return (
    <div className="dashboard-container">
      <h1>Dashboard</h1>
      <main>
        <div className="dashboard-items">
          <p style={{color:"green"}}>{totalStockProducts}</p>
          <p>Total Stock</p>
        </div>
        <div className="dashboard-items">
          <p style={{color:"orange"}}>{totalDelivered}</p>
          <p>Total Delivered</p>
        </div>
        <div className="dashboard-items">
          <p style={{color:"red"}}>{lowStockItems}</p>
          <p>Low Stock Items</p>
        </div>
      </main>
    </div>
  );
};
export default Dashboard;
