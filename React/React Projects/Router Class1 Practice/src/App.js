import "./App.css";
import { Route,Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import Home from "./Components/Home";
import Courses from "./Components/Courses";
import About from "./Components/About";
import Labs from "./Components/Labs";
import ParentComponent from "./Components/ParentComponent";
import PageNotFound from "./Components/PageNotFound";
function App() {
  return (<div className="w-screen h-screen bg-slate-300 text-white font-bold">
  <nav className="bg-slate-700 w-full flex justify-center gap-10 font-normal items-center text-2xl h-[8%]">
    <div><Link to="/" className="hover:font-bold">Home</Link></div>
    <div><Link to="/about" className="hover:font-bold">About</Link></div>
    <div><Link to="/courses" className="hover:font-bold">Courses</Link></div>
    <div><Link to="/labs" className="hover:font-bold">Labs</Link></div>
  </nav>
    <Routes>
    <Route path="/" element={<ParentComponent></ParentComponent>}>
      <Route index element={<Home></Home>}></Route>
      <Route path="/about" element={<About></About>}></Route>
      <Route path="/courses" element={<Courses></Courses>}></Route>
      <Route path="/labs"element={<Labs></Labs>}></Route>
      <Route path="*" element={<PageNotFound></PageNotFound>}></Route>
    </Route>
      
      
    </Routes>
  </div>
    
  );
}

export default App;
