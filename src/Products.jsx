import { fetchProducts } from "./slices/productsSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Products() {
  const products = useSelector((state) => state.products.items);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  console.log("Products rendered");
  console.log("Products rendered with products: ", products);

  return <div>Products</div>;
}
