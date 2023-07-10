import React from 'react'
import { Outlet } from 'react-router-dom'
function ParentComponent() {
  return (
    <div className='w-full h-full flex justify-center items-center'><Outlet></Outlet></div>
  )
}

export default ParentComponent