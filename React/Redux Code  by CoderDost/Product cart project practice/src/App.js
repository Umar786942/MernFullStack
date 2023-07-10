import { Routes } from "react-router-dom";
import "./App.css";
import Product from "./features/Product/Product";
import { Route } from "react-router-dom";
import Cart from "./features/Cart/Cart";
import Navbar from "./Components/Navbar";
import { Toaster } from 'react-hot-toast';

function App() {


  return (<div className="w-screen h-screen overflow-x-hidden">
            <Navbar></Navbar>
   <Routes>
    <Route path='/' element={<Product/>}></Route>
    <Route path='/cart' element={<Cart/>}></Route>
    <Route></Route>
   </Routes>
   <Toaster />
  </div>
 
  );
}

export default App;
