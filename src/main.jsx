import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import "./index.css";
import App from "./App.jsx";
import productsReducer from "./slices/productsSlice.js";
import cartReducer from "./slices/cartSlice.js";

const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,
  },
});


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
       <App />
    </Provider>
  </StrictMode>
);
