import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState<number>(0);

  const inc = () => {
    setCount(count + 1);
  };

  const dec = () => {
    setCount(count - 1);
  };

  return (
    <>
      <div>
        <button onClick={inc}>+</button>
        <p>{count}</p>
        <button onClick={dec}>-</button>
      </div>
    </>
  );
}

export default App;
