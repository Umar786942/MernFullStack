import React from 'react'

function Filter(props) {
    // const classValue1=`text-white cursor-pointer text-[1.3rem] bg-slate-700 px-2 py-1 rounded-md bg-slate-900 border-[0.2rem]`
    // const classValue2=`text-white cursor-pointer text-[1.3rem] bg-slate-700 px-2 py-1 rounded-md focus:bg-slate-900 focus:border-[0.2rem]`

    function onClickHandler(e){
        props.setButtonId(e.target.innerText)
        // console.log(`${e.target.innerText} got clicked`)
    }
  return (
    <div className='flex flex-wrap gap-4 justify-center '>
   
    {props.typeOfCourses.map((typeOfCourse,index)=>{
             return( <button key={typeOfCourse.id} onClick={onClickHandler} className={`text-white cursor-pointer text-[1.3rem] bg-slate-700 px-2 py-1 rounded-md ${typeOfCourse.title===props.buttonId?'border-[0.2rem]':""}`}>
    {typeOfCourse.title}
    </button>)
        })}
        
    </div>
  )
}

export default Filter