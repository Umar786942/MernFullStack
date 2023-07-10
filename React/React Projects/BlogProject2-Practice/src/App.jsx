import { Routes,Route, useLocation, useSearchParams } from "react-router-dom";
import "./App.css";
import HomePage from "./Pages/HomePage";
import TagPage from "./Pages/TagPage";
import CategoryPage from "./Pages/CategoryPage";
import SpecificBlogPage from "./Pages/SpecificBlogPage";
import { useContext, useEffect } from "react";
import { AppContext } from "./Context/AppContextProvider";


function App() {
  const{fetchData}=useContext(AppContext)
  const location=useLocation()
  const[searchParams,setSearchParams]=useSearchParams()
  useEffect(()=>{
    const page=searchParams.get("page") ?? 1
    console.log("Page Value is : -")
    console.log(page)
    if(location.pathname.includes("category")){
      const category=location.pathname.split("/").at(-1).replaceAll("-"," ")
      fetchData(Number(page),null,category)
    }
    else if(location.pathname.includes("tag")){
      const tag=location.pathname.split("/").at(-1).replaceAll("-"," ")
      fetchData(Number(page),tag)
    }
    else{
      fetchData(Number(page))
    }

    
  },[location.pathname,location.search])
  return (
    
    
       <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/blog/:blogId" element={<SpecificBlogPage/>} />
        <Route path="/tag/:tagId" element={<TagPage/>} />
        <Route path="/category/:category" element={<CategoryPage/>} />
      </Routes>
    
      
    
     
    
  );
}

export default App;
