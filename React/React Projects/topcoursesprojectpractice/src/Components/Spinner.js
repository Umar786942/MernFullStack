import React from 'react'
import './Spinner.css'

function Spinner() {
  return (
    <div className='w-screen h-screen flex flex-col gap-2 bg-slate-500 items-center mt-8'>
        <div className="loader">
        </div>
        <h2 className='text-2xl font-bold text-white'>Loading...</h2>
    </div>
        
    
  )
}

export default Spinner