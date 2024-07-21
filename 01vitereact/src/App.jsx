import { useState } from "react";
function App() {
  const [count, setCount] = useState(0);

  const handleCount = () => {
    setCount(count + 1);
  };

  return (
    <>
      <h1>React with Vite</h1>
      <button onClick={handleCount}>
        count is {count}
      </button>
    </>
  );
}

export default App;
