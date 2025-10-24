import { useState } from "react";

export default function List() {
  const [count, setCount] = useState(0);
  const [items, setItems] = useState([]);
  const [input, setInput] = useState("");
  function handleAddCount() {
    setCount(count + 1);
  }
  function handleSubstractCount() {
    if (count === 0) {
      alert("Count cannot be negative!");
      return;
    }
    setCount(count - 1);
  }
  function handleAdd() {
    const text = input.trim();
    if (!text) return;
    setItems([...items, { id: crypto.randomUUID(), text, count: count }]);
    setInput("");
  }
  return (
    <div>
      <div>
        <input
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
          placeholder="Add Item to the shopping list"
        />
        <button onClick={handleAdd}>Add</button>
      </div>
      <h2>shopping list</h2>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.text} <b>{count}</b>
            <button onClick={handleAddCount}>+1</button>
            <button onClick={handleSubstractCount}>-1</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
