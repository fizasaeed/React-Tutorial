import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(15); // in this line counter is a variable and setcounter is a function which is used to update this variable

  // let counter = 5;

  const Addvalue = () => {
    if (counter < 20) {
      setCounter(counter + 1);
    }
  };
  const RemoveValue = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };
  return (
    <>
      <h1>hello There</h1>
      <h2>Counter value {counter}</h2>
      <button onClick={Addvalue}>Add value {counter}</button>
      <br />
      <button onClick={RemoveValue}>Remove value {counter}</button>
    </>
  );
}

export default App;
