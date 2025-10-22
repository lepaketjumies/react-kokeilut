import Megaforce from "./assets/megis.png"
import megis from "./assets/megis.wav"
import { useState, useRef, useEffect } from "react"
import "./App.css"

export default function App() {
  function Nappi() {
    const [count, setCount] = useState(0)
    const audioRef = useRef(null)

    useEffect(() => {
      audioRef.current = new Audio(megis)
      audioRef.current.preload = "auto"
    }, [])

    function handleClick() {
      setCount(count + 1)
      const audio = audioRef.current
      audio.currentTime = 0
      audio.play()
    }

    return <div className="container"><button onClick={handleClick}><img src={Megaforce} alt="Megaforce" /></button><p>Count: {count}</p></div>
  }

  return <>
    <h1>Megisclicker</h1>
    <Nappi />
  </>
}