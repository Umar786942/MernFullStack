import React from 'react'
import { useLocation } from 'react-router-dom'
import Blog from '../Components/Blog'
import Pagination from '../Components/Pagination'
import { useNavigate } from 'react-router-dom'
import Header from '../Components/Header'

function TagPage() {
    const location = useLocation()
    const navigate=useNavigate()
  return (
    <div className='mt-5 mb-24'>
           <Header></Header>

           <div className='flex gap-4 w-[50%] mx-auto mt-24 items-center mb-4'>
            <button className='px-4 py-1 border-2 border-slate-200 rounded-md ' onClick={()=>{navigate(-1)}}>Back</button>
            <p className='font-bold text-[1.3rem]'>Blogs Tagged <span className='underline text-blue-700'>{`#${location.pathname.split("/").at(-1).replaceAll("-"," ")}`}</span></p>
        </div>
        
        <Blog></Blog>
        <Pagination></Pagination>
    </div>
  )
}

export default TagPage