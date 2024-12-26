import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { addItem } from "./slices/cartSlice";

function SingleProduct() {
  const productId = useParams();
  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState({});
  const dispatch = useDispatch();
  useEffect(() => {
    try {
      setLoading(true);
      axios
        .get(`https://fakestoreapi.com/products/${productId.id}`)
        .then((res) => {
          setProduct(res.data);
          setLoading(false);
        });
    } catch (err) {
      alert("Error fetching product");
      console.log(err);
    }
  }, [productId.id]);
  console.log(product, "before return");

  return (
    <div className="md:flex block justify-center items-center h-screen p-4">
      {loading ? (
        <div className="text-2xl font-bold">
          <img src="/loadingGif.gif" alt="Loading" height={100} width={100} />
        </div>
      ) : (
        <>
          <div className="md:w-1/2 w-full block  md:flex md:justify-center border p-4 ">
            <img
              src={product.image}
              alt="product picture"
              height={400}
              width={400}
            />
          </div>
          <div className="w-full p-4 md:w-1/2 md:flex md:flex-col justify-center">
            <h1 className="text-3xl font-bold">{product.title}</h1>
            <p className="text-lg">{product.description}</p>
            <p className="text-2xl font-bold">${product.price}</p>
            <button
              className="mt-2 block w-1/3 px-4 py-2 text-sm font-semibold text-center text-white bg-blue-600 rounded-lg hover:bg-green-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              onClick={() => dispatch(addItem(product))}
            >
              Add To Cart
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default SingleProduct;
