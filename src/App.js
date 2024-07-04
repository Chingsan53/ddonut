import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navigation from "./navigation/Navigation";
import Homepage from "./components/Homepage.components";
import AllProduct from "./Pages/AllProduct.pages";
import Trending from "./Pages/Trending.pages";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Homepage />} />
        <Route path="home" element={<Homepage />} />
        <Route path="all-product" element={<AllProduct />} />
        <Route path="trending" element={<Trending />} />
      </Route>
    </Routes>
  );
}

export default App;
