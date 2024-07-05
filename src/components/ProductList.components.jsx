import { useState } from "react";
import "./ProductList.components.css";
import ProductPopUp from "../PopUp/ProductPopUp";
import { useProductData } from "../dataflowContext/ProductDataContext";

const ProductList = () => {
  const [activeProduct, setActiveProduct] = useState(null);
  // const {addProduct} = useProductData();
  const popupStyle = activeProduct ? { display: "block" } : { display: "none" };

  const products = [
    {
      id: 1,
      image: "./img/products/jordan-1.webp",
      name: "Jordan 1",
      category: "",
      summary: "",
      price: "$260.00",
      ingredient: "",
    },
    {
      id: 2,
      image: "./img/products/jordan-1-ts.webp",
      name: "Nike Jordan 1 Retro High OG SP Travis Scott Mocha",
      category: "",
      summary: "",
      price: "$1,650.00",
      ingredient: "",
    },
    {
      id: 3,
      image: "./img/products/jordan-1-dior.webp",
      name: "Jordan 1 Retro High Dior",
      category: "",
      summary: "",
      price: "$6,485.00",
      ingredient: "",
    },
    {
      id: 4,
      image: "./img/products/jordan-1-blue-og.webp",
      name: "Air Jordan 1 Retro High OG 'Game Royal'",
      category: "",
      summary: "",
      price: "$275.00",
      ingredient: "",
    },
    {
      id: 5,
      image: "./img/products/travis-fragment.webp",
      name: "Fragment Design x Travis Scott",
      category: "",
      summary: "",
      price: "$2,089.00",
      ingredient: "",
    },
  ];
  return (
    <div className="articles">
      {products.map((item) => (
        <article
          key={item.id}
          onClick={() => {
            console.log("Opening article: ", item);
            setActiveProduct(item);
          }}
        >
          <div className="article-wrapper">
            <figure>
              <img src={item.image} alt="shoes-img" />
            </figure>
            <div className="article-body">
              <h3>{item.name}</h3>
              <h4>{item.price}</h4>
            </div>
          </div>
        </article>
      ))}
      <div className="popup" style={popupStyle}>
        {activeProduct && (
          <ProductPopUp
            item={activeProduct}
            closePopup={() => setActiveProduct(null)}
          />
        )}
      </div>
    </div>
  );
};

export default ProductList;
