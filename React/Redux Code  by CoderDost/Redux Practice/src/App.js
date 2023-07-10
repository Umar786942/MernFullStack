import { useSelector } from "react-redux";
import "./App.css";
import AccountComponent from "./Components/AccountComponent";
import BonusComponent from "./Components/BonusComponent";
import RewardComponent from "./Components/RewardComponent";


function App() {
const amount=useSelector((state)=>state.account.amount)
const points=useSelector((state)=>state.bonus.points)
const userAmount=useSelector((state)=>state.account.userAmount)
const pending=useSelector((state)=>state.account.pending)
const error=useSelector((state)=>state.account.error)

  return (
  <div className="w-screen bg-slate-500 text-white flex flex-col gap-6 h-screen">
  <div>
  <h1 className="mt-8">App Component : </h1>
      <h2>Current Amount : ${amount}</h2>
      <h2>Total bonus : ${points}</h2>

      {pending?(<div className="font-bold text-black">Loading</div>):(error?(<p>Error Message : {error.message}</p>):(<h2>User Amount : ${userAmount}</h2>))}
  </div>
      
      
      <AccountComponent></AccountComponent>
      <BonusComponent></BonusComponent>
      <RewardComponent></RewardComponent>
  </div>
  );
}

export default App;
