import Products from "./Products.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar.jsx";
import Cart from "./Cart.jsx";
import Home from "./Home.jsx";
import SingleProduct from "./SingleProduct.jsx";
import CheckOut from "./CheckOut.jsx";
function App() {
  return (
    <>
      <div className="container">
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product" element={<Products />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/product/:id" element={<SingleProduct />} />
            <Route path="/checkOut" element={<CheckOut />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
