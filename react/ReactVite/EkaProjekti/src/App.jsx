import { useState } from "react";
import Ecocom from "./assets/ecocom.png";

export default function App() {
  const [isOn, setIsOn] = useState(false);
  return (
    <div className="container">
      <button className={isOn ? "on" : "off"} onClick={() => setIsOn(!isOn)}>
        {isOn ? "On" : "Off"}
      </button>

      <a href="https://ecocom.fi">
        <img src={Ecocom} alt="Ecocom" width="50" />
      </a>
    </div>
  );
}
