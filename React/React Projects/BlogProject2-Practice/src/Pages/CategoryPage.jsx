import React from 'react'
import Header from '../Components/Header'
import Blog from '../Components/Blog'
import Pagination from '../Components/Pagination'
import { useLocation, useNavigate } from 'react-router-dom'

function CategoryPage() {
    const navigate=useNavigate()
    const location=useLocation()
  return (
    
    <div className='mt-24 mb-24'>
          <Header></Header>
        <div className='flex gap-4 w-[50%] mx-auto items-center mb-4'>
            <button className='px-4 py-1 border-2 border-slate-200 rounded-md ' onClick={()=>{navigate(-1)}}>Back</button>
            <p className='font-bold text-[1.3rem]'>Blogs On <span className='underline'>{location.pathname.split("/").at(-1).replaceAll("-"," ")}</span></p>
        </div>
        
        <Blog></Blog>
        <Pagination></Pagination>
    </div>
  )
}

export default CategoryPage