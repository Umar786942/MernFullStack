import React, { createContext, useState } from 'react'
import { baseUrl } from '../BaseUrl'
import { useNavigate } from 'react-router-dom'

export const AppContext=createContext()

function AppContextProvider({children}) {
    const[loading,setLoading]=useState(false)
    const[page,setPage]=useState(1)
    const[totalPages,setTotalPage]=useState(null)
    const[posts,setPosts]=useState([])
    const navigate=useNavigate()

    const fetchData=async(page,tag,category)=>{
        console.log("inside fetchdata")
        setLoading(true)
        let url=`${baseUrl}?page=${page}`
        if(tag){
            url+=`&tag=${tag}`
        }
        if(category){
            url+=`&category=${category}`
        }

        try {
            const response=await fetch(url)
            // console.log(response)
            const data=await response.json()
                     
            setPage(data.page)
            setTotalPage(data.totalPages)
            setPosts(data.posts)
           

        } catch (error) {
            console.log("Error in fetching blogPosts")
            console.log(error)
        }
        setLoading(false)
        console.log("exiting fetchdata")
    }
    const handleClick=(page)=>{
        navigate({search:`page=${page}`})
        setPage(page)
       
    }
   
    let data={
        loading,
        setLoading,
        page,
        totalPages,
        posts,
        fetchData,
        handleClick
    }
    
  return (
    <AppContext.Provider value={data}>
        {children}
    </AppContext.Provider>
    
  )
}

export default AppContextProvider