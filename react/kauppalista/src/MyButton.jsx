import { useState } from "react";

export default function MyButton() {
  const [count, setCount] = useState(0);
  function handleAddCount() {
    setCount(count + 1);
  }
  function handleSubstractCount() {
    if (count === 0) {
      alert("The count cannot be negative!");
      return;
    }
    setCount(count - 1);
  }
  return (
    <div>
      <b>({count})</b>
      <button id="myButton" onClick={handleAddCount}>
        +1
      </button>
      <button id="myButton" onClick={handleSubstractCount}>
        -1
      </button>
    </div>
  );
}
