import { inventoryData } from "../ProductData/ProductData";

import { createContext, useState } from "react";
export const DataContext = createContext();

export const DataContextHandler = ({ children }) => {
  const [ProductData, setProductsData ] = useState(inventoryData);

  const [filters, setFilters] = useState({
    dept_type: "all",
    low_stock_items: false,
    sortBy: "name",
});

  return (
    <div>
      <DataContext.Provider value={{ ProductData,  filters, setProductsData, setFilters}}>
        {children}
      </DataContext.Provider>
    </div>
  );
};
