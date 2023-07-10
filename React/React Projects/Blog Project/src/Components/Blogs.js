import React, { useContext } from 'react'
import { AppContext } from '../Context/AppContextProvider'
import Spinner from './Spinner'

function Blogs() {
  const{posts,loading}=useContext(AppContext)
  return (
    <div>
      {loading? (<Spinner/>) : (posts.length===0?(<div><h1>No Blogs Found</h1></div>):(
        posts.map((post)=>{
          return(
            <div key={post.id}>
              <p>{post.title}</p>
              <p>By {post.author}</p>
              <p>Posted On {post.date}</p>
              <p>{post.content}</p>
              {post.tags.map((tag,index)=>{
                return(<p key={index}>{` #${tag}`}</p>)
              })}

            </div>
            )

        })
      ))}
    </div>
  )
}

export default Blogs