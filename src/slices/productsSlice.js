import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProducts = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products/");
      dispatch(setProducts(response.data));
    } catch (error) {
      console.error("Error fetching products: ", error);
    }
  };
};
const productSlice = createSlice({
  name: "products",
  initialState: {
    items: [],
    status: "idle",
    error: null,
  },
  reducers: {
    setProducts: (state, action) => {
      state.items = action.payload;
    },
  },
});

export const { setProducts } = productSlice.actions;
export default productSlice.reducer;
