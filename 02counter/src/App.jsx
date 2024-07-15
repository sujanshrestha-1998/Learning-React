import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(15);

  const addValue = () => {
    setCounter(counter + 1);
    if (counter == 20) {
      setCounter(20);
    }
  };

  const removeValue = () => {
    setCounter(counter - 1);
    if (counter == 0) {
      setCounter(0);
    }
  };
  return (
    <>
      <h1>Hello World</h1>
      <h2>Counter Value: {counter}</h2>
      <button onClick={addValue}>Add Value</button>
      <br />
      <br />
      <button onClick={removeValue}>Decrease Value</button>
    </>
  );
}

export default App;
