import React, { useState } from "react";

function UseStateIntro() {
  const [count, setCount] = useState(0);

  //   const value = useState(0);
  //   const [count, setCount] = value;

  //   const count = value[0];
  //   const setCount = value[1];

  function handleIncrease() {
    setCount(count + 1);
  }
  function handleDecrease() {
    setCount(count - 1);
  }

  return (
    <div className="h-[400px] p-8 flex items-center justify-center">
      <div className="bg-indigo-200 p-4 rounded-lg shadow-sm">
        <h2 className="text-xl text-indigo-800">Counter</h2>
        <div className="flex items-center gap-4 mt-4">
          <button
            className="bg-indigo-500 flex items-center justify-center text-white text-xl font-bold h-[40px] w-[40px] rounded-full hover:bg-indigo-700"
            onClick={handleDecrease}
          >
            -
          </button>
          <p className="text-xl">Count: {count}</p>
          <button
            className="bg-indigo-500 flex items-center justify-center text-white text-xl font-bold h-[40px] w-[40px] rounded-full hover:bg-indigo-700"
            onClick={handleIncrease}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}

export default UseStateIntro;
