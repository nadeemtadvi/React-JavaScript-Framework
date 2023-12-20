import Tea from "./tea"
import { useState, useCallback, useEffect } from "react"
function App() {
  const [length, setlength] = useState(8)
  const [numberlo, setnumberlo] = useState(false)
  const [charlo, setcharlo] = useState(false)
  const [password, setpassword] = useState("")
  const passgenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberlo) str += "0123456789"
    if (charlo) str += "!~`;:<>?{}+_)(*&^%$#@,./;'[]-"
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }
    setpassword(pass)

  }, [length, numberlo, charlo, setpassword])

  useEffect(() => {passgenerator()},[length,numberlo,charlo,passgenerator])

  const [color, setcolor] = useState("olive")

  let [counter, setcounter] = useState(15)
  // let counter=15
  const addValue = () => {
    console.log("clicked", counter);
    // counter = counter + 1 
    setcounter(counter + 1)
  }

  const removeValue = () => {
    setcounter(counter - 1)
  }

  return (
    <>
      <div>

        <Tea />
        <h1>Counter Value :- {counter}</h1>
        <button onClick={addValue}>Add Value</button><br /><br />
        <button onClick={removeValue}>Remove Value</button><br /><br />

      </div>
      <hr />
      <div><h1>Color Converter</h1></div>
      <div style={{ backgroundColor: color, height: 70, width: 370, padding: 25 }} >
        <button onClick={() => setcolor("red")} style={{ backgroundColor: "red" }}>Red</button>
        <button onClick={() => setcolor("green")} style={{ backgroundColor: "green" }}>Green</button>
        <button onClick={() => setcolor("blue")} style={{ backgroundColor: "blue" }}>Blue</button>
      </div><hr />

      <div style={{ backgroundColor: "skyblue", textAlign: "center", padding: 20 }}>
        <h1>Password Generator</h1>
        <div>
          <input type="text" value={password} placeholder="password" readOnly />
          <button style={{ backgroundColor: "purple" }}>Copy</button>
        </div>
        <div>
          <input type="range" min={6} max={100} value={length} className="cursor-pointer" onChange={(e) => { setlength(e.target.value) }} />
          <label>Length: {length}</label>
        </div>
        <div>
        <input type="checkbox" defaultChecked={numberlo} id="numberInput" onChange={() => {
        setnumberlo((prev) => !prev)}} />
        <label htmlFor="numberInput">Numbers</label>
        </div>
        <div>
        <input type="checkbox" defaultChecked={charlo} id="charInput" onChange={() => {
        setnumberlo((prev) => !prev)}} />
        <label htmlFor="charInput">Characters</label>
        </div>
      </div>

    </>
  )
}

export default App
