import { useState } from "react";
import Bar from "./components/Bar.jsx";
import Navbar from "./components/Navbar";

const App = () => {
  const [randomArray, setRandomArray] = useState([]);
  console.log(randomArray)

  return (
    <>
      <Navbar setRandomArray={setRandomArray}  randomArray ={randomArray}/>
      <div className="w-full h-screen flex justify-center ">
        <div className=" flex gap-2 ">
          {randomArray.map((elm,idx) => (
            <Bar key={idx} height={elm} />
          ))}
        </div>
      </div>
    </>
  );
};

export default App;
