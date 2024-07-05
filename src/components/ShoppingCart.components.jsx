import { useProductData } from "../dataflowContext/ProductDataContext";
import "./ShoppingCart.components.css";
const ShoppingCart = () => {
  const { products, removeProduct } = useProductData();

  const handleRemove = (id) => {
    removeProduct(id);
  };

  const handleCheckout = () => {
    console.log("Processing to checkout with products:", products);
  };

  return (
    <div>
      <h1>Shopping Cart</h1>
      {products.length > 0 ? (
        <>
          {products.map((item) => (
            <div className="shopping-cart" key={item.id}>
              <div className="cart-container">
                <img className="cart-image" src={item.image} alt="shoes-img" />
                <h3>{item.name}</h3>
                <h3>Price: {item.price}</h3>
              </div>
              <div className="update-container">
                <h3>Quantity: {item.quantity}</h3>

                <button
                  className="button-1"
                  onClick={() => handleRemove(item.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
          <div className="checkout-button-container">
            <button className="button-1" onClick={handleCheckout}>
              Checkout
            </button>
          </div>
        </>
      ) : (
        <p>No items in cart</p>
      )}
    </div>
  );
};

export default ShoppingCart;
