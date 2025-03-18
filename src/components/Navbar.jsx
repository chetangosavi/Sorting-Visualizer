/* eslint-disable no-unexpected-multiline */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";

const Navbar = ({ randomArray, setRandomArray }) => {
  const algos = ["Selection Sort", "Bubble Sort", "Insertion Sort"];
  function GenRandomArr() {
    let arr = [];

    while (arr.length < 20) {
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
  function bubbleSort() {
    if (!Array.isArray(randomArray) || randomArray.length === 0) {
      console.error("Error: randomArray is not a valid array", randomArray);
      return;
    }
  
    let animations = [];
    let tempArray = [...randomArray]; 
  
    console.log("Initial tempArray:", tempArray);
  
    for (let i = 0; i < tempArray.length - 1; i++) {
      for (let j = 0; j < tempArray.length - i - 1; j++) {
        if (typeof tempArray[j] !== "number" || typeof tempArray[j + 1] !== "number") {
          console.error(`Non-numeric values found at ${j}:`, tempArray[j], tempArray[j + 1]);
          return;
        }
  
        if (tempArray[j] > tempArray[j + 1]) {
          animations.push([j, j + 1]); //storing swap index to animate later
  
          //swapping
          let temp = tempArray[j];
          tempArray[j] = tempArray[j + 1];
          tempArray[j + 1] = temp;
        }
      }
    }
  
    console.log("Animations in bubble sort:", animations);
    animateSorting(animations, [...randomArray], setRandomArray); 
  }
  

  //Animate Logic
  function animateSorting(animations, randomArray, setRandomArray) {
    if (!Array.isArray(randomArray) || randomArray.length === 0) return; 
  
    let tempArr = [...randomArray];
  
    animations.forEach((swap, index) => {
      setTimeout(() => {
        let [i, j] = swap;
  
        if (typeof tempArr[i] !== "number" || typeof tempArr[j] !== "number") {
          console.error(`Skipping invalid swap at ${i}, ${j}:`, tempArr[i], tempArr[j]);
          return;
        }
  
        
        let temp = tempArr[i];
        tempArr[i] = tempArr[j];
        tempArr[j] = temp;
  
        setRandomArray([...tempArr]); 
      }, index * 100);
    });
  }

  return (
    <div className="w-full sticky top-0 flex flex-col justify-center items-center bg-white z-50 shadow-lg p-5">
      <div className="">
        <h1 className="uppercase text-4xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-purple-500 bg-clip-text text-transparent">
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
          {algos.map((elm, idx) => (
            <option key={idx}>{elm}</option>
          ))}
        </select>
        <button
          onClick={bubbleSort}
          className="px-5 py-1 bg-blue-500 text-white font-semibold cursor-pointer"
        >
          Start
        </button>
      </div>
    </div>
  );
};

export default Navbar;
