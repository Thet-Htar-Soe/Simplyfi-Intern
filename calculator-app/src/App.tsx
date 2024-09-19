import { useState } from "react";
import "./App.css";

const App = () => {
  const [result, setResult] = useState<string>("");
  const handleClick = (value: string) => {
    setResult(result + value);
  };
  const clearAll = () => {
    setResult("");
  };
  const calculate = () => {
    try {
      setResult(eval(result).toString());
    } catch (error) {
      setResult("error");
      console.error(error);
    }
  };
  return (
    <>
      <div className="App">
        <h1>Simple Calculator</h1>
        <div className="calculator">
          <input type="text" value={result} readOnly />
          <div className="keypad">
            <button onClick={() => handleClick("1")}>1</button>
            <button onClick={() => handleClick("2")}>2</button>
            <button onClick={() => handleClick("3")}>3</button>
            <button onClick={() => handleClick("+")}>+</button>
            <button onClick={() => handleClick("4")}>4</button>
            <button onClick={() => handleClick("5")}>5</button>
            <button onClick={() => handleClick("6")}>6</button>
            <button onClick={() => handleClick("-")}>-</button>
            <button onClick={() => handleClick("7")}>7</button>
            <button onClick={() => handleClick("8")}>8</button>
            <button onClick={() => handleClick("9")}>9</button>
            <button onClick={() => handleClick("*")}>*</button>
            <button onClick={() => handleClick("0")}>0</button>
            <button onClick={clearAll}>C</button>
            <button onClick={calculate}>Cal</button>
            <button onClick={() => handleClick("/")}>/</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
