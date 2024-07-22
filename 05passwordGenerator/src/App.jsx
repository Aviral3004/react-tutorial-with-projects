import React, { useCallback, useEffect, useRef, useState } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  //!useCallback is a hook in React
  //!that allows you to memoize a function,
  //!preventing it from being recreated on every render.
  //!This can improve performance by avoiding unnecessary re-renders or re-executions of expensive operations.

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*()_+-[]{}~";

    for (let i = 0; i < length; i++) {
      let charIdx = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(charIdx);
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);

  //! useEffect is a React hook that runs side effects (like fetching data or updating the DOM) after the component renders.
  //!It can be configured to run only once, every time the component updates, or when specific dependencies change.

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator]);

  //! If we need to take reference of something then we can use useRef hook.
  //!useRef hook: (will be used to highlight the password generated before pasting it to some other place)

  const passwordRef = useRef(null);

  const copyPasswordToClipBoard = useCallback(() => {
    passwordRef.current?.select(); //! to select the password (highlight it)
    passwordRef.current?.setSelectionRange(0, 5); //! to select the passwordRange
    window.navigator.clipboard.writeText(password); //! to write password back to clipboard
  }, [password]);

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 py-3 text-orange-500 bg-gray-700">
        <h1 className="text-white text-center">Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
            ref={passwordRef}
          />
          <button
            className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 hover:bg-red-500 hover:text-black hover:duration-500"
            onClick={copyPasswordToClipBoard}
          >
            Copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label>Length: {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={() => {
                setNumberAllowed((prev) => !prev);
              }}
            />
            <label>Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="charInput"
              onChange={() => {
                setCharAllowed((prev) => !prev);
              }}
            />
            <label>Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
