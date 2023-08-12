import { inventoryData } from "../ProductData/ProductData";

import { createContext } from "react";
export const DataContext = createContext();

export const DataContextHandler = ({ children }) => {
  const ProductData = inventoryData;

  return (
    <div>
      <DataContext.Provider value={{ ProductData }}>
        {children}
      </DataContext.Provider>
    </div>
  );
};
