import { useState } from "react";
import { increment,decrement,incrementByAmount, getUserAccount } from "../actions";
import { useSelector,useDispatch } from "react-redux";
function Account() {
 
 const [value,setValue] = useState(0) ; 

 const amount = useSelector(state=>state.account.amount)
 const points = useSelector(state=>state.bonus.points)//with the help of redux we are able to show bonus value in account component without any hastle
 const dispatch = useDispatch()

  return (
      <div className="card">
        <div className="container">
          <h4>
            <b>Account Component</b>
          </h4>
          <h3>Amount:${amount}</h3>
          <h3>points:${points}</h3>
          {/* the dispatch below will get the action form action creator and pass it to reducer to updtae the state..this is working as store.dispatch  */}
          <button onClick={()=>dispatch(increment())}>Increment +</button>
          <button onClick={()=>dispatch(decrement())}>Decrement -</button>
          <input type='text' onChange={(e)=>setValue(+e.target.value)}></input>
          <button onClick={()=>dispatch(incrementByAmount(value))}>Increment By {value} +</button>
          <button onClick={()=>dispatch(getUserAccount(1))}>Init Account</button>

        </div>
      </div>
  );
}

export default Account;
