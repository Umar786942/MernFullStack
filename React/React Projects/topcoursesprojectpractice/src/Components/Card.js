import React, { useState } from "react";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import {toast} from 'react-toastify'
function Card({ id, title, description, image }) {
    // console.log(description.length<=250)
    const[dilchecked,setdilchecked]=useState(false)
    function onClickHandler(){
        if (dilchecked) {
            setdilchecked(false) 
            toast.warning("Course has been unliked",{autoClose:1000})
        } else {
            setdilchecked(true)
            toast.success("Liked Successfully",{autoClose:1000})
        }
        
    }
  return (
    <div className="w-[20rem] rounded-md flex flex-col gap-4 bg-slate-800">
      <div className="relative">
        <img src={image.url} alt={image.alt} className="rounded-md" />
        <button className="bg-white rounded-[50%] p-[0.4rem] absolute right-1 bottom-[-1rem]" onClick={onClickHandler}>{dilchecked?<FcLike className="text-[1.6rem]"></FcLike>:<FcLikePlaceholder className="text-[1.6rem]"></FcLikePlaceholder>}
          
        </button>
      </div>
      <h2 className="text-white font-medium text-[1.1rem] ml-3">{title}</h2>
      <p className="text-white ml-3 mb-4">{description.length<=200?description:`${description.slice(0,201)}...`}</p>
    </div>
  );
}

export default Card;
