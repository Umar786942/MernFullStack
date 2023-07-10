import './App.css';
import Account from './components/Account';
import Bonus from './components/Bonus';
import { useState } from 'react';

function App() {
  const [account, setAccount] = useState({ amount: 0 });
  const [value, setValue] = useState(0);

  const increment = () => {
    setAccount({ amount: account.amount + 1 });
  };

  const decrement = () => {
    setAccount({ amount: account.amount - 1 });
  };

  const incrementByAmount = (value) => {
    setAccount({ amount: account.amount + value });
  };

  const [points, setPoints] = useState({ value: 0 });

  const incrementBonus = () => {
    setPoints({ value: points.value + 1 });
  };

  return (
    <div className="App">
      <h4>App</h4>
      <h3>Current Amount :{account.amount} </h3>
      <h3>Total Bonus :{points.value} </h3>

      <Account account={account} increment={increment} decrement={decrement} incrementByAmount={incrementByAmount} value={value} setValue={setValue} ></Account>
      <Bonus points={points} setPoints={setPoints} incrementBonus={incrementBonus}></Bonus>
    </div>
  );
}

export default App;
