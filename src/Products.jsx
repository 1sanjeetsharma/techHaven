import { fetchProducts } from "./slices/productsSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Products() {
  const products = useSelector((state) => state.products.items);
  const data = [...products];
  const dispatch = useDispatch();
  const [radioValue, setRadioValue] = useState(1);
  const radios = [
    {
      name: "All",
      value: 1,
      category: "all",
    },
    {
      name: "Electronics",
      value: 2,
      category: "electronics",
    },
    { name: "Jewelery", value: 3, category: "jewelery" },
    { name: "Men's clothing", value: 4, category: "men's clothing" },
    { name: "Women's clothing", value: 5, category: "women's clothing" },
  ];
  useEffect(() => {
    if (products.length) {
      console.log("Products already fetched");
    } else {
      console.log("Fetching products");
      dispatch(fetchProducts());
    }
  }, [dispatch]);
 
  //   console.log("filtering");
  //   data.filter((product) => {
  //     if (radioValue == 1) {
  //       return product;
  //     }
  //     if (radios[radioValue - 1].category === product.category) {
  //       return product;
  //     }
  //   });
  // };
  console.log(data, radioValue, "before return");
  return (
    <>
      
      <div
        className="flex m-auto border border-red-700 my-5 justify-center  max-w-fit rounded-lg space-x-4 bg-gray-100 p-4"
        role="group"
      >
        {radios.map((radio) => {
          return (
            <button
              key={radio.value}
              id={radio.value}
              className={
                radioValue == radio.value
                  ? "text-green-500 hover:text-red-500"
                  : "text-black hover:text-red-500"
              }
              onClick={() => {
                setRadioValue(radio.value);
              }}
            >
              {radio.name}
            </button>
          );
        })}
        {/* <button className="hover:text-red-500">All</button>
        <button className="hover:text-red-500 ">Electronics</button>
        <button className="hover:text-red-500 "> Jewelery</button>
        <button className="hover:text-red-500 "> Men&apos;s Clothing</button>
        <button className="hover:text-red-500 "> women&apos;s Clothing</button> */}
      </div>
      <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        {[
          ...data.filter((product) => {
            if (radioValue == 1) return product;
            if (product.category == radios[radioValue - 1].category)
              return product;
          }),
        ].map((product) => (
          <div key={product.id} className="group">
            <Link to={`/product/${product.id}`}>
              <img
                alt={product.imageAlt}
                src={product.image}
                className="aspect-square w-full rounded-lg bg-gray-200 object-contain group-hover:opacity-75 xl:aspect-[7/8]"
              />
            </Link>
            <h3 className="mt-4 text-sm text-gray-700 truncate overflow-hidden whitespace-nowrap">
              {product.title}
            </h3>
            <div>
              <p className="mt-1 text-lg font-medium text-gray-900">
                ${product.price}
              </p>
              <button
                onClick={() => console.log("added:", product.id)}
                className="mt-2 block w-full px-4 py-2 text-sm font-semibold text-center text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Add To Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
