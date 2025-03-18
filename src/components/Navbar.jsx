/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";

const Navbar = ({ randomArray,setRandomArray }) => {
  const algos = ["Selection Sort" , "Bubble Sort","Insertion Sort"]
  function GenRandomArr() {
    let arr = [];

    while (arr.length <= 20) {
      const randomNumber = Math.floor(Math.random() * (100 - 5 + 1)) + 5;
      if (!arr.includes(randomNumber)) arr.push(randomNumber);
    }
    console.log(arr);
    setRandomArray([...arr]);
  }
  useEffect(() => {
    GenRandomArr();
  }, []);

  // Sorting Logic
  function bubbleSort(){
      let animation = [];
      let temparr = [...randomArray]
      console.log(temparr,animation)

      for(let i = 0; i<temparr.length-1; i++){
        for(let j = 0; j<temparr.length-i-1;j++){
          console.log(i,j)
        }
      }

      animateSorting();
  }

  //Animate Logic
  function animateSorting (){

  }

  return (
    <div className="w-full sticky top-0 flex flex-col justify-center items-center bg-white z-50 shadow-lg p-5">
      <div className="">
        <h1 class="uppercase text-4xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-purple-500 bg-clip-text text-transparent">
          Sorting Visualizer
        </h1>
      </div>

      <div className="bottom-0 mt-3 flex gap-3">
        <button
          onClick={GenRandomArr}
          className="px-5 py-1 bg-blue-500 text-white cursor-pointer"
        >
          Generate Array
        </button>
        <select name="blogs" id="blogs" className="border">
          {
            algos.map((elm,idx)=><option key={idx}>{elm}</option>)
          }
        </select>
        <button onClick={bubbleSort} className="px-5 py-1 bg-blue-500 text-white font-semibold cursor-pointer">
          Start
        </button>
      </div>
    </div>
  );
};

export default Navbar;
