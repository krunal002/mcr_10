import "./App.css";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Department from "./Pages/Department/Department";
import Products from "./Pages/Products/Products";
import Sidebar from "./Componets/Sidebar/Sidebar";
import ProductDetails from "./Pages/ProductDetails/ProductDetails";
import NewProduct from "./Pages/NewProduct/NewProduct";

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
          <Route path="/details/:ProductId" element={<ProductDetails />} />
          <Route path="/add-new-product" element={<NewProduct />} />

        </Routes>
      </div>
    </div>
  );
}

export default App;
