import { add, subtract } from "./Calculate"; // Assuming the functions are in a separate file

const Calculator = () => {
  const sum = add(5, 3);
  const difference = subtract(10, 4);

  return (
    <div>
      <h1>Math Operations</h1>
      <p>5 + 3 = {sum}</p>
      <p>10 - 4 = {difference}</p>
    </div>
  );
};

export default Calculator;
