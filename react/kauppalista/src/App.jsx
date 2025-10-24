// import { useState } from "react";
import AddList from "./AddList.jsx";
export default function App() {
  // const [count, setCount] = useState(0);
  // function handleAddCount() {
  //   setCount(count + 1);
  // }
  // function handleSubstractCount() {
  //   if (count === 0) {
  //     alert("The count cannot be negative!");
  //     return;
  //   }
  //   setCount(count - 1);
  // }
  return (
    <div className="container">
      <AddList />
    </div>
  );
}
