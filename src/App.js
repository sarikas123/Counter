import { useState } from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <ABC firstname="" Sarika />
    </div>
  );
}

function ABC(props) {
  console.log(props);
  return (
    <div>
      Hii I am from
      <Counter />
    </div>
  );
}

const Counter = () => {
  const [Counter, setCounter] = useState(0);
  return (
    <div>
      {Counter}
      <button onClick={() => setCounter(Counter + 1)}>Add</button>
    </div>
  );
};
