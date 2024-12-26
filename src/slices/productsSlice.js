import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProducts = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products/");
      dispatch(setProducts(response.data));
      dispatch(setStatus(false));
    } catch (error) {
      console.error("Error fetching products: ", error);
    }
  };
};
const productSlice = createSlice({
  name: "products",
  initialState: {
    items: [],
    status: false,
    error: null,
  },
  reducers: {
    setProducts: (state, action) => {
      state.items = action.payload;
    },
    setStatus: (state, action) => {
      state.status = action.payload;
    },
  },
});

export const { setProducts, setStatus } = productSlice.actions;
export default productSlice.reducer;
