import React from 'react'
import { FaQuoteLeft,FaQuoteRight,FaChevronLeft,FaChevronRight } from "react-icons/fa";
function Card({singleReview,setSingleReview,reviews}) {
    let index=reviews.indexOf(singleReview)
    console.log("index before function - "+index)
    function slideLeft(){
        if(index===0){
            console.log("inside if")
            setSingleReview(reviews[reviews.length-1])
        }else{
            index-=1
            console.log(index)
            setSingleReview(reviews[index])
        }

    }
    function slideRight(){
        if(index===reviews.length-1){
            console.log("inside if")
            setSingleReview(reviews[0])
        }else{
            index+=1
            console.log(index)
            setSingleReview(reviews[index])
        }
       
    }
    function susrpriseTestinomial(){
        index=Math.floor(Math.random() * reviews.length)
        setSingleReview(reviews[index])   
    }
  return (
    <div className='w-[90%] h-[70%] lg:w-[50%] mx-auto bg-white flex flex-col items-center p-10 rounded-md shadow-md hover:shadow-xl duration-200 gap-6 md:relative'>
    <div className='relative w-[140px] h-[140px] rounded-full md:absolute md:left-8 md:-top-16'>
    <img src={singleReview.image} alt="profile" className='w-[140px] h-[140px] rounded-full absolute z-20'/>
    <div className='w-[140px] h-[140px] rounded-full bg-slate-400 absolute z-10 -right-3 bottom-2'></div>
    </div>
    
      <div className='text-center'>
      <h2 className='font-bold text-[1.2rem] md:text-[1.5rem]'>{singleReview.name}</h2>
      <h2 className='text-slate-400 uppercase tracking-wider'>{singleReview.job}</h2>
      </div>
      
      <FaQuoteLeft className='text-purple-400'></FaQuoteLeft>
      <p className='text-center text-slate-400 h-[30%]'>{singleReview.text}</p>
      <FaQuoteRight className='text-purple-400'></FaQuoteRight>
      <div className='flex gap-4 text-[1.5rem] mt-4'>
         <FaChevronLeft className='text-purple-400' onClick={slideLeft}></FaChevronLeft>
         <FaChevronRight className='text-purple-400' onClick={slideRight}></FaChevronRight>
      </div>
      <button className='bg-purple-400 px-8 font-bold rounded-md text-lg text-white py-2 border-none hover:bg-violet-500 duration-100 hover:shadow-xl' onClick={susrpriseTestinomial}>Surprise Me</button>
    </div>
  )
}

export default Card