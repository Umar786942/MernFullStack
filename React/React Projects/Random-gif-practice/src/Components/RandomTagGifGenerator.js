import React, { useState } from 'react'
import Spinner from './Spinner'
import useGif from '../CustomHooks/useGif'

function RandomTagGifGenerator() {
    
    const [tag,setTag]=useState("naruto")
    const{loading,gif,getGifUrl}=useGif(tag)
  return (
    <div className='w-[50%] bg-sky-300 mx-auto border-2 border-slate-500 h-max rounded-lg flex flex-col gap-4 items-center py-4'>
    <p className='text-2xl font-bold underline uppercase'>Random <span>{tag}</span> Gifs</p>
    {loading?<Spinner/>:<img src={gif} alt="" />}
    
    <input value={tag} onChange={(e)=>{setTag(e.target.value)}} type="text" name="gifname" id="gifname" className='w-11/12 bg-white p-2 font-medium rounded-lg text-center'/>
    <button onClick={()=>{getGifUrl(tag)}} className='w-11/12 bg-slate-200 p-2 font-medium rounded-lg'>GENERATE</button>
</div>
  )
}

export default RandomTagGifGenerator