import { useState } from "react";
import FirstComp from "./FirstComp";
function App() {
  const [count, setCount] = useState(0);

  const handleCount = () => {
    setCount(count + 1);
  };

  return (
    <>
      {/* <h1>React with Vite</h1> */}
      {/* You can only return ONE ELEMENT in jsx so enclose everything in a div*/}
      <div> 
        <FirstComp />
        <button onClick={handleCount}>count is {count}</button>
      </div>
    </>
  );
}

export default App;
