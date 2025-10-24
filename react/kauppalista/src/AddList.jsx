import MyButton from "./MyButton.jsx";
import { useState } from "react";

export default function List() {
  const [items, setItems] = useState([]);
  const [input, setInput] = useState("");

  function handleAdd() {
    const text = input.trim();
    if (!text) return;
    setItems([...items, { id: crypto.randomUUID(), text }]);
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
        <button onClick={handleAdd} id="add">
          Add
        </button>
      </div>
      <ul>
        {items.map((item) => (
          <div className="list">
            <li key={item.id}>
              {item.text}
              <MyButton />
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
}
