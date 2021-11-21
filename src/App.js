import { useEffect, useReducer, useRef, useState } from "react";
import "./App.css";
import reducer from "./reducer";
function App() {
  // const [counter, setCounter] = useState(0);

  const initialState = {
    count: 2,
    square: 0,
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  const inputRef = useRef(null);
  const handleCounter = () => {
    // setCounter(prevCounter => {
    //   return prevCounter + 1;
    // })
    dispatch({ type: "INCREAMENT" });
    dispatch({ type: "SQUARE" });
  };

  const { count, square } = state;

  useEffect(() => {
    inputRef.current.focus();
    console.log(inputRef);
  }, []);

  return (
    <div className="container-fluid bg-light">
      <div className="bg-primary">
        <p className="lead text-light">hellow world {count}</p>
        <p className="text-white">{square}</p>
        <button className="btn btn-warning" onClick={handleCounter}>
          Count
        </button>
      </div>

      <div className="m-3">
        <form>
          <label htmlFor="inputN" className="form-label">
            Name:
          </label>
          <input
            type="text"
            className="form-control"
            id="inputN"
            ref={inputRef}
          />
          <label htmlFor="inputE" className="form-label">
            Email:
          </label>
          <input type="email" className="form-control" id="inputE" />
        </form>
      </div>
    </div>
  );
}

export default App;
