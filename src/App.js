
import { useState } from 'react';
import './App.css';

function App() {
  const [counter, setCounter] = useState(0);
  const handleCounter = () => {
    setCounter(prevCounter => {
      return prevCounter + 1;
    })
  }
  return (
    <div className="bg-primary">
      <p className="lead text-light">hellow world {counter}</p>
      <button className="btn btn-warning" onClick={handleCounter}>Count</button>
    </div>
  );
}

export default App;
