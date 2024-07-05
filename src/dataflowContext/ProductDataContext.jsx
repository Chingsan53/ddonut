import React, { createContext, useContext, useState } from "react";

const ProductDataContext = createContext();

export const useProductData = () => {
  return useContext(ProductDataContext);
};

export const ProductDataProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  const addProduct = (product) => {
    setProducts((prevProducts) => {
      const existingProduct = prevProducts.find((p) => p.id === product.id);
      if (existingProduct) {
        return prevProducts.map((p) =>
          p.id === product.id ? { ...p, quantity: (p.quantity || 1) + 1 } : p
        );
      } else {
        return [...prevProducts, { ...product, quantity: 1 }];
      }
    });
  };

  const removeProduct = (id) => {
    setProducts((prevProducts) =>
      prevProducts
        .map((product) =>
          product.id === id
            ? { ...product, quantity: product.quantity - 1 }
            : product
        )
        .filter((product) => product.quantity > 0)
    );
  };

  return (
    <ProductDataContext.Provider
      value={{ products, addProduct, removeProduct }}
    >
      {children}
    </ProductDataContext.Provider>
  );
};
