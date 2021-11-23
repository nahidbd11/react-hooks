import {
  useContext,
  useEffect,
  useReducer,
  useRef,
  useState,
  useMemo,
} from "react";
import "./App.css";
import ImpertativeComp from "./component/ImperativeComp";
import { Context } from "./context/Context";
import reducer from "./reducer";

function App() {
  // const [counter, setCounter] = useState(0);
  const { helloText, userName } = useContext(Context);
  const initialState = {
    count: 2,
    square: 0,
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  const inputRef = useRef(null);
  const imperativeRef = useRef(null);
  const handleCounter = () => {
    // setCounter(prevCounter => {
    //   return prevCounter + 1;
    // })
    dispatch({ type: "INCREAMENT" });
    dispatch({ type: "SQUARE" });
  };

  const { count, square } = state;
  function cubicNum(count) {
    console.log("cubic funtion running");
    return Math.pow(count, 4);
  }
  let cube = useMemo(() => cubicNum(count), [count]);
  useEffect(() => {
    inputRef.current.focus();
    imperativeRef.current.changeText();
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
      {/*HACK: forwarding ref to child element and implementig useImperative handle hook */}
      <ImpertativeComp ref={imperativeRef} />
      <button
        className="btn btn-outline-dark"
        onClick={() => imperativeRef.current.changeImpState()}
      >
        change hello
      </button>
      {/* FIXME:Accesing context data here */}
      <div className="bg-warning">
        {helloText} {userName} islam
      </div>
      {/* FIXME:created para by react will show here on button click */}
      {state.para}
      <button
        className="btn btn-info my-3"
        onClick={() => dispatch({ type: "CREATE_PARA" })}
      >
        Create p tag with react
      </button>
      <p className="text-black">
        {count} to the power 4 is {cube}
      </p>
    </div>
  );
}

export default App;
