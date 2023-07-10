import React from 'react'
import useGif from '../CustomHooks/useGif'
import Spinner from './Spinner'
function RandomGifGenerator() {
    // console.log(useGif())
   const{loading,gif,getGifUrl}=useGif()
  return (
    <div className='w-[50%] bg-green-400 mx-auto border-2 border-slate-500 rounded-lg flex flex-col gap-4 items-center py-4'>
        <p className='text-2xl font-bold underline'>A RANDOM GIF</p>
        {loading?<Spinner></Spinner>:<img src={gif} alt="" className='w-[80%]' />}
        
        <button onClick={()=>{getGifUrl()}} className='w-11/12 bg-slate-200 p-2 font-medium rounded-lg'>GENERATE</button>
    </div>
  )
}

export default RandomGifGenerator