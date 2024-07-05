import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navigation from "./navigation/Navigation";
import Homepage from "./components/Homepage.components";
import AllProduct from "./Pages/AllProduct.pages";
import Trending from "./Pages/Trending.pages";
import ShoppingCart from "./components/ShoppingCart.components";
import { ProductDataProvider } from "./dataflowContext/ProductDataContext";

function App() {
  return (
    <ProductDataProvider>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Homepage />} />
          <Route path="home" element={<Homepage />} />
          <Route path="all-product" element={<AllProduct />} />
          <Route path="trending" element={<Trending />} />
          <Route path="shopping-cart" element={<ShoppingCart />} />
        </Route>
      </Routes>
    </ProductDataProvider>
  );
}

export default App;
