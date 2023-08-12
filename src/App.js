import "./App.css";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Department from "./Pages/Department/Department";
import Products from "./Pages/Products/Products";
import Sidebar from "./Componets/Sidebar/Sidebar";

import { DataContext } from "./Context/DataContext";
export { DataContext };

function App() {
  return (
    <div className="App">
      <aside className="left-container">
        <Sidebar />
      </aside>
      <div className="right-container">
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/department" element={<Department />} />
          <Route path="/products" element={<Products />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
