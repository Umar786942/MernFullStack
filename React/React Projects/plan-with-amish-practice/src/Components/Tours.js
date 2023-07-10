import React from 'react'
import Card from './Card'
function Tours({allTours,removeCardMethod}) {
  return (
    <div className='container'>
        <div className='Heading'><h1>Plan With Amish</h1></div>
  
    <div className='cards'>
    {
        allTours.map((tour)=>{
               return <Card removeCardMethod={removeCardMethod} {...tour}></Card>
         })
    }

    </div>
    </div>
  )
}

export default Tours