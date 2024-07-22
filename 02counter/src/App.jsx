import React from "react"
import { useState } from "react"
function App() {
  const [count, setCount] = useState(5);

  const addValue = () => {
    if(count == 20)
    {
      return;
    }
    setCount(count + 1);
  }

  const removeValue = () => {
    if(count == 0)
    {
      return;
    }
    setCount(count - 1);
  }

  return (
    <>
      <h1>Hello World!</h1>
      <h2>Counter Value: {count}</h2>
      <button onClick={addValue}>Add Value</button>
      <br />
      <br />
      <button onClick={removeValue}>Decrease Value</button>
    </>
  )
}

export default App
