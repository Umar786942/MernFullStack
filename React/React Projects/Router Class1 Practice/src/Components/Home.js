import React from 'react'
// import { Outlet } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
function Home() {
    const navigate=useNavigate()
    const onClickHandler=(e)=>{
      navigate(`/${e.target.name}`)
    }

    const previousPage=(e)=>{
           navigate(-1)
    }
   

  return (
    <div className='w-[50%] h-[50%] flex flex-col gap-6 justify-center items-center bg-slate-600'>
    <p>This is Home Page</p>
    <div className='flex gap-4 p-1'>
    <button name='about' onClick={onClickHandler} className='px-2 py-2 rounded-md bg-white text-slate-400 hover:bg-slate-400 hover:text-white duration-200'>Navigate to About</button>
    <button name='courses' onClick={onClickHandler} className='px-2 py-2 rounded-md bg-white text-slate-400  hover:bg-slate-400 hover:text-white duration-200'>Navigate to Courses</button>
    <button name='labs' onClick={onClickHandler} className='px-2 py-2 rounded-md bg-white text-slate-400  hover:bg-slate-400 hover:text-white duration-200'>Navigate to Labs</button>
    
    </div>
    <div className='flex gap-6 w-full justify-center'>
        <button onClick={previousPage} className='px-2 py-2 rounded-md bg-white text-slate-400  hover:bg-slate-400 hover:text-white duration-200'>Previous Page</button>
        
    </div>
    
    
    </div>
  )
}

export default Home