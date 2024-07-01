import React, { useReducer, useState } from "react";

function reducer(state, action) {
  if (action.type === "INCREMENT") {
    return state + 1;
  } else if (action.type === "DECREMENT") {
    return state - 1;
  } else if (action.type === "INCREMENT_BY") {
    return state + action.payload;
  } else {
    return state;
  }
}

function UseReducerDemo() {
  //   const [count, setCount] = useState(0);
  const [input, setInput] = useState("");

  const [count, dispatch] = useReducer(reducer, 0);

  function handleIncrement() {
    // setCount(count + 1);
    dispatch({ type: "INCREMENT" });
  }

  function handleDecrement() {
    // setCount(count - 1);
    dispatch({ type: "DECREMENT" });
  }

  function handleIncrementBy() {
    dispatch({ type: "INCREMENT_BY", payload: input });
  }

  function handleChange(e) {
    setInput(Number(e.target.value));
  }

  return (
    <div className="flex flex-col gap-4 items-center justify-center h-[400px]">
      <div className="flex flex-col gap-2">
        <input
          type="number"
          className="border border-indigo-500 rounded-lg py-2 px-4"
          onChange={handleChange}
        />
        <button
          className="bg-indigo-500 hover:bg-indigo-700 py-2 px-4 flex items-center justify-center text-white font-bold rounded-full"
          onClick={handleIncrementBy}
        >
          Increment By
        </button>
      </div>
      <div className="bg-indigo-200 p-8 flex items-center gap-4 shadow-md rounded-lg">
        <button
          className="bg-indigo-500 hover:bg-indigo-700 h-[36px] w-[36px] flex items-center justify-center text-white font-bold rounded-full"
          onClick={handleDecrement}
        >
          -
        </button>
        <p>{count}</p>
        <button
          className="bg-indigo-500 hover:bg-indigo-700 h-[36px] w-[36px] flex items-center justify-center text-white font-bold rounded-full"
          onClick={handleIncrement}
        >
          +
        </button>
      </div>
    </div>
  );
}

export default UseReducerDemo;
