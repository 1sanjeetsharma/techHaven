import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./slices/cartSlice.js";
import Products from "./Products.jsx";
function App() {
  const count = useSelector((state) => state.cart.count);
  const dispatch = useDispatch();

  return (
    <>
      <div>
        <p className="read-the-docs">Hello</p>
        <br />
        count : {count}
        <button onClick={() => dispatch(increment())}>
          click to increment
        </button>
        <button onClick={() => dispatch(decrement())}>
          click to decrement
        </button>
        <Products />
        <h1 className="text-3xl font-bold underline text-red-300">
          Hello world!
        </h1>
      </div>
    </>
  );
}

export default App;
