import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card";

function App() {
  // const [count, setCount] = useState(0);
  //! you can pass variables as props in jsx
  let myObj = {
    username: "aviral",
    age: 22,
  };

  let myArr = new Array(1, 2, 3, 4, 5);

  return (
    <>
      <h1 className="bg-green-500 text-black p-4 rounded mb-5">
        Tailwind Test
      </h1>
      {/* <figure class="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
      <img class="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="https://images.pexels.com/photos/106685/pexels-photo-106685.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" width="384" height="512"/>
      <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
        <blockquote>
          <p class="text-lg font-medium">
            “Tailwind CSS is the only framework that I've seen scale
            on large teams. It’s easy to customize, adapts to any design,
            and the build size is tiny.”
          </p>
        </blockquote>
        <figcaption class="font-medium">
          <div class="text-sky-500 dark:text-sky-400">
            Sarah Dayan
          </div>
          <div class="text-slate-700 dark:text-slate-500">
            Staff Engineer, Algolia
          </div>
        </figcaption>
      </div>
    </figure> */}
      {/* <Card channel="chai aur code" someObj={myObj} /> //! use of props
      <Card someArr={myArr} /> */}
      <Card username="aviral" btnText = "click me"/>
      <Card username="hitesh" btnText = "visit me"/>
    </>
  );
}

export default App;
