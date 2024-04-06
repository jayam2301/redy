import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { incNumber, decNumber } from "./Actions/index";

function App() {
  const myState = useSelector((state) => state.changeNumber);
  const dispatch = useDispatch();
  return (
    <>
      <div className="container">
        <h1>Increment/Decrement Counter</h1>
        <h4>Using React and Redux toolkit</h4>
        <div className="quantity">
          <a
            className="quantity_minus"
            title="Decrement"
            onClick={() => dispatch(decNumber())}
          >
            <span>-</span>
          </a>
          <input
            name="quantity"
            type="text"
            className="quantity_input"
            value={myState}
          />
          <a
            className="quantity_plus"
            title="Decrement"
            onClick={() => dispatch(incNumber())}
          >
            <span>+</span>
          </a>
        </div>
      </div>
    </>
  );
}

export default App;
