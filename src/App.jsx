import Products from "./Products.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar.jsx";
import Cart from "./Cart.jsx";
import Home from "./Home.jsx";
import SingleProduct from "./SingleProduct.jsx";
import CheckOut from "./CheckOut.jsx";
import Footer from "./Footer.jsx";
function App() {
  return (
    <>
      <div className="container bg-green-200">
        <BrowserRouter>
          <Navbar />
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/product" element={<Products />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/product/:id" element={<SingleProduct />} />
              <Route path="/checkOut" element={<CheckOut />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
