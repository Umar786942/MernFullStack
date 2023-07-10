import React from 'react'
import Header from '../Components/Header'
import Blog from '../Components/Blog'
import Pagination from '../Components/Pagination'

function HomePage() {
  return (
    <div className='w-screen mt-[6rem] mb-[6rem]'>
        <Header></Header>
        <Blog></Blog>
        <Pagination></Pagination>
    </div>
  )
}

export default HomePage