import React from "react"
import Count from "./Count"

const Counter = () => {
  const [count, setCount] = React.useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      < Count nbClicks = {count} />
    </div>
  );
};

export default Counter