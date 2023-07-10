
  
function Account({increment,decrement,incrementByAmount,value,setValue,account}) {
 
  return (
    <div className="card">
      <div className="container">
        <h4>
          <b>Account Component</b>
        </h4>
        <h3>Amount:${account.amount}</h3>
        <button onClick={increment}>Increment +</button>
        <button onClick={decrement}>Decrement -</button>
        <input type="text" onChange={(e) => setValue(Number(e.target.value))}></input>
        <button onClick={() => incrementByAmount(value)}>
          Increment By {value} +
        </button>
      </div>
    </div>
  );
}

export default Account;
