import "./App.css";
import RandomGifGenerator from "./Components/RandomGifGenerator";
import RandomTagGifGenerator from "./Components/RandomTagGifGenerator";

function App() {
  return (
   <div className="w-screen min-h-screen background flex flex-col gap-6">
       <h1 className="w-11/12 text-4xl bg-white mx-auto mt-12 rounded-xl py-3 text-center font-semibold">RANDOM GIFS</h1>

    <RandomGifGenerator></RandomGifGenerator>
    <RandomTagGifGenerator></RandomTagGifGenerator>

   </div>
  );
}

export default App;
