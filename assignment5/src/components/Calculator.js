import React, { useState } from "react";

function Calculator() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState("");

  const calculate = (op) => {
    let n1 = Number(num1);
    let n2 = Number(num2);

    switch (op) {
      case "add":
        setResult(n1 + n2);
        break;
      case "sub":
        setResult(n1 - n2);
        break;
      case "mul":
        setResult(n1 * n2);
        break;
      case "div":
        setResult(n2 !== 0 ? n1 / n2 : "Cannot divide by zero");
        break;
      default:
        setResult("Invalid");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Calculator</h2>

      <input
        type="number"
        placeholder="Enter number 1"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
      />

      <br /><br />

      <input
        type="number"
        placeholder="Enter number 2"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
      />

      <br /><br />

      <button onClick={() => calculate("add")}>Add</button>
      <button onClick={() => calculate("sub")}>Subtract</button>
      <button onClick={() => calculate("mul")}>Multiply</button>
      <button onClick={() => calculate("div")}>Divide</button>

      <h3>Result: {result}</h3>
    </div>
  );
}

export default Calculator;
