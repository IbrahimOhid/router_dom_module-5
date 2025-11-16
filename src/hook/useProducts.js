import React, { useEffect, useState } from "react";

const useProducts = () => {
  const [productData, setProductData] = useState([]);
  const [loading, setLoading] = useState({
    state: false,
    message: "",
  });
  const [error, setError] = useState(null);

  const fetchProductData = async () => {
    try {
      setLoading({
        state: true,
        message: "Finding Data...",
      });
      const response = await fetch(`https://dummyjson.com/products`);
      if (!response.ok) {
        const errorMessage = `Fetching Products Data Failed: ${response.status}`;
        throw new Error(errorMessage);
      }
      const data = await response.json();
      setProductData(data.products);
    } catch (err) {
      setError(err);
    } finally {
      setLoading({
        state: false,
        message: "",
      });
    }
  };
  useEffect(() => {
    setLoading({
      loading: true,
      message: "Products Data Loading...",
    });
    fetchProductData();
  }, []);
  return {
    productData,
    loading,
    error,
  };
};

export default useProducts;
