import React from 'react'
import { NavLink } from 'react-router-dom'

function BlogDetail({post}) {
  
  return (
    <div className='flex flex-col gap-2'>
       <NavLink to={`/blog/${post.id}`} ><span className="font-bold text-[1.25rem] hover:underline">{post.title}</span></NavLink> 
        
       <div className='text-[0.9rem]'>
       <p>
        By <span className='italic opacity-90'>{post.author}</span> On <NavLink to={`/category/${post.category.replaceAll(" ","-")}`}>
        <span className='underline font-medium cursor-pointer'>{post.category}</span>
        </NavLink>
       </p>
       <p>Posted On <span>{post.date}</span></p>
       </div>
      
       <p className='font-sans'>{post.content}</p>
       <div className='flex gap-3 text-[0.9rem]'>
        {post.tags.map((tag,index)=>{
            return (
                <NavLink to={`/tag/${tag.replaceAll(" ","-")}`} key={index}><span className='cursor-pointer underline text-xs font-bold text-indigo-700' >{`#${tag}`}</span></NavLink>
                
                
        )})}
       </div>
    </div>
  )
}

export default BlogDetail