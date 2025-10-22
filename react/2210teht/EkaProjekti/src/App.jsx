import { useState } from "react"
import "./App.css"
import Ecocom from "./assets/ecocom.png"

export default function App() {
  function Nappi() {
    const [isOn, setIsOn] = useState(false)
    function handleClick() {
      setIsOn(isOn => !isOn)
    }
    return <button onClick={handleClick} className={ isOn ? "on" : "off"}>{ isOn ? "On" : "Off"}</button>
  }
  
  return <div className="container">
    <Nappi />
    <a href="https://ecocom.fi"><img src={Ecocom} alt="Ecocom logo" /></a>
  </div>
}