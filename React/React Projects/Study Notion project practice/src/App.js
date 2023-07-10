import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import { Route,Routes } from "react-router-dom";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import DashBoard from "./Pages/DashBoard";
import { useState } from "react";
import PrivateRoute from "./Components/PrivateRoute";

function App() {
  const[isLoggedIn,setIsLoggedIn]=useState(false)
  return (
    <div className="w-screen min-h-screen bg-slate-900 box-border flex flex-col gap-12 pb-12">
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
        <Route path="/login" element={<Login isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}></Login>}></Route>
        <Route path="/signup" element={<SignUp isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}></SignUp>}></Route>
        <Route path="/dashboard" element={
        <PrivateRoute isLoggedIn={isLoggedIn}>
           <DashBoard></DashBoard>
        </PrivateRoute>
        }></Route>
      </Routes>

    </div>
  );
}

export default App;
