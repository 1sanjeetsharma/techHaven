import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./slices/cartSlice.js";
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
      </div>
    </>
  );
}

export default App;
