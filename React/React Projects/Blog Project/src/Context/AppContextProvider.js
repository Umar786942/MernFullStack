import React, { useState } from 'react'
import { baseUrl } from '../BaseUrl'
import { createContext } from 'react'

 export const AppContext=createContext()

function AppContextProvider({children}) {
    const[loading,setLoading]=useState(false)
    const[page,setPage]=useState(1)
    const[totalPages,setTotalPage]=useState(null)
    const[posts,setPosts]=useState([])
    
    async function getPosts(page=1){
        setLoading(true)
        let url=`${baseUrl}?page=${page}`
        try{
           const response=await fetch(url)
           const data=await response.json()
           setPage(data.page)
           setTotalPage(data.totalPages)
           setPosts(data.posts)
           

        }
        catch(error){
            console.log(error)

        }
        setLoading(false)
    }
    function pageHandler(page){
        setPage(page)
        getPosts(page)
    }

    const data={loading,page,totalPages,posts,getPosts,pageHandler,setPage}

  return (
      <AppContext.Provider value={data}>
        {children}
      </AppContext.Provider>
    
  )
}

export default AppContextProvider

