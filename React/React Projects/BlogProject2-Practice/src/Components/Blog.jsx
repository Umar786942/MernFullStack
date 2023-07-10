import React, { useContext } from 'react'
import { AppContext } from '../Context/AppContextProvider'
import BlogDetail from './BlogDetail'

function Blog() {
    const{posts,loading}=useContext(AppContext)
    // console.log("Post data is:-")
    // console.log(posts)
    
  return (
    
         <div className='w-[50%] mx-auto relative -z-10 flex flex-col gap-6'>
        {loading?(<div className='font-bold text-2xl flex justify-center items-center h-screen'><h1>Loading...</h1></div>):(posts.length===0?(<div className='flex justify-center items-center'><h1 className='font-bold text-2xl'>No Blogs Found</h1></div>):(
            posts.map((post)=>{
                return (<BlogDetail key={post.id} post={post}></BlogDetail>)
            })
        )
        )
        }

    </div>
    
   
  )
}

export default Blog