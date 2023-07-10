import React, { useContext } from 'react'
import { AppContext } from '../Context/AppContextProvider'

function Pagination() {
    const{page,totalPages,handleClick}=useContext(AppContext)
  return (
    <div className='py-2 border-t-2 border-slate-300 w-screen z-10 bg-white fixed bottom-0 '>
        <div className='w-[50%] mx-auto flex justify-between'>
        <div className='flex gap-3'>
        {page>1 && <button className='px-4 py-1 rounded-md border-2 cursor-pointer' onClick={()=>{handleClick(page-1)}}>Previous</button>}
            {page<totalPages && <button className='px-4 py-1 rounded-md border-2 cursor-pointer'  onClick={()=>{handleClick(page+1)}}>Next</button>}
        </div>
           <p className='font-semibold'>Page {page} of {totalPages}</p>
        </div>
    </div>
  )
}

export default Pagination