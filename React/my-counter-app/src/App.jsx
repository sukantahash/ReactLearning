// TO manage the counter value we need to use useState hook in React
import { useState } from "react";
import './App.css';

// defines react component with name CounterApp
function CounterApp() {
  const [count, setCount] = useState(0); //initializes counter at 0

  const handleIncrement = () => setCount(count + 1);
  const handleDecrement = () => setCount(count - 1);
  const handleReset = () => setCount(0);

  return (
    <div className="counter-container">
      <h1>
        Counter App
      </h1>
      <p>Count: {count}</p> {/* Display current counter value */}
      <button onClick={handleDecrement}> - </button>
      <button onClick={handleIncrement}> + </button>
      <button onClick={handleReset}> Reset </button>
    </div>
  )
}

export default CounterApp;