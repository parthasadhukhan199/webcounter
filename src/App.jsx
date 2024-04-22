import { useState } from "react";

import "./app.css";

export default function App() {
  const [count, setcount] = useState(0);
  
const add = () =>{
  console.log("add",Math.random())
  setcount(count+1)
}
const remove = () =>{
  console.log("remove",Math.random())
  setcount(count-1)
}

  
  return (
    <>
      <div className="body bg-slate-400">
        <nav>
          <div className="text-white p-4 text-4xl w-full bg-slate-600">
            Counter app
          </div>
        </nav>
        <main className="text-white p-6 ">
          <div className="text-8xl">Count: {count}</div>
          <button className="border-solid border-2 border-white mx-5 my-10 cursor-pointer hover:bg-white hover:text-black rounded-md px-3 oy-5" onClick={add}>
            click here to increase
          </button>
          <button className="border-solid border-2 border-white mx-5 my-10 cursor-pointer hover:bg-white hover:text-black rounded-md px-3 oy-5" onClick={remove}>
            click here to decrease
          </button>
        </main>
      </div>
    </>
  );
}
