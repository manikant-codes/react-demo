import React, { useCallback, useState } from "react";
import Todos from "../components/memo/Todos";

function Memo() {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState(["Task 1"]);

  function handleIncrement() {
    setCount(count + 1);
  }

  function handleDecrement() {
    setCount(count - 1);
  }

  const addTask = useCallback(
    function () {
      setTodos([...todos, `Task ${todos.length + 1}`]);
    },
    [todos]
  );

  return (
    <div className="p-8 grid grid-cols-2 gap-4">
      <div className="p-8 bg-indigo-200 rounded-lg">
        <h2 className="text-xl font-bold text-indigo-700">Counter</h2>

        <div className="flex items-center gap-4 mt-4">
          <button
            className="bg-indigo-500 hover:bg-indigo-700 p-4 rounded-full text-white font-bold text-xl h-4 w-4 flex items-center justify-center"
            onClick={handleDecrement}
          >
            -
          </button>
          <p className="text-xl">{count}</p>
          <button
            className="bg-indigo-500 hover:bg-indigo-700 p-4 rounded-full text-white font-bold text-xl h-4 w-4 flex items-center justify-center"
            onClick={handleIncrement}
          >
            +
          </button>
        </div>
      </div>
      <div className="p-8 bg-indigo-200 rounded-lg">
        <Todos todos={todos} addTask={addTask} />
      </div>
    </div>
  );
}

export default Memo;
