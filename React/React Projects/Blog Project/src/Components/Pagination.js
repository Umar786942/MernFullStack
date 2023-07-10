import React, { useContext } from 'react'
import { AppContext } from '../Context/AppContextProvider'

function Pagination() {
  const{page,totalPages,pageHandler}=useContext(AppContext)
  return (
    <div>
      {page>1 && (<button onClick={()=>{
        
        pageHandler(page-1)

      }}>Previous</button>)
      }


      {page<totalPages && (<button onClick={()=>{
           
           pageHandler(page+1)

      }}>Next</button>)
      }
    </div>
  )
}

export default Pagination