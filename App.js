import "./App.css";
import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);

  const addOne = () => {
    setCounter(counter + 1);
  };

  return (
    <div
      style={{
        display: "flex ",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        background: "#ffb703",
      }}
    >
      <h1> {counter}</h1>
      <button onClick={addOne}> click me </button>
    </div>
  );
}

export default App;
