import "./ProductPopUp.css";
import { useProductData } from "../dataflowContext/ProductDataContext";
const ProductPopUp = ({ item, closePopup }) => {
  const { addProduct } = useProductData();
  return (
    <div>
      <div className="popup-content">
        <span className="close" onClick={closePopup}>
          &times;
        </span>
        <div className="popup-details">
          <div className="popup-photo">
            <img src={item.image} alt="shoes-img" className="image-popup" />
          </div>
          <div className="popup-summary">
            <h2>{item.name}</h2>
            <p>Price: {item.price}</p>
            <button
              className="button-1"
              onClick={() => {
                addProduct(item);
                console.log("sucessfully add product", item);
              }}
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPopUp;
