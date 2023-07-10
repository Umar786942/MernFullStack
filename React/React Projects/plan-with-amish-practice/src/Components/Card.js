import React,{useState} from 'react'

function Card({id,name,info,tourimage,price,removeCardMethod}) {
   const [readMore,setReadMore]=useState(false)
   const description=readMore? info:`${info.substring(0,120)}...`
//    console.log(description)
//    console.log(info)
    
  return (
    <div className='singleCard'>
         <img src={tourimage} alt='tour'></img>
         <div className="tourInfo">
            <p>₹ {price}</p>
            <p>{name}</p>
         </div>
         <div className="tourDescription">
            {description}<span className='moreLess' onClick={()=>{
                setReadMore(!readMore)
            }}>{readMore?"Show Less":"Read More"}</span>
         </div>
         <div className="btn" onClick={()=>{removeCardMethod(id)}}>Not Interested</div>
    </div>


  )
}

export default Card