import { filterData,apiUrl } from './data';
import './App.css';
import NavBar from './Components/NavBar';
import Filter from './Components/Filter';
import Cards from './Components/Cards';
import { ToastContainer} from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css'; 
import { useEffect, useState } from 'react';
import Spinner from './Components/Spinner';

function App() {
  const[allCourses,setAllCourses]=useState([])
  const[buttonId,setButtonId]=useState(filterData[0].title)
  const[loading,setLoading]=useState(true)
  async function fetchApi(){
    
    try {
      const response=await fetch(apiUrl)
      const allCourses=await response.json()
      setAllCourses(allCourses.data)
      // console.log(allCourses)
    } catch (error) {
      console.log(error)
    }
    setLoading(false)
  }
  useEffect(()=>{fetchApi()},[])
  
  return (
    <div className="w-screen min-h-screen bg-slate-500 flex flex-col gap-4 box-border">
     <NavBar></NavBar>
     <Filter typeOfCourses={filterData} buttonId={buttonId} setButtonId={setButtonId}></Filter>
     {loading?(<Spinner/>):(<Cards buttonId={buttonId} allCourses={allCourses}></Cards>)}
     
     <ToastContainer />
    </div>
    
  );
}

export default App;
