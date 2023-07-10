import React, { useContext, useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { AppContext } from '../Context/AppContextProvider'
import BlogDetail from '../Components/BlogDetail'
import Header from '../Components/Header'

function SpecificBlogPage() {
  console.log("inside specific blog page")
    const{loading,setLoading}=useContext(AppContext)
    const[blog,setBlog]=useState(null)
    const[relatedBlogs,setRelatedBlogs]=useState([])
    const location=useLocation()
    const navigate=useNavigate()
    const blogId=location.pathname.split("/").at(-1)
    const newBaseUrl="https://codehelp-apis.vercel.app/api/get-blog"

 const fetchspecificBlog=async()=>{
     setLoading(true)
      try {
       
        const response=await fetch(`${newBaseUrl}?blogId=${blogId}`)
        const data=await response.json()
        setBlog(data.blog)
        setRelatedBlogs(data.relatedBlogs)
        
      } catch (error) {
        console.log("Error in fetching related blogs")
      }
      setLoading(false)
 }
 useEffect(()=>{fetchspecificBlog()},[location.pathname])

  return (
    <div>
        {loading?( <div className='w-screen font-bold text-2xl flex items-center justify-center h-screen'>Loading...</div>):(!blog?(<div className='w-screen font-bold text-2xl flex items-center justify-center h-screen'>No Blogs Found</div>):(<div>
                <Header></Header>
                <div className='w-[50%] mx-auto flex flex-col gap-8 mt-[5rem] mb-8'>
                <button className='px-4 py-1 border-2 border-slate-200 rounded-md hover:border-2 hover:font-bold hover:shadow-md duration-100 w-[5rem] text-center' onClick={()=>{navigate(-1)}}>Back</button>
            <BlogDetail post={blog}></BlogDetail>
          <h1 className='font-bold text-[1.8rem]'>Related Blogs : </h1>
           {relatedBlogs.map((relatedblog)=><BlogDetail key={relatedblog.id} post={relatedblog}></BlogDetail>)}
                </div>
               

        </div>
          
        ))}
    </div>
  )
}

export default SpecificBlogPage