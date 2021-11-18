
import { useReducer, useState } from 'react';
import './App.css';
import reducer from './reducer';
function App() {
  // const [counter, setCounter] = useState(0);
  
    const initialState = {
    count: 1,
    square:0,
}
  const [state, dispatch] = useReducer(reducer, initialState);
  const handleCounter = () => {
    // setCounter(prevCounter => {
    //   return prevCounter + 1;
    // })
    dispatch({ type: "INCREAMENT" });
    dispatch({ type: "SQUARE" });
  }

  const { count, square } = state;
  return (
    <div className="bg-primary">
      <p className="lead text-light">hellow world {count}</p>
      <p className="text-white">{square}</p>
      <button className="btn btn-warning" onClick={handleCounter}>Count</button>
    </div>
  );
}

export default App;
