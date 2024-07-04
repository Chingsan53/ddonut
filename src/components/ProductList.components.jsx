import { useState } from "react";
import "./ProductList.components.css";
import ProductPopUp from "../PopUp/ProductPopUp";

const ProductList = () => {
  const [activeProduct, setActiveProduct] = useState(null);
  // const {addProduct} = useProductData();
  const popupStyle = activeProduct ? { display: "block" } : { display: "none" };

  const products = [
    {
      id: 1,
      image: "./img/products/jordan-1.webp",
      name: "Kaptir 3.0 Shoes",
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
      price: "$400.00",
      ingredient: "",
    },
    {
      id: 3,
      image: "https://placehold.co/600x400.png",
      name: "LWST Shoes",
      category: "",
      summary: "",
      price: "",
      ingredient: "",
    },
    {
      id: 4,
      image: "https://placehold.co/600x400.png",
      name: "SL 72 RS Shoes",
      category: "",
      summary: "",
      price: "",
      ingredient: "",
    },
    {
      id: 5,
      image: "https://placehold.co/600x400.png",
      name: "Handball Spezial Shoes",
      category: "",
      summary: "",
      price: "",
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
