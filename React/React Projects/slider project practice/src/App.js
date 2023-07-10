import "./App.css";
import Heading from "./Components/Heading";
import Card from "./Components/Card";
import reviews from "./Data";
import { useState } from "react";

function App() {
   const[singleReview,setSingleReview]=useState(reviews[0])

  return (
   <div className="bg-slate-200 w-screen h-screen flex flex-col gap-8">
        <Heading></Heading>
        <Card singleReview={singleReview} setSingleReview={setSingleReview} reviews={reviews} ></Card>
   </div>
  );
}

export default App;
