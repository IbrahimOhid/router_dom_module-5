import React from "react";
import { ProductContext } from "../context/ProductContext";
import useProducts from "../hook/useProducts";

const ProductProvider = ({ children }) => {
  const { productData, loading, error } = useProducts();
  return (
    <ProductContext.Provider value={{ productData, loading, error }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
