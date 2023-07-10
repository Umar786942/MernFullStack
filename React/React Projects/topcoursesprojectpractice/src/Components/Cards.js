import React from 'react'
import Card from './Card'

function Cards({allCourses,buttonId}) {
//   console.log(allCourses)
const allDataArray=[]
if (buttonId==="All") {
    Object.values(allCourses).forEach((singleArray)=>{singleArray.forEach((eachCoursesDataObject)=>{allDataArray.push(eachCoursesDataObject)})})
} else {
    allCourses[buttonId].forEach((singleCoursesData)=>{allDataArray.push(singleCoursesData)})
    // console.log(allCourses)
    // console.log(allCourses[buttonId])
    // console.log(buttonId)
}


  return (
    <div className='w-[75%] mx-auto flex flex-wrap gap-4 justify-center'>
       {allDataArray.map((Course)=>{return <Card key={Course.id} {...Course}></Card>})}
      
     
    </div>
  )
}

export default Cards