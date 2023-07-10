import "./App.css";
import Header from "./Components/Header";
import Blogs from "./Components/Blogs";
import Pagination from "./Components/Pagination";
import { AppContext } from "./Context/AppContextProvider";
import { useContext, useEffect } from "react";

function App() {
  const { getPosts } = useContext(AppContext);
 
  useEffect(() => {
    getPosts();
     // eslint-disable-next-line 
  }, []);


  return (
    <div className="w-screen h-screen flex flex-col">
      <Header></Header>
      <Blogs></Blogs>
      <Pagination></Pagination>
    </div>
  );
}

export default App;
