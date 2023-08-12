import "./App.css";
import InventoryManagement from "./InventoryManagement";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Department from "./Pages/Department";
import Products from "./Pages/Products";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<InventoryManagement />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/department" element={<Department />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </div>
  );
}

export default App;
