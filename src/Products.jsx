import { fetchProducts } from "./slices/productsSlice";
import { addItem } from "./slices/cartSlice";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Products() {
  const products = useSelector((state) => state.products.items);
  const cart = useSelector((state) => state.cart.items);
  const data = [...products];
  const dispatch = useDispatch();
  const [radioValue, setRadioValue] = useState(1);
  const [sortValue, setSortValue] = useState(0);
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
  // useEffect(() => {
  //   console.log("sorting");
  //   if (sortValue == 1) {
  //     data.sort((a, b) => a.price - b.price);
  //   } else if (sortValue == 2) {
  //     data.sort((a, b) => b.price - a.price);
  //   }
  // }, [sortValue]);

  // console.log(sortValue, data, "before return");
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
      </div>
      <div className="m-3 p-3">
        <label
          htmlFor="dropdown"
          className="inline text-sm/6 font-medium text-gray-900"
        >
          Sort by:
        </label>
        <select onChange={(e) => setSortValue(e.target.value)} id="dropdown">
          <option value="0">Featured</option>
          <option value="1">Price: Low to High</option>
          <option value="2">Price: High to Low</option>
        </select>
      </div>
      <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        {[
          ...data.filter((a) => {
            if (radioValue == 1) return a;

            if (a.category == radios[radioValue - 1].category) return a;
          }),
        ]
          .sort((a, b) => {
            if (sortValue == 0) return 0;
            if (sortValue == 1) return a.price - b.price;
            if (sortValue == 2) return b.price - a.price;
          })
          .map((product) => (
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
                  onClick={() => dispatch(addItem(product))}
                  className="mt-2 block w-full px-4 py-2 text-sm font-semibold text-center text-white bg-blue-600 rounded-lg hover:bg-green-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
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
