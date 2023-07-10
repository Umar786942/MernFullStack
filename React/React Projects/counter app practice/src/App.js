import { useState } from "react";
import "./App.css";

function App() {
  const[value,setValue]=useState(0)
  return (
    <div className="bg-slate-500 w-screen h-screen flex flex-col gap-5  justify-center items-center">
    <h1 className="text-3xl font-bold">Increment & Decrement</h1>
      <div className="flex rounded-md bg-white text-black text-2xl w-[16rem] p-2 items-center justify-between">
     
      <div className="w-[30%] text-center text-5xl p-2 cursor-pointer select-none" onClick={()=>setValue(value-1)}>-</div>
       
        <div className="w-[30%] text-center text-3xl p-2 border-x-4 select-none">{value}</div>

        <div className="w-[30%] text-center text-5xl p-2 cursor-pointer select-none" onClick={()=>setValue(value+1)}>+</div>

      </div>
      <button className="text-white cursor-pointer text-2xl border-2 px-5 py-1 rounded-md  bg-slate-800 transition-all hover:text-black hover:bg-white duration-150" onClick={()=>{setValue(0)}}>Reset</button>
    </div>

 );
}

export default App;
