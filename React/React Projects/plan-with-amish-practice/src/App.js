
import './App.css';
import data from './data';
import Tours from './Components/Tours';
import { useState } from 'react';

function App() {
  const[allTours,setallTours]=useState(data)
  if(allTours.length===0){
       return(<div className='refreshDiv'>
        <h2>No Tours Left</h2>
        <button onClick={()=>{
          setallTours(data)
        }}>Refresh</button>
       </div>
        
       );
  }
  const removeCardMethod=(id)=>{
      const newallTours=allTours.filter((obj)=>{return obj.id!==id})
      setallTours(newallTours)
  }
  return (
    <div className="App">
     <Tours removeCardMethod={removeCardMethod} allTours={allTours}></Tours>
    </div>
  );
}

export default App;
