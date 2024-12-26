import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { removeItem } from "./slices/cartSlice";
function Cart() {
  const cart = useSelector((state) => state.cart.items);
  let sum = 0;
  const dispatch = useDispatch();
  return (
    <>
      <div>
        <h1 className="w-full  mt-5 ml-5 font-bold">Cart ({cart.length})</h1>
        <div className="flex flex-col items-center">
          {cart.length ? (
            cart.map((item, index) => {
              sum += item.price;
              return (
                <div
                  key={index}
                  className="flex justify-between w-full border rounded-lg bg-slate-100 border-gray-400 p-2 m-2"
                >
                  <div className="flex">
                    <img src={item.image} alt="" height={50} width={50} />
                    <h1 className="text-lg text-left ml-5 max-h-fit align-middle">
                      {item.title}
                    </h1>
                  </div>
                  <div className="flex items-center">
                    <button
                      className="ml-5 bg-gray-400 hover:bg-slate-600 hover:text-red-400 max-h-fit p-2 rounded-lg"
                      onClick={() => {
                        dispatch(removeItem(item.id));
                      }}
                    >
                      Delete
                    </button>
                    <h2 className="ml-5">${item.price}</h2>
                  </div>
                </div>
              );
            })
          ) : (
            <h1 className="text-2xl font-bold">Cart is empty</h1>
          )}

          <hr />
          <h1 className="w-full  mt-5 ml-5 mr-5 text-right text-red-600 font-extrabold">
            Total: ${sum}
          </h1>
          <div className="flex justify-end">
            <Link
              to="/checkOut"
              className="block max-w-fit border p-4 rounded bg-green-500 text-right mt-5 mr-5 "
            >
              checkout
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
